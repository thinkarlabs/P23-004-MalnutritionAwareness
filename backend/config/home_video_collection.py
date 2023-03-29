from database import db as database
from bson.objectid import ObjectId

#home_video = database.create_collection("home_video")
home_video_collection = database["home_video"]

# Define the video data
video_data = [{
    "_id": ObjectId(),
    "from_days": 0,
    "upto_days": 30,
    "video_link": "https://youtu.be/tQbehMwuaFk",
    "persona_type": "pregnant"
},{
    "_id": ObjectId(),
    "from_days": 31,
    "upto_days": 60,
    "video_link": "https://youtu.be/tQbehMwuaFk",
    "persona_type": "pregnant"
},
    {
    "_id": ObjectId(),
    "from_days": 61,
    "upto_days": 90,
    "video_link": "https://youtu.be/tQbehMwuaFk",
    "persona_type": "pregnant"
    },
    {
    "_id": ObjectId(),
    "from_days": 91,
    "upto_days": 120,
    "video_link": "https://youtu.be/tQbehMwuaFk",
    "persona_type": "pregnant"
    },
    {
    "_id": ObjectId(),
    "from_days": 121,
    "upto_days": 150,
    "video_link": "https://youtu.be/tQbehMwuaFk",
    "persona_type": "pregnant"
    },
    {
    "_id": ObjectId(),
    "from_days": 151,
    "upto_days": 180,
    "video_link": "https://youtu.be/tQbehMwuaFk",
    "persona_type": "pregnant"
    },
    {
    "_id": ObjectId(),
    "from_days": 181,
    "upto_days": 210,
    "video_link": "https://youtu.be/tQbehMwuaFk",
    "persona_type": "pregnant"
    },
    {
    "_id": ObjectId(),
    "from_days": 211,
    "upto_days": 240,
    "video_link": "https://youtu.be/tQbehMwuaFk",
    "persona_type": "pregnant"},
    {
    "_id": ObjectId(),
    "from_days": 241,
    "upto_days": 270,
    "video_link": "https://youtu.be/tQbehMwuaFk",
    "persona_type": "pregnant"
    },
    {
    "_id": ObjectId(),
    "from_days": 271,
    "upto_days": 300,
    "video_link": "https://youtu.be/tQbehMwuaFk",
    "persona_type": "pregnant"
    },
    {
    "_id": ObjectId(),
    "from_days": 0,
    "upto_days": 30,
    "video_link": "https://youtu.be/fpiYNkkNmEo",
    "persona_type": "lactating"
    },
    {
    "_id": ObjectId(),
    "from_days": 31,
    "upto_days": 60,
    "video_link": "https://youtu.be/fpiYNkkNmEo",
    "persona_type": "lactating"
    },
    {
    "_id": ObjectId(),
    "from_days": 61,
    "upto_days": 90,
    "video_link": "https://youtu.be/fpiYNkkNmEo",
    "persona_type": "lactating"
    },
    {
    "_id": ObjectId(),
    "from_days": 91,
    "upto_days": 120,
    "video_link": "https://youtu.be/fpiYNkkNmEo",
    "persona_type": "lactating"
    },
    {
    "_id": ObjectId(),
    "from_days": 121,
    "upto_days": 150,
    "video_link": "https://youtu.be/fpiYNkkNmEo",
    "persona_type": "lactating"
    },
    {
    "_id": ObjectId(),
    "from_days": 151,
    "upto_days": 180,
    "video_link": "https://youtu.be/fpiYNkkNmEo",
    "persona_type": "lactating"
    },
    {
    "_id": ObjectId(),
    "from_days": 181,
    "upto_days": 210,
    "video_link": "https://youtu.be/E3YDaqWWvu8",
    "persona_type": "caregiver"
    },
    {
    "_id": ObjectId(),
    "from_days": 211,
    "upto_days": 240,
    "video_link": "https://youtu.be/E3YDaqWWvu8",
    "persona_type": "caregiver"
    },
    {
    "_id": ObjectId(),
    "from_days": 241,
    "upto_days": 270,
    "video_link": "https://youtu.be/E3YDaqWWvu8",
    "persona_type": "caregiver"
    },
    {
    "_id": ObjectId(),
    "from_days": 271,
    "upto_days": 300,
    "video_link": "https://youtu.be/E3YDaqWWvu8",
    "persona_type": "caregiver"
    },
    {
    "_id": ObjectId(),
    "from_days": 301,
    "upto_days": 330,
    "video_link": "https://youtu.be/E3YDaqWWvu8",
    "persona_type": "caregiver"
    },
    {
    "_id": ObjectId(),
    "from_days": 331,
    "upto_days": 360,
    "video_link": "https://youtu.be/E3YDaqWWvu8",
    "persona_type": "caregiver"
    },
    {
    "_id": ObjectId(),
    "from_days": 361,
    "upto_days": 390,
    "video_link": "https://youtu.be/E3YDaqWWvu8",
    "persona_type": "caregiver"
    },
    {
    "_id": ObjectId(),
    "from_days": 391,
    "upto_days": 420,
    "video_link": "https://youtu.be/E3YDaqWWvu8",
    "persona_type": "caregiver"
    },
    {
    "_id": ObjectId(),
    "from_days": 421,
    "upto_days": 450,
    "video_link": "https://youtu.be/E3YDaqWWvu8",
    "persona_type": "caregiver"
    },
    {
    "_id": ObjectId(),
    "from_days": 451,
    "upto_days": 480,
    "video_link": "https://youtu.be/E3YDaqWWvu8",
    "persona_type": "caregiver"
    },
    {
    "_id": ObjectId(),
    "from_days": 481,
    "upto_days": 510,
    "video_link": "https://youtu.be/E3YDaqWWvu8",
    "persona_type": "caregiver"
    },
    {
    "_id": ObjectId(),
    "from_days": 511,
    "upto_days": 540,
    "video_link": "https://youtu.be/E3YDaqWWvu8",
    "persona_type": "caregiver"
    },
    {
    "_id": ObjectId(),
    "from_days": 541,
    "upto_days": 570,
    "video_link": "https://youtu.be/E3YDaqWWvu8",
    "persona_type": "caregiver"
    },
    {
    "_id": ObjectId(),
    "from_days": 571,
    "upto_days": 600,
    "video_link": "https://youtu.be/E3YDaqWWvu8",
    "persona_type": "caregiver"
    },
    {
    "_id": ObjectId(),
    "from_days": 601,
    "upto_days": 630,
    "video_link": "https://youtu.be/E3YDaqWWvu8",
    "persona_type": "caregiver"
    },
    {
    "_id": ObjectId(),
    "from_days": 631,
    "upto_days": 660,
    "video_link": "https://youtu.be/E3YDaqWWvu8",
    "persona_type": "caregiver"
    },
    {
    "_id": ObjectId(),
    "from_days": 661,
    "upto_days": 690,
    "video_link": "https://youtu.be/E3YDaqWWvu8",
    "persona_type": "caregiver"
    },
    {
    "_id": ObjectId(),
    "from_days": 691,
    "upto_days": 720,
    "video_link": "https://youtu.be/E3YDaqWWvu8",
    "persona_type": "caregiver"
    }
]

# Insert  and update the video data into the home_video collection
for data in video_data:
    home_video_collection.update_one(
        {"_id": data["_id"]},
        {"$set": data},
        upsert=True
    )


