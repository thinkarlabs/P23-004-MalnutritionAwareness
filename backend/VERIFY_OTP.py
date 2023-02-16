from pydantic import BaseModel
from fastapi import FastAPI, Header, HTTPException
from fastapi.security import OAuth2PasswordBearer
import jwt
import datetime



class User(BaseModel):
    phone_number = int(10)
    otp = int(6)

user=User()

app = FastAPI()

SECRET_KEY = "secret_key"

                          # Use OAuth2PasswordBearer for authorization
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/v1/verify_otp")

@app.post("/vi/posts/user_posts")
async def fetch_posts(user: User):
    print(user)
    return {"data": user}

@app.post("/api/v1/verify_otp")
async def verify_otp(phone_number: int, otp: int):
    # Compare the provided OTP with the stored OTP
    if phone_number==user.phone_number and otp == user.otp:


    # Generate a JWT with necessary information as its payload

        payload = {
            "phone_number": phone_number,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=30)
        }

        def encode_jwt_token(payload):

            jwt_token = jwt.encode(payload, SECRET_KEY, algorithm="HS256").decode("utf-8")
            print(jwt_token)
            return jwt_token
    else:
        return{"success fully verified"}


        #raise HTTPException(status_code=400, detail="OTP verification failed")

@app.post("/api/v1/update_user_status")
async def update_user_status(Authorization: str = Header(None), payload=None):
    if Authorization is not None:
        jwt_token = Authorization.replace("Bearer ", "")
    else:
        return{"enter the authorization_token"}

                                    # Verify the JWT
    def decode_jwt_token(token):
        try:

            payload = jwt.decode(jwt_token, SECRET_KEY, algorithms=["HS256"])

        except jwt.ExpiredSignatureError:

            raise HTTPException(status_code=401, detail="Token has expired")

        except jwt.InvalidTokenError:

            raise HTTPException(status_code=401, detail="Invalid token")

    phone_number = payload.get("phone_number")



    # Update the user's active status

    user.active = True
    # Save the updated user in the database
    # ...

    return {"message": "User status updated successfully"}
