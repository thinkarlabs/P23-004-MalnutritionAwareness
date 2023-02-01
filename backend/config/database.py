from pymongo import MongoClient
import os

mongodb_uri = 'mongodb+srv://bhemids:Bhavesh123@trialme.j4gypg4.mongodb.net/?retryWrites=true&w=majority'

cluster = MongoClient(mongodb_uri)
db = cluster["Malnutrition"]