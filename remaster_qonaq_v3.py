
import os
from PIL import Image, ImageEnhance, ImageFilter

def input_qonaq_v3(input_path, output_path):
    try:
        if not os.path.exists(input_path):
            print(f"File not found: {input_path}")
            return

        img = Image.open(input_path).convert('RGB')
        print(f"Remastering v3 {input_path} ({img.size})")

        # 1. Upscale to 1200px (Standard Width)
        target_width = 1200
        w_percent = (target_width / float(img.size[0]))
        h_size = int((float(img.size[1]) * float(w_percent)))
        img = img.resize((target_width, h_size), Image.Resampling.LANCZOS)

        # 2. Sharpening (White Theme Tuning)
        # White themes need less aggressive sharpening than dark themes to avoid "dirty" look on white space
        img = img.filter(ImageFilter.UnsharpMask(radius=1.5, percent=150, threshold=3))

        # 3. Contrast (Subtle pop)
        enhancer = ImageEnhance.Contrast(img)
        img = enhancer.enhance(1.1)

        img.save(output_path, 'PNG')
        print(f"Saved remastered image to {output_path}")

    except Exception as e:
        print(f"Error processing {input_path}: {e}")

if __name__ == "__main__":
    input_qonaq_v3('public/projects/qonaq-revamp-v3.jpg', 'public/projects/qonaq-revamp-v3-final.png')
