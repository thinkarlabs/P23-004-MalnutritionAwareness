from fastapi import APIRouter, Body
from models.user import CreateUserSchema, ResponseModel, VerifyOTPResponse, VerifyOTPSchema,LoginUserSchema
from fastapi.encoders import jsonable_encoder
from config.database import db as database
from config.jwt_handler import JWT_ALGORITHM, JWT_SECRET
from config.twilio_config import twilio_client, twilio_number
from fastapi.responses import JSONResponse
from schemas.user import serializeDict, serializeList
from bson import ObjectId
import random
import datetime
import jwt


router = APIRouter()

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

    # check if same record exists
    if database.user.find_one({'phone_number': user_dict['phone_number']}):
        return JSONResponse(status_code=409, content={'error': 'Phone number already exists !'})

    database.user.insert_one(user_dict)

    # generate and save otp for user
    otp = otp_generate_save(user_dict['phone_number'])
    # send otp to users phone number
    send_otp_to_phone(user_dict['phone_number'], otp)

    return JSONResponse(status_code=200, content={"message": "User saved successfully"})
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
            return {'status_code':200, 'message': 'otp send successfully'}
        else:
            return JSONResponse(status_code=404, content={"error":"Account not found !"})

    else:
        return JSONResponse(status_code=409, content={"error":"Phone number not exists !"})

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
        session_token = jwt.encode({'phone_number': user_dict['phone_number']}, JWT_SECRET, algorithm=JWT_ALGORITHM)
        response = VerifyOTPResponse(message="OTP verified successfully", session_token=session_token)
        if user_dict['is_creation']:
            database.user.update_one(
                {'phone_number': user_dict['phone_number']},
                {"$set": {'is_active': True}},
                upsert=False
            )


        return JSONResponse(status_code=200,content={"success": "OTP verifed successfully"})
    else:
        # Return an error message
        return JSONResponse(status_code=400,content={"error": "Invalid OTP"})




