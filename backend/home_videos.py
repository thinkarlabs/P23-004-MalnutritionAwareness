from fastapi import FastAPI
from config.database import db as database

app = FastAPI()


home_video_collection = database["home_video"]

# Define the video data
video_data = [{
    "from_days": 0,
    "upto_days": 30,
    "video_link": "https://www.cdc.gov/vaccines/pregnancy/index.html",
    "persona_type": "pregnant"
},{
    "from_days": 31,
    "upto_days": 60,
    "video_link": "https://www.cdc.gov/vaccines/pregnancy/index.html",
    "persona_type": "pregnant"
},
    {
    "from_days": 61,
    "upto_days": 90,
    "video_link": "https://www.cdc.gov/vaccines/pregnancy/index.html",
    "persona_type": "pregnant"
    },
    {
    "from_days": 91,
    "upto_days": 120,
    "video_link": "https://www.cdc.gov/vaccines/pregnancy/index.html",
    "persona_type": "pregnant"
    },{
    "from_days": 121,
    "upto_days": 150,
    "video_link": "https://www.cdc.gov/vaccines/pregnancy/index.html",
    "persona_type": "pregnant"
    },
    {
    "from_days": 151,
    "upto_days": 180,
    "video_link": "https://www.cdc.gov/vaccines/pregnancy/index.html",
    "persona_type": "pregnant"
    },
    {
    "from_days": 181,
    "upto_days": 210,
    "video_link": "https://www.cdc.gov/vaccines/pregnancy/index.html",
    "persona_type": "pregnant"
    },
    {
        "from_days": 211,
    "upto_days": 240,
    "video_link": "https://www.cdc.gov/vaccines/pregnancy/index.html",
    "persona_type": "pregnant"},
    {
    "from_days": 241,
    "upto_days": 270,
    "video_link": "https://www.cdc.gov/vaccines/pregnancy/index.html",
    "persona_type": "pregnant"
    },
    {
    "from_days": 271,
    "upto_days": 300,
    "video_link": "https://www.cdc.gov/vaccines/pregnancy/index.html",
    "persona_type": "pregnant"
    },
    {
    "from_days": 0,
    "upto_days": 30,
    "video_link": "https://www.cdc.gov/vaccines/pregnancy/index.html",
    "persona_type": "lactating"
    },
    {
    "from_days": 31,
    "upto_days": 60,
    "video_link": "https://www.cdc.gov/vaccines/pregnancy/index.html",
    "persona_type": "lactating"
    },
    {
    "from_days": 61,
    "upto_days": 90,
    "video_link": "https://www.cdc.gov/vaccines/pregnancy/index.html",
    "persona_type": "lactating"
    },
    {
    "from_days": 91,
    "upto_days": 120,
    "video_link": "https://www.cdc.gov/vaccines/pregnancy/index.html",
    "persona_type": "lactating"
    },
    {
    "from_days": 0,
    "upto_days": 30,
    "video_link": "https://www.cdc.gov/vaccines/pregnancy/index.html",
    "persona_type": "caregiver"
    },
    {
    "from_days": 31,
    "upto_days": 60,
    "video_link": "https://www.cdc.gov/vaccines/pregnancy/index.html",
    "persona_type": "caregiver"
    },
    {
    "from_days": 61,
    "upto_days": 90,
    "video_link": "https://www.cdc.gov/vaccines/pregnancy/index.html",
    "persona_type": "caregiver"
    },
    {
    "from_days": 91,
    "upto_days": 120,
    "video_link": "https://www.cdc.gov/vaccines/pregnancy/index.html",
    "persona_type": "caregiver"
    }

]

# Insert the video data into the home_video collection
home_video_collection.insert_many(video_data)

