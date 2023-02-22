from enum import Enum
import datetime
from typing import Optional, List
from pydantic import BaseModel, validator, constr

class UserType(str, Enum):
    PREGNANT = 'PREGNANT'
    LACTATING = 'LACTATING'
    CAREGIVER = 'CAREGIVER'

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
    child: List[Child]
    relation_with_child: Optional[str]

class LoginUserSchema(BaseModel):
    phone_number: constr(
        strip_whitespace=True,
        regex=r"^(\+)[1-9][0-9\-\(\)\.]{9,15}$",
    )

class VerifyData(BaseModel):
    otp: str
    is_creation:bool

def ResponseModel(data, message):
    return {
        "data": [data],
        "code": 200,
        "message": message,
    }

SECRET_KEY = "secret_key"

ALGORITHM = "HS256"
class VerifyOTPResponse(BaseModel):
    message: str

class SessionToken(BaseModel):
    session_token : str | None
