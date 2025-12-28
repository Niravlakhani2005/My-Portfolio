
import os
from PIL import Image, ImageEnhance, ImageFilter, ImageOps

def extreme_remaster(input_path, output_path):
    try:
        if not os.path.exists(input_path):
            print(f"File not found: {input_path}")
            return

        img = Image.open(input_path).convert('RGB')
        print(f"Remastering {input_path} ({img.size})")

        # 1. High-Quality Upscale (Lanczos)
        # Target width 1200 is sufficient for the card
        target_width = 1200
        w_percent = (target_width / float(img.size[0]))
        h_size = int((float(img.size[1]) * float(w_percent)))
        img = img.resize((target_width, h_size), Image.Resampling.LANCZOS)

        # 2. Multi-Pass Sharpening
        # Radius 2 for structure
        img = img.filter(ImageFilter.UnsharpMask(radius=2, percent=150, threshold=3))
        # Radius 1 for fine details
        img = img.filter(ImageFilter.UnsharpMask(radius=1, percent=100, threshold=2))

        # 3. Contrast & Saturation Boost (Restoring "Life")
        enhancer = ImageEnhance.Contrast(img)
        img = enhancer.enhance(1.15) # +15% Contrast

        enhancer = ImageEnhance.Color(img)
        img = enhancer.enhance(1.1) # +10% Vibrance

        # 4. Noise Reduction (Simulated via slight smooth blending to hide pixelation)
        # Create a blurred copy
        img_blur = img.filter(ImageFilter.GaussianBlur(radius=1))
        # Blend original (90%) with blur (10%) to soften jaggies while keeping edges
        img = Image.blend(img_blur, img, 0.85)
        
        # Final crisp pass
        img = img.filter(ImageFilter.UnsharpMask(radius=1, percent=50, threshold=0))

        img.save(output_path, 'PNG')
        print(f"Saved remastered image to {output_path}")

    except Exception as e:
        print(f"Error processing {input_path}: {e}")

if __name__ == "__main__":
    # Input: The V2 upload (which was likely better quality source even if low res)
    extreme_remaster('public/projects/qonaq-revamp-v2.jpg', 'public/projects/qonaq-revamp-remastered.png')
