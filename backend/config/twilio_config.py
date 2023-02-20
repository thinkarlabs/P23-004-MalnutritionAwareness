from twilio.rest import Client
import os
from decouple import config

twilio_number = config('TWILIO_NUMBER')
account_sid = config('TWILIO_ACCOUNT_SID')
auth_token = config('TWILIO_AUTH_TOKEN')

twilio_client = Client(account_sid, auth_token)

