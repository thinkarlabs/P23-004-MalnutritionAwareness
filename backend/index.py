from fastapi import FastAPI
from routes.user import router
app = FastAPI()
app.include_router(router)

