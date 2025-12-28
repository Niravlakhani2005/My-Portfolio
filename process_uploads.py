
import os
from PIL import Image

def process_new_uploads():
    # Process Luumpa
    try:
        img = Image.open('public/projects/luumpa-new.png')
        print(f"Luumpa Original: {img.size}")
        # Upscale if width < 1000
        if img.size[0] < 1000:
            new_size = (img.size[0] * 4, img.size[1] * 4)
            img = img.resize(new_size, Image.Resampling.LANCZOS)
            print(f"Luumpa Upscaled to: {img.size}")
        img.save('public/projects/luumpa-uhd.png')
    except Exception as e:
        print(f"Error processing Luumpa: {e}")

    # Process Cantech
    try:
        img = Image.open('public/projects/cantech-new.png')
        print(f"Cantech Original: {img.size}")
        if img.size[0] < 1000:
            new_size = (img.size[0] * 4, img.size[1] * 4)
            img = img.resize(new_size, Image.Resampling.LANCZOS)
            print(f"Cantech Upscaled to: {img.size}")
        img.save('public/projects/cantech-uhd.png')
    except Exception as e:
        print(f"Error processing Cantech: {e}")

if __name__ == "__main__":
    process_new_uploads()
