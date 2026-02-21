
import requests

PIKA_API_KEY = "50529c36-9941-4e2a-971e-44a68d74a63f:7cff0d234fda48faea615acae7761079"

url = "https://api.pika.art/v1/video/generate"

headers = {
    "Authorization": f"Bearer {PIKA_API_KEY}",
    "Content-Type": "application/json"
}

payload = {
    "prompt": "cinematic elevator scene, dramatic lighting, film style",
    "aspect_ratio": "16:9",
    "duration": 5
}

response = requests.post(url, headers=headers, json=payload)

print("Status:", response.status_code)
print(response.text)