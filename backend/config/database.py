from pymongo import MongoClient
import os
from decouple import config
mongodb_uri = config('CLUSTER_URL')
db_name = config('DB_NAME')
cluster = MongoClient(mongodb_uri)
db = cluster[db_name]
