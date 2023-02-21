from fastapi import APIRouter, Body, HTTPException
from fastapi.security import OAuth2PasswordBearer
#from backend.models import user as user_
from models.user import LoginUserSchema,VerifyOTPResponse
from fastapi.encoders import jsonable_encoder
from config.database import db as database
from config.twilio_config import twilio_client, twilio_number
import jwt
from schemas.user import serializeDict, serializeList
from bson import ObjectId
import random
import datetime
import time

#app = FastAPI()
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
    messages = twilio_client.messages.create(to=phone_number, from_=twilio_number, body=f"Your one-time password is {otp}")
    print("Sent OTP to phone successfully !!")


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/verify_otp")
@router.post("/login")
async def login_account(user:LoginUserSchema= Body(...)):
    user_dict = jsonable_encoder(user)

    user_dict.update({'is_active': False})

    # check if same record exists
    if database.user.find_one({'phone_number': user_dict['phone_number']}):


             # # generate and save otp for user
        otp = otp_generate_save(user_dict['phone_number'])
    # # send otp to users phone number
        send_otp_to_phone(user_dict['phone_number'], otp)

        return {'status_code':200, 'message': 'otp send successfully'}
    else:
        raise HTTPException(status_code=409, detail="Phone number not exists !")
@router.post("/api/v1/verify_otp")
async def verify_otp(votp: int, is_creation: bool):
    # Compare the provided OTP with the stored OTP
    if database.otp_mapping.find_one({'otp': votp}):
        if database.otp_mapping.
            response = VerifyOTPResponse(message="OTP verified successfully")
            if is_creation:
                database.user.update_one(
                    {'phone_number': database.otp_mapping.phone_number},
                    {"$set": {'is_active': True}},
                    upsert=False
                    )
            return response
        else:
            raise HTTPException(status_code=400, detail="otp was expired 120 seconds back")

    else:
        # Return an error message
        response = VerifyOTPResponse(message="Invalid OTP")
        return response