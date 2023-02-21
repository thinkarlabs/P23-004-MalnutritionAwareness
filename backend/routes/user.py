from fastapi import APIRouter, Body, HTTPException
from fastapi.security import OAuth2PasswordBearer
from models.user import CreateUserSchema, ResponseModel,VerifyOTPResponse,SECRET_KEY,ALGORITHM
from fastapi.encoders import jsonable_encoder
from config.database import db as database
from config.twilio_config import twilio_client, twilio_number
import jwt
from schemas.user import serializeDict, serializeList
from bson import ObjectId
import random


router = APIRouter()
def otp_generate_save(phone_number):
    # Generate 4 digit random OTP
    otp = random.randint(1000, 9999)

    # Upsert the phone_number:otp mapping
    database.otp_mapping.update_one(
        {'phone_number': phone_number},
        {"$set": {'otp': otp}},
        upsert=True
    )

    return otp

def send_otp_to_phone(phone_number, otp):
    messages = twilio_client.messages.create(to=phone_number, from_=twilio_number, body=f"Your one-time password is {otp}")
    print("Sent OTP to phone successfully !!")

@router.post("/account")
async def create_account(user:CreateUserSchema= Body(...)):
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


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/verify_otp")

@router.post(oauth2_scheme)
async def verify_otp(vphone_number: str, votp: int, is_creation: True):
    # Compare the provided OTP with the stored OTP
    if database.otp_mapping.find_one({'phone_number': vphone_number, 'otp': votp}):
        session_token = jwt.encode({'phone_number': vphone_number}, SECRET_KEY, algorithm=ALGORITHM)
        response = VerifyOTPResponse(message="OTP verified successfully", session_token=session_token)
        if is_creation:
            database.user.update_one(
                {'phone_number': vphone_number},
                {"$set": {'is_active': True}},
                upsert=False
            )
        return response
    else:
        # Return an error message
        response = VerifyOTPResponse(message="Invalid OTP", session_token="")
        return response