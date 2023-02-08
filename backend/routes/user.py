from fastapi import APIRouter, Body, HTTPException
from models.user import User, UserSchema, ResponseModel
from fastapi.encoders import jsonable_encoder
from config.database import db as database
from schemas.user import serializeDict, serializeList
from bson import ObjectId
import random
from helper.user_otp import otp_generate_save,send_otp_to_phone

router = APIRouter()

# @user.get('/')
# async def find_all_users():
#     return serializeList(db.user.find())

# @user.get('/{id}')
# async def find_one_user(id):
#     return serializeDict(db.user.find_one({"_id":ObjectId(id)}))

# @user.post('/api/v1/account')
# async def create_accou(user: User):
#     db.user.insert_one(dict(user))
#     return serializeList(db.user.find())

@router.post("/account")
async def create_account(user: UserSchema= Body(...)):
    user_dict = jsonable_encoder(user)

    # Update the child details schema
    user_dict.update(
        {'children': [
            {'name':user_dict['child_name'], 'gender': user_dict['gender'], 'dob': user_dict['dob']}
        ]}
    )

    # remove redundant keys
    del user_dict['child_name']
    del user_dict['gender']
    del user_dict['dob']

    user_dict.update({'is_active': False})

    # check if same record exists
    if database.user_collection.find_one({'phone_number':user_dict['phone_number']}):
        raise HTTPException(status_code=409, detail="Phone number already exists !")

    new_user = database.user_collection.insert_one(user_dict)
    # generate and save otp for user
    otp_generate_save(phone_number, db)
    # send otp to users phone number
    send_otp_to_phone(phone_number, otp)

    return {'status_code':200, 'message': 'User saved successfully'}
    


#
# @user.put('/{id}')
# async def update_user(id,user: User):
#     db.user.find_one_and_update({"_id":ObjectId(id)},{
#         "$set":dict(user)
#     })
#     return serializeDict(db.user.find_one({"_id":ObjectId(id)}))
#
# @user.delete('/{id}')
# async def delete_user(id,user: User):
#     return serializeDict(db.user.find_one_and_delete({"_id":ObjectId(id)}))
