import requests

URL = "https://free-music-api2.vercel.app/getSongs"

response = requests.get(URL)

data = response.json()

songsNameList = []
songsBannerList = []
singersList = []
albumNameList = []

for song in data:
    songsNameList.append(song["songName"])
    songsBannerList.append(song["songBanner"])
    singersList.append(song["singer"])
    albumNameList.append(song["albumname"])


print(albumNameList)
