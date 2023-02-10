from fastapi import FastAPI, Depends, HTTPException
from pydantic import BaseModel
import jwt


app = FastAPI()


class PhoneNumberOTP(BaseModel):
    phone_number: str
    otp: str

def is_verified(phone_number_otp: PhoneNumberOTP, is_creation: bool = False):
    # Your backend verification code to check if the input OTP matches the OTP stored in your database
    try:
    if phone_number_otp.otp != "1234":
        return False

    # If is_creation is True, update the user's active status to True
    if is_creation:
        # Your code to update the user's active status in the backend database
        pass
    return True


    # Generate JWT session token
    secret = "secret-key"
    payload = {"phone_number": phone_number_otp.phone_number}
    session_token = jwt.encode(payload, secret, algorithm="HS256").decode("utf-8")

    return session_token
@app.post("/verify_otp")
def verify_otp(phone_number_otp: PhoneNumberOTP = Depends(is_verified)):
    return {"message": "OTP successfully verified for phone number: {}".format(phone_number_otp.phone_number)}
