
import os
from PIL import Image, ImageEnhance

def sharpen_image(input_path, output_path):
    try:
        if not os.path.exists(input_path):
            print(f"File not found: {input_path}")
            return

        img = Image.open(input_path)
        print(f"Processing {input_path} ({img.size})")

        # key trick: slight downscale then upscale can sometimes help, but here we just sharpen
        # Enhance Sharpness
        enhancer = ImageEnhance.Sharpness(img)
        # Factor 2.0 gives a very crisp, almost over-sharpened look which is good for text legibility on low-res sources
        img_sharp = enhancer.enhance(2.0) 
        
        # Enhance Contrast slightly to make it pop
        contrast = ImageEnhance.Contrast(img_sharp)
        img_final = contrast.enhance(1.1)

        img_final.save(output_path)
        print(f"Saved sharpened image to {output_path}")

    except Exception as e:
        print(f"Error processing {input_path}: {e}")

if __name__ == "__main__":
    # Cantech
    sharpen_image('public/projects/cantech-final.png', 'public/projects/cantech-ultra.png')
    
    # Qonaq Revamp
    sharpen_image('public/projects/qonaq-revamp-uhd.png', 'public/projects/qonaq-revamp-ultra.png')
