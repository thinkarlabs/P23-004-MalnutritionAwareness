from fastapi import Body, Depends
from fastapi.encoders import jsonable_encoder
from config.database import db as database
from config.jwt_handler import JWT_ALGORITHM, JWT_SECRET
from fastapi.responses import JSONResponse
import jwt
from enum import Enum
from pydantic import BaseModel, PositiveFloat
from typing import Optional
from fastapi.security import OAuth2PasswordBearer
from fastapi import APIRouter

router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


class WeightForHeight(str, Enum):
    SAM = 'SAM'
    MAM = 'MAM'
    NORMAL = 'NORMAL'


class WeightForAge(str, Enum):
    SEVERELY_UNDERWEIGHT = 'SEVERELY_UNDERWEIGHT'
    MODERATELY_UNDERWEIGHT = 'MODERATELY_UNDERWEIGHT'
    NORMAL = 'NORMAL'


class HeightForAge(str, Enum):
    SEVERELY_STUNTED = 'SEVERELY_STUNTED'
    MODERATELY_STUNTED = 'MODERATELY_STUNTED'
    NORMAL = 'NORMAL'


class TrackHealthSchema(BaseModel):
    weeks: int
    weight: PositiveFloat
    height: int
    head_circumference: Optional[PositiveFloat] = None
    mid_upper_arm_circumference: Optional[PositiveFloat] = None
    weight_for_height: WeightForHeight
    weight_for_age: WeightForAge
    height_for_age: HeightForAge


@router.post("/api/v1/track_health")
async def track_health(token: str = Depends(oauth2_scheme), user: TrackHealthSchema = Body(...)):
    try:
        decoded = jwt.decode(token, JWT_SECRET, algorithms=JWT_ALGORITHM)
    except jwt.ExpiredSignatureError:
        return JSONResponse(content={'error': 'JWT Token expired'})
    except jwt.PyJWTError as e:
        print(e)
        return JSONResponse(content={'error': 'Invalid Token'})
    user_phone_number = decoded['phone_number']
    user_details = database.user.find_one({'phone_number': user_phone_number})
    user_dict = jsonable_encoder(user)
    database.trackhealth.update_one({'weeks': user_dict['weeks']},
                                    {'$set': {'user_id': user_details['_id'],
                                              'weight': user_dict['height'],
                                              'height': user_dict['height'],
                                              'head_circumference': user_dict['head_circumference'],
                                              'mid_upper_arm_circumference': user_dict[
                                                  'mid_upper_arm_circumference'],
                                              'weight_for_height': user_dict['weight_for_height'],
                                              'weight_for_age': user_dict['weight_for_age'],
                                              'height_for_age': user_dict['height_for_age']
                                              }}, upsert=True)
    return JSONResponse(content={"weight_for_height": user_dict['weight_for_height'],
                                 "weight_for_age": user_dict['weight_for_age'],
                                 "height_for_age": user_dict['height_for_age']})
