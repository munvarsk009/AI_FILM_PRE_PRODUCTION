import requests

API_KEY = "sk-Lk92gV4DRk6jZ7RReurD5b5SvKem4NGAhjY3nDrrmt6GEbMH" #using stability.ai's image generation API for testing purposes, as Hugging Face's API is currently very slow and unreliable. This key is from a free trial account, so it has limited usage and may stop working after a certain number of requests or time period. Please replace it with your own key if you want to test further.

url = "https://api.stability.ai/v2beta/stable-image/generate/sd3"

headers = {
    "authorization": f"Bearer {API_KEY}",
    "accept": "image/*"
}

files = {
    "prompt": (None, "cinematic portrait of hero character, dramatic lighting"),
    "output_format": (None, "png")
}

print("Generating image...")

response = requests.post(url, headers=headers, files=files)

print("Status:", response.status_code)

if response.status_code == 200:
    with open("stability_test.png", "wb") as f:
        f.write(response.content)
    print("Saved image → stability_test.png")
else:
    print(response.text)