from fastapi import APIRouter, Body, HTTPException

#from backend.models import users as user_
from models.user import CreateUserSchema, ResponseModel, VerifyOTPResponse,ALGORITHM,SECRET_KEY,SessionToken
from fastapi.encoders import jsonable_encoder
from config.database import db as database
from config.twilio_config import twilio_client, twilio_number
from schemas.user import serializeDict, serializeList
from bson import ObjectId
import random
from fastapi.security import OAuth2PasswordBearer
import jwt
from datetime import datetime,timedelta
import time


router = APIRouter()

def otp_generate_save(phone_number):
    # Generate 4 digit random OTP and timestamp
    otp = random.randint(1000, 9999)
    timestamp = datetime.now()
    # Upsert the phone_number:otp mapping
    database.otp_mapping.update_one(
        {'phone_number': phone_number},
        {"$set": {'otp': otp, 'timestamp': timestamp}},
        upsert=True
    )

    return otp

def send_otp_to_phone(phone_number, otp):
    messages = twilio_client.messages.create(to=phone_number, from_=twilio_number, body=f"Your one-time password is {otp}")
    print("Sent OTP to phone successfully !!")

@router.post("/account")
async def create_account(user: CreateUserSchema= Body(...)):
    user_dict = jsonable_encoder(user)

    user_dict.update({'is_active': False})

    # check if same record exists
    if database.user.find_one({'phone_number': user_dict['phone_number']}):
        raise HTTPException(status_code=409, detail="Phone number already exists !")

    database.user.insert_one(user_dict)

    # # generate and save otp for user
    otp = otp_generate_save(user_dict['phone_number'])
    # # send otp to users phone number
    send_otp_to_phone(user_dict['phone_number'], otp)

    return {'status_code':200, 'message': 'User saved successfully'}

# Use OAuth2PasswordBearer for authorization
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/verify_otp")

@router.post("/api/v1/verify_otp")
async def verify_otp(vphone_number: str, votp: int,is_creation:bool):
    # Compare the provided OTP with the stored OTP
    if database.otp_mapping.find_one({'phone_number': vphone_number, 'otp': votp}):
        #current_timestamp = datetime.datetime.now()
        #if database.otp_mapping.find_one({'timestamp': current_timestamp - database.otp_mapping.timestamp <= 120}):
        current_timestamp = datetime.now()
        timestamp = database.otp_mapping.find_one({'phone_number': vphone_number})['timestamp']
        if current_timestamp - timestamp <= timedelta(seconds=120):
            session_token = jwt.encode({'phone_number': vphone_number},SECRET_KEY, algorithm=ALGORITHM)
            jwt_token = SessionToken(session_token = session_token)
            jwt_dict = jsonable_encoder(jwt_token)
            database.otp_mapping.update_one(
                {'phone_number': vphone_number},
                {"$set": {'JWT_Token': jwt_dict}},
                upsert=True
            )
            response = VerifyOTPResponse(message="OTP verified successfully")
            if is_creation:
                database.user.update_one(
                    {'phone_number': vphone_number},
                    {"$set": {'is_active': True}},
                    upsert=False
                )
            return response
        else:
            raise HTTPException(status_code=400, detail= "otp expired ")
    else:
        # Return an error message
        response = VerifyOTPResponse(message="Invalid PHONE NUMBER OR OTP ", session_token="")
        return response