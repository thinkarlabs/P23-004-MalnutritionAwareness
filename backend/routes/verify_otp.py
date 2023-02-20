from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.security import OAuth2PasswordBearer
import jwt
from backend.config import database


database.db = database

class User(BaseModel):
    phone_number = 8106838656
    otp = 342112

class VerifyOTPResponse(BaseModel):
    message: str
    session_token: str


user = User()


app = FastAPI()

SECRET_KEY = "secret_key"
ALGORITHM = "HS256"

# Use OAuth2PasswordBearer for authorization
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/verify_otp")


@app.post("/api/v1/verify_otp")
async def verify_otp(phone_number: int, otp: int):
    # Compare the provided OTP with the stored OTP
    if phone_number == user.phone_number and otp == user.otp:
        session_token = jwt.encode({"phone_number": user.phone_number}, SECRET_KEY, algorithm=ALGORITHM)
        response = VerifyOTPResponse(message="OTP verified successfully", session_token=session_token)
        return response
    else:
        # Return an error message
        response = VerifyOTPResponse(message="Invalid OTP")
        return response
