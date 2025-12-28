
from PIL import Image

def check_dims():
    files = [
        'public/projects/cantech_v4_ai_strict.png',
        'public/projects/cantech-v4-final.png'
    ]
    for f in files:
        try:
            img = Image.open(f)
            print(f"{f}: {img.size}")
        except:
            print(f"{f}: Not found")

check_dims()
