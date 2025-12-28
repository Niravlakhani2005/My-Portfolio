
import os
from PIL import Image, ImageEnhance, ImageFilter, ImageOps

def extreme_remaster_v3(input_path, output_path):
    try:
        if not os.path.exists(input_path):
            print(f"File not found: {input_path}")
            return

        img = Image.open(input_path).convert('RGB')
        print(f"Remastering {input_path} ({img.size})")

        # 1. High-Quality Upscale (Lanczos)
        target_width = 1200
        w_percent = (target_width / float(img.size[0]))
        h_size = int((float(img.size[1]) * float(w_percent)))
        img = img.resize((target_width, h_size), Image.Resampling.LANCZOS)

        # 2. Strong Sharpening for Dark UI (Cantech)
        # Dark themes need cleaner edges
        img = img.filter(ImageFilter.UnsharpMask(radius=2, percent=200, threshold=4))

        # 3. Contrast Boost
        enhancer = ImageEnhance.Contrast(img)
        img = enhancer.enhance(1.2) # +20% Contrast for "pop"

        # 4. Color Boost
        enhancer = ImageEnhance.Color(img)
        img = enhancer.enhance(1.15) 

        img.save(output_path, 'PNG')
        print(f"Saved remastered image to {output_path}")

    except Exception as e:
        print(f"Error processing {input_path}: {e}")

if __name__ == "__main__":
    extreme_remaster_v3('public/projects/cantech-v3.png', 'public/projects/cantech-v3-upscaled.png')
