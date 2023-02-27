from fastapi import APIRouter, Body, HTTPException
#from backend.models import user as user_
from models.user import LoginUserSchema,VerifyOTPResponse,SessionToken
from fastapi.encoders import jsonable_encoder
from config.database import db as database
from config.jwt_handler import JWT_ALGORITHM, JWT_SECRET
from config.twilio_config import twilio_client, twilio_number
from schemas.user import serializeDict, serializeList
from bson import ObjectId
import random
from datetime import datetime,timedelta
import time
import jwt

#app = FastAPI()
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



@router.post("/login")
async def login_account(user:LoginUserSchema= Body(...)):
    user_dict = jsonable_encoder(user)
    # check if same record exists
    if database.otp_mapping.find_one({'phone_number': user.phone_number}):
        active_status = database.user.find_one({'phone_number': user.phone_number})['is_active']
        if active_status== True:
            # # generate and save otp for user
            otp = otp_generate_save(user_dict['phone_number'])
            # # send otp to users phone number
            send_otp_to_phone(user_dict['phone_number'], otp)
            return {'status_code':200, 'message': 'otp send successfully'}
        else:
            raise HTTPException(status_code=409, detail="is_creation is not set as true !")

    else:
        raise HTTPException(status_code=409, detail="Phone number not exists !")


@router.post("/api/v1/verify_otp")
async def verify_otp(vphone_number: str, votp: int):
    # Compare the provided OTP with the stored OTP
    if database.otp_mapping.find_one({'phone_number': vphone_number, 'otp': votp}):
        current_timestamp = datetime.now()
        timestamp = database.otp_mapping.find_one({'phone_number': vphone_number})['timestamp']
        if current_timestamp - timestamp <= timedelta(seconds=120):
            session_token = jwt.encode({'phone_number': vphone_number},JWT_SECRET, algorithm=JWT_ALGORITHM)
            jwt_token = SessionToken(session_token = session_token)
            jwt_dict = jsonable_encoder(jwt_token)
            database.otp_mapping.update_one(
                {'phone_number': vphone_number},
                {"$set": {'JWT_Token': jwt_dict}},
                upsert=True
            )
            response = VerifyOTPResponse(message="OTP verified successfully",session_token=session_token)
            return response
        else:
            raise HTTPException(status_code=400, detail= "otp expired ")
    else:
        # Return an error message
        response = VerifyOTPResponse(message="Invalid PHONE NUMBER OR OTP ", session_token="")
        return response

