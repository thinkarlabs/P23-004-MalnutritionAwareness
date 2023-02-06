from enum import Enum
import datetime
from typing import Optional
from pydantic import BaseModel, validator, constr

class UserType(str, Enum):
    PREGNANT = 'PREGNANT'
    LACTATING = 'LACTATING'
    CAREGIVER = 'CAREGIVER'

class User(BaseModel):
    name: str
    email: str
    password: str

class UserSchema(BaseModel):
    name: str
    phone_number: constr(
        strip_whitespace=True,
        regex=r"^(\+)[1-9][0-9\-\(\)\.]{9,15}$",
    )
    user_type: UserType
    child_name: Optional[str]
    gender: Optional[str]
    dob: Optional[datetime.date]
    relation_with_child: Optional[str]

    @validator("dob", pre=True)
    def parse_dob(cls, value):
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