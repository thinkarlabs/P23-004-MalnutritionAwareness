from fastapi import APIRouter, Body, HTTPException
from models.user import CreateUserSchema, ResponseModel, UserRole
from fastapi.encoders import jsonable_encoder
from config.database import db as database
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
    print("Sent OTP to phone successfully !!")


@router.post("/account")
async def create_account(user: CreateUserSchema = Body(...)):
    user_dict = jsonable_encoder(user)

    user_dict.update({'is_active': False})

    # Check if the user wants to create an account for someone else
    if user.is_created_for_someone_else:
        # Get the name of the person for whom the account is being created
        full_name = user.name

        # Add the new user to the database with the specified information
        user_dict.update({
            'full_name': full_name
        })

    else:
        # check if same record exists
        if database.user.find_one({'phone_number': user_dict['phone_number']}):
            raise HTTPException(status_code=409, detail="Phone number already exists !")

    database.user.insert_one(user_dict)

    # # generate and save otp for user
    otp = otp_generate_save(user_dict['phone_number'])
    # # send otp to users phone number
    send_otp_to_phone(user_dict['phone_number'], otp)

    return {'status_code': 200, 'message': 'User saved successfully'}


    
