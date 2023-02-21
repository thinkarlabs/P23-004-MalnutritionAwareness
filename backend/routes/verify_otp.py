from pydantic import BaseModel
#from config.database import db as database
from backend.config import database as
from fastapi import FastAPI,HTTPException
from fastapi.security import OAuth2PasswordBearer
import jwt

#class User(BaseModel):
 #   phone_number = 8106838655
  #  otp = 342112

class VerifyOTPResponse(BaseModel):
    message: str
    session_token: str | None



#user = User()

app = FastAPI()
#router = APIRouter()

SECRET_KEY = "secret_key"
ALGORITHM = "HS256"

# Use OAuth2PasswordBearer for authorization
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/verify_otp")
@app.post("/api/v1/verify_otp")
async def verify_otp(phone_number: str, verify_otp : str,is_creation:True):

    if phone_number == database.otp_mapping.phone_number and verify_otp == database.otp_mapping :
        session_token = jwt.encode({"phone_number": user.phone_number}, SECRET_KEY, algorithm=ALGORITHM)
        response = VerifyOTPResponse(message="OTP verified successfully", session_token=session_token)
        #if is_creation == True:
         #   user_dict.update({'is_active': True})
        return response


    # Compare the provided OTP with the stored OTP
    else:
        # return an error message
        raise HTTPException(status_code=400, detail="invalid otp !")

#@app.post("/api/v1/verify_otp")
#async def verify_otp(phone_number: int, otp: int,is_creation : bool):
    # Compare the provided OTP with the stored OTP
 #   if phone_number == user.phone_number and otp == user.otp:
  #      session_token = jwt.encode({"phone_number": user.phone_number}, SECRET_KEY, algorithm=ALGORITHM)
   #     response = VerifyOTPResponse(message="OTP verified successfully", session_token=session_token)
    #   return response
    #else:
        # Return an error message
        #users_collection.update_one({"_id": user["_id"]}, {"$set": {"is_creation": False}})
     #   response = VerifyOTPResponse(message="Invalid OTP OR PHONE NUMBER",)
      #  return response
