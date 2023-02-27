from fastapi import APIRouter, Body, HTTPException
from fastapi.encoders import jsonable_encoder
from models.user import LoginUserSchema
from routes.user import otp_generate_save,send_otp_to_phone
from config.database import db as database


router = APIRouter()


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
            raise HTTPException(status_code=404, detail="Account not found !")

    else:
        raise HTTPException(status_code=409, detail="Phone number not exists !")


