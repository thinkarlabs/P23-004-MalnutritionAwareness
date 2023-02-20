from pydantic import BaseModel

from fastapi import FastAPI
from fastapi.security import OAuth2PasswordBearer
import jwt

class User(BaseModel):
    phone_number = 8106838655
    otp = 342112

class VerifyOTPResponse(BaseModel):
    message: str
    session_token: str | None



user = User()

app = FastAPI()
#router = APIRouter()

SECRET_KEY = "secret_key"
ALGORITHM = "HS256"

# Use OAuth2PasswordBearer for authorization
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/verify_otp")

@app.post("/api/v1/verify_otp")
async def verify_otp(phone_number: int, otp: int,is_creation : bool):
    # Compare the provided OTP with the stored OTP
    if phone_number == user.phone_number and otp == user.otp:
        session_token = jwt.encode({"phone_number": user.phone_number}, SECRET_KEY, algorithm=ALGORITHM)
        response = VerifyOTPResponse(message="OTP verified successfully", session_token=session_token)
        #users_collection.update_one({"_id": user["_id"]}, {"$set": {"is_creation": True}})
        return response
    else:
        # Return an error message
        #users_collection.update_one({"_id": user["_id"]}, {"$set": {"is_creation": False}})
        response = VerifyOTPResponse(message="Invalid OTP OR PHONE NUMBER",)
        return response
