from fastapi import APIRouter, Body, HTTPException
from models.user import CreateUserSchema
from fastapi.encoders import jsonable_encoder
from config.database import db as database
from config.twilio_config import twilio_client, twilio_number
from schemas.user import serializeDict, serializeList
from bson import ObjectId
import random
import time


router = APIRouter()


def otp_generate_save(phone_number):
    # Generate 4 digit random OTP and timestamp
    otp = random.randint(1000, 9999)
    timestamp = time.time()

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
async def create_account(user: CreateUserSchema = Body(...)):
    user_dict = jsonable_encoder(user)

    user_dict.update({'is_active': False})

    # Check if the user wants to create an account for someone else
    if user.is_created_for_someone_else:
        user_dict.update({})

    else:
        # check if same record exists
        if database.user.find_one({'phone_number': user_dict['phone_number']}):
            raise HTTPException(status_code=409, detail="Phone number already exists !")

    database.user.insert_one(user_dict)

    # generate and save otp for user
    otp = otp_generate_save(user_dict['phone_number'])
    # send otp to users phone number
    send_otp_to_phone(user_dict['phone_number'], otp)

    remaining_time = 60
    while remaining_time > 0:
        # Check if OTP has been entered within 1 minute
        otp_mapping = database.otp_mapping.find_one({'phone_number': user_dict['phone_number']})
        if otp_mapping and time.time() - otp_mapping['timestamp'] <= 60:
            # OTP has been entered
            return {'status_code': 200, 'message': 'User saved successfully'}
        else:
            # OTP has not been entered or expired, offer to resend OTP
            current_time = time.strftime("%M:%S", time.gmtime(remaining_time))
            print(f"Remaining time to enter OTP: {current_time}")
            time.sleep(1)
            remaining_time -= 1

    # Time to enter OTP has expired
    return {'status_code': 400, 'message': 'OTP expired. Resend OTP?'}





    
