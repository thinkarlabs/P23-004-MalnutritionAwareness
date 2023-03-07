from fastapi import APIRouter, Body, Depends
from models.user import CreateUserSchema,VerifyOTPSchema,LoginUserSchema, ResendOTPSchema
from fastapi.encoders import jsonable_encoder
from config.database import db as database
from config.jwt_handler import JWT_ALGORITHM,JWT_SECRET
from config.twilio_config import twilio_client,twilio_number
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordBearer
from schemas.user import serializeDict, serializeList
from bson import ObjectId
import random
import datetime
import jwt


router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def otp_generate_save(phone_number):
    # Generate 4 digit random OTP and timestamp
    otp = random.randint(1000, 9999)
    timestamp = datetime.datetime.now()
    # Upsert the phone_number:otp mapping
    database.otp_mapping.update_one(
        {'phone_number': phone_number},
        {"$set": {'otp': otp, 'timestamp': timestamp}},
        upsert=True
    )

    return otp


def send_otp_to_phone(phone_number, otp):
    try:
        messages = twilio_client.messages.create(to=phone_number, from_=twilio_number, body=f"Your one-time password is {otp}")
        print("Sent OTP to phone successfully !!")
    except Exception as e:
        print(e)


@router.post("/account")
async def create_account(user: CreateUserSchema = Body(...)):
    user_dict = jsonable_encoder(user)
    user_dict.update({'is_active': False})

    if database.user.find_one({'phone_number': user_dict['phone_number'], 'is_active':False}):
        # Update the user info
        database.user.update_one({'phone_number': user_dict['phone_number']}, {'$set': {
                'name': user_dict['name'],
                'user_type':user_dict['user_type'],
                'relation_with_child':user_dict['relation_with_child'],
                'lmp': user_dict['lmp'],
                'is_created_for_someone_else': user_dict['is_created_for_someone_else'],
                'child': user_dict['child']
                }})
        otp = otp_generate_save(user_dict['phone_number'])
        send_otp_to_phone(user_dict['phone_number'], otp)
        return JSONResponse(status_code=200, content={"message": "User saved successfully"})

    # check if same record exists with active status True
    elif database.user.find_one({'phone_number': user_dict['phone_number'], 'is_active':True}):
        return JSONResponse(status_code=409, content={'error': 'Phone number already exists !'})

    # Create new user account
    else:
        database.user.insert_one(user_dict)
        # generate and save otp for user
        otp = otp_generate_save(user_dict['phone_number'])
        # send otp to users phone number
        send_otp_to_phone(user_dict['phone_number'], otp)
        return JSONResponse(status_code=200, content={"message": "User saved successfully"})

@router.post("/api/v1/resend_otp")
async def resend_otp(phone_number:ResendOTPSchema= Body(...)):
    phone_number_dict = jsonable_encoder(phone_number)

    otp = otp_generate_save(phone_number_dict['phone_number'])
    send_otp_to_phone(phone_number_dict['phone_number'], otp)

    return JSONResponse(status_code=200, content={'message': 'OTP sent successfully'})



@router.post("/login")
async def login_account(user:LoginUserSchema= Body(...)):
    user_dict = jsonable_encoder(user)
    # check if same record exists
    if database.user.find_one({'phone_number': user.phone_number}):
        active_status = database.user.find_one({'phone_number': user.phone_number})['is_active']
        if active_status:
            # # generate and save otp for user
            otp = otp_generate_save(user_dict['phone_number'])
            # # send otp to users phone number
            send_otp_to_phone(user_dict['phone_number'], otp)

            return JSONResponse(status_code=200, content={"message": "otp sent successfully"})
        else:
            return JSONResponse(status_code=404, content={"error":"Account not found !"})

    else:
        return JSONResponse(status_code=409, content={"error":"Phone number does not exists !"})

@router.post("/api/v1/verify_otp")
async def verify_otp(user: VerifyOTPSchema = Body(...)):
    user_dict = jsonable_encoder(user)
    # Compare the provided OTP with the stored OTP
    if database.otp_mapping.find_one({'phone_number': user_dict['phone_number'], 'otp': user_dict['otp']}):
        # check expiration of entered OTP
        curr_time = datetime.datetime.now()
        otp_gen_time = database.otp_mapping.find_one({'phone_number': user_dict['phone_number'], 'otp': user_dict['otp']},
                                                     {'timestamp': 1, '_id': 0})
        valid_time = otp_gen_time['timestamp'] + datetime.timedelta(seconds=60)
        if curr_time > valid_time:
            return JSONResponse(status_code=400, content={'error': 'OTP expired !'})

        #setting the token expirition time for 1 year

        expires_delta = datetime.timedelta(days=365)
        to_encode = {'phone_number': user_dict['phone_number'], 'exp': datetime.datetime.utcnow() + expires_delta}
        encoded_jwt = jwt.encode(to_encode, JWT_SECRET, algorithm=JWT_ALGORITHM)
        if user_dict['is_creation']:
            database.user.update_one(
                {'phone_number': user_dict['phone_number']},
                {"$set": {'is_active': True}},
                upsert=False
            )
        return JSONResponse(status_code=200,content={"message": "OTP verified successfully",
                                                     "access_token": encoded_jwt})
    else:
        # Return an error message
        return JSONResponse(status_code=400,content={"error": "Invalid OTP"})

@router.get("/api/v1/sync")
async def sync(token: str = Depends(oauth2_scheme)):
    try:
        print(token)
        decoded = jwt.decode(token, JWT_SECRET, algorithms=JWT_ALGORITHM)
    except jwt.ExpiredSignatureError:
        return JSONResponse(content={'error': 'JWT Token expired'})
    except jwt.PyJWTError as e:
        print(e)
        return JSONResponse(content={'error': 'Invalid Token'})
    user_phone_number = decoded['phone_number']
    user_details = database.user.find_one({'phone_number': user_phone_number})
    child_details = user_details['child']
    if not child_details:
        days_from_lmp = (datetime.datetime.today() - datetime.datetime.strptime(user_details['lmp'], '%Y-%m-%d')).days
        video_link = database.home_video.find_one({'$and': [{'persona_type': 'pregnant'},
                                                  {'from_days': {'$lte': days_from_lmp}},
                                                  {'upto_days': {'$gte': days_from_lmp}}]},
                                                  {'video_link': 1, '_id': 0})
        response = {"mother_details":
                        {"name": user_details['name'], "phone number": user_details['phone_number'],
                         "lmp": user_details['lmp']},
                    "child_details": None,
                    "video": video_link['video_link']}
    else:
        days_from_dob = (datetime.datetime.today() - datetime.datetime.strptime(child_details[0]['dob'], '%Y-%m-%d')).days
        video_link = database.home_video.find_one({'$and': [{"persona_type": {"$in": ["lactating", "caregiver"]}},
                                                  {'from_days': {'$lte': days_from_dob}},
                                                  {'upto_days': {'$gte': days_from_dob}}]},
                                                  {'video_link': 1, '_id': 0})
        response = {"mother_details":
                        {"name": user_details['name'], "phone number": user_details['phone_number'],
                         "lmp": user_details['lmp']},
                    "child_details":
                        {"name": child_details[0]['name'], "dob": child_details[0]['dob']},
                    "video": video_link['video_link']}

    return JSONResponse(content=response)

