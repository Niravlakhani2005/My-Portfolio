
from PIL import Image
import os

def check_v4():
    path = 'public/projects/cantech-v4.png'
    if os.path.exists(path):
        img = Image.open(path)
        print(f"V4 Resolution: {img.size}")
        
        # Immediate High-Quality Upscale (No AI)
        target_width = 1200
        w_percent = (target_width / float(img.size[0]))
        h_size = int((float(img.size[1]) * float(w_percent)))
        img = img.resize((target_width, h_size), Image.Resampling.LANCZOS)
        
        img.save('public/projects/cantech-v4-final.png')
        print("created cantech-v4-final.png")

check_v4()
