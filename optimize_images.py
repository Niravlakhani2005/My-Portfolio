
import os
from PIL import Image, ImageFilter

def optimize_image(input_path, output_path):
    try:
        if not os.path.exists(input_path):
            print(f"File not found: {input_path}")
            return

        img = Image.open(input_path)
        print(f"Processing {input_path} ({img.size})")

        # 1. Resize to optimal width (1200px) - better for browser rendering than 4000px
        # Maintain aspect ratio
        w_percent = (1200 / float(img.size[0]))
        h_size = int((float(img.size[1]) * float(w_percent)))
        
        # Use Lanczos for the resize itself
        img_resized = img.resize((1200, h_size), Image.Resampling.LANCZOS)
        
        # 2. Apply Unsharp Mask (The pro way to sharpen)
        # Radius: Controls size of edges to sharpen (1-2 is good)
        # Percent: Strength (150-200% is strong)
        # Threshold: Minimum brightness change to sharpen (avoids noise)
        img_sharp = img_resized.filter(ImageFilter.UnsharpMask(radius=1.5, percent=200, threshold=3))

        img_sharp.save(output_path)
        print(f"Saved optimized image to {output_path} ({img_sharp.size})")

    except Exception as e:
        print(f"Error processing {input_path}: {e}")

if __name__ == "__main__":
    # Use the 'final' and 'uhd' versions as source (they are the cleanest pre-sharpened ones)
    optimize_image('public/projects/cantech-final.png', 'public/projects/cantech-crisp.png')
    optimize_image('public/projects/qonaq-revamp-uhd.png', 'public/projects/qonaq-revamp-crisp.png')
