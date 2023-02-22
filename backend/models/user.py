from enum import Enum
import datetime
from typing import Optional, List
from pydantic import BaseModel, validator, constr


class UserType(str, Enum):
    PREGNANT = 'PREGNANT'
    LACTATING = 'LACTATING'
    CAREGIVER = 'CAREGIVER'


class RelationWithChild(str, Enum):
    NGO_MEMBER = 'NGO_MEMBER'
    RELATIVE = 'RELATIVE'
    ANGANWADI_MEMBER = 'ANGANWADI_MEMBER'

class GenderType(str, Enum):
    MALE = 'MALE'
    FEMALE = 'FEMALE'


class Child(BaseModel):
    name: str
    gender: GenderType
    dob: datetime.date

    @validator("dob", pre=True)
    def parse_dob(cls, value):
        return datetime.datetime.strptime(
            value,
            "%d/%m/%Y"
        ).date()


class CreateUserSchema(BaseModel):
    name: str
    phone_number: constr(
        strip_whitespace=True,
        regex=r"^(\+)[1-9][0-9\-\(\)\.]{9,15}$",
    )
    user_type: UserType
    relation_with_child: Optional[RelationWithChild] = None
    child: List[Child]
    lmp: Optional[datetime.date] = None
    is_created_for_someone_else: Optional[bool] = False

    @validator("lmp", pre=True)
    def parse_lmp(cls, value):
        return datetime.datetime.strptime(
            value,
            "%d/%m/%Y"
        ).date()

def ResponseModel(data, message):
    return {
        "data": [data],
        "code": 200,
        "message": message,
    }

class VerifyOTPResponse(BaseModel):
    message: str
    session_token: str