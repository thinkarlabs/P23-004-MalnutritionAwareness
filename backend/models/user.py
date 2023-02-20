from enum import Enum
import datetime
from typing import Optional, List
from pydantic import BaseModel, validator, constr


class relationwithchild(str, Enum):
    Anganwadi_Member = 'Anganwadi Member'
    NGO_Member = 'NGO Member'
    Relative = 'Relative'


class UserType(str, Enum):
    Pregnant_Woman = 'Pregnant Woman'
    Lactating_Mother = 'Lactating Mother'
    Caregiver = 'Caregiver'


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
    relation_with_child: Optional[relationwithchild] = None
    child: List[Child]
    is_created_for_someone_else: Optional[bool] = False


def ResponseModel(data, message):
    return {
        "data": [data],
        "code": 200,
        "message": message,
    }