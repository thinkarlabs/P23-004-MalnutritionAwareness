from fastapi import FastAPI
from routes import user, track_health
app = FastAPI()
app.include_router(user.router)
app.include_router(track_health.router)