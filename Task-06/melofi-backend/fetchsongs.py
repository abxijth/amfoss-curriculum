import requests
import json

api_url = "https://free-music-api2.vercel.app/getSongs"

response = requests.get(api_url)

if response.status_code == 200:
    data = response.json()
    for i in range(len(data)):
        print(data[i]["songName"])
    
