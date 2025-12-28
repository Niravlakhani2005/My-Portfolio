
import os
from PIL import Image, ImageEnhance, ImageFilter, ImageOps

def rescue_mission(input_path, output_path):
    try:
        if not os.path.exists(input_path):
            print(f"File not found: {input_path}")
            return

        img = Image.open(input_path).convert('RGB')
        print(f"Rescuing {input_path} ({img.size})")

        # 1. Resize to target dimension (Target Card Width x 2 for Retina)
        # Card width ~400px -> Target 800px
        # We start with 240px. 
        # Step 1: Bicubic to 480px (Soft)
        img = img.resize((480, int(img.size[1] * (480/img.size[0]))), Image.Resampling.BICUBIC)
        # Step 2: Lanczos to 960px (Sharp)
        img = img.resize((960, int(img.size[1] * (2.0))), Image.Resampling.LANCZOS)

        # 2. EDGE ENHANCEMENT (The "Secret Sauce" for low-res text)
        # Find edges
        edges = img.filter(ImageFilter.FIND_EDGES)
        # Invert to make edges black on white
        edges = ImageOps.invert(edges)
        # Blur the edges slightly
        edges = edges.filter(ImageFilter.GaussianBlur(1))
        
        # 3. High Pass Sharpening Logic (Simulated)
        # Sharpen heavily
        img_sharp = img.filter(ImageFilter.UnsharpMask(radius=2, percent=250, threshold=4))
        
        # 4. Mix in a bit of "Detail" filter
        img_detail = img_sharp.filter(ImageFilter.DETAIL)
        
        # 5. Final Contrast Boost
        enhancer = ImageEnhance.Contrast(img_detail)
        img_final = enhancer.enhance(1.25) # +25% Contrast

        img_final.save(output_path, 'PNG')
        print(f"Saved rescued image to {output_path}")

    except Exception as e:
        print(f"Error processing {input_path}: {e}")

if __name__ == "__main__":
    rescue_mission('public/projects/cantech-v3.png', 'public/projects/cantech-rescued.png')
    rescue_mission('public/projects/qonaq-revamp-v3.jpg', 'public/projects/qonaq-revamp-rescued.png')
