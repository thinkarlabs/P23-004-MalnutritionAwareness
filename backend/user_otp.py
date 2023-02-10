import random
def otp_generate_save(phone_number, db):
    otp = str(random.randint(1000, 9999))

    db.otp_map.update_one({"phone_number": phone_number}, {"$set": {"otp": otp}}, upsert=True)