from pymongo import MongoClient
import os
from decouple import config
mongodb_uri = config('CLUSTER_URL')

cluster = MongoClient(mongodb_uri)
db = cluster["Malnutrition"]
