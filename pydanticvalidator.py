from pydantic import BaseModel
from fastapi import FastAPI, HTTPException
import pymongo
from typing import Optional
from datetime import date


app = FastAPI()


class User(BaseModel):
    user_type: str
    name: str
    phone_number: int
    child_name: Optional[str] = "None"
    gender: Optional[str] = "None"
    dob: Optional[date] = "None"
    relationship_with_child: Optional[str] = "None"


@app.post("/users")
async def create_user(user: User):
    if user.user_type not in ["caregiver", "lactating", "pregnantwomen"]:
        raise HTTPException(status_code=400, detail="Invalid user type")

    user_dict = user.dict()
    user_dict["active"] = False

    client = pymongo.MongoClient("mongodb+srv://ramya:emids@cluster0.tqx9avu.mongodb.net/?retryWrites=true&w=majority")
    db = client["test_db"]
    users_collection = db["users"]
    users_collection.insert_one(user_dict)

    return {"message": "User created successfully"}
