
import os
from PIL import Image

def crop_and_fix():
    # Fix Cantech (Take left 1/3)
    try:
        img = Image.open('public/projects/cantech-uhd.png')
        w, h = img.size
        # content repeated 3 times horizontally
        new_w = w // 3
        cropped = img.crop((0, 0, new_w, h))
        cropped.save('public/projects/cantech-uhd.png')
        print(f"Fixed Cantech: Copied left 1/3 ({new_w}x{h})")
    except Exception as e:
        print(f"Error fixing Cantech: {e}")

    # Fix Luumpa (Take top-left 1/4)
    try:
        img = Image.open('public/projects/luumpa-uhd.png')
        w, h = img.size
        # content repeated in 2x2 grid
        new_w = w // 2
        new_h = h // 2
        cropped = img.crop((0, 0, new_w, new_h))
        cropped.save('public/projects/luumpa-uhd.png')
        print(f"Fixed Luumpa: Copied top-left quadrant ({new_w}x{new_h})")
    except Exception as e:
        print(f"Error fixing Luumpa: {e}")

def manual_upscale_qonaq():
    # Manual upscale for Qonaq Revamp since AI is rate limited
    try:
        img = Image.open('public/projects/qonaq-revamp.jpg')
        w, h = img.size
        new_w = w * 4
        new_h = h * 4
        # Lanczos resampling for best non-AI quality
        upscaled = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
        upscaled.save('public/projects/qonaq-revamp-uhd.png')
        print(f"Manually Upscaled Qonaq Revamp: {w}x{h} -> {new_w}x{new_h}")
    except Exception as e:
        print(f"Error upscaling Qonaq Revamp: {e}")

if __name__ == "__main__":
    crop_and_fix()
    manual_upscale_qonaq()
