
import os
from PIL import Image, ImageFilter

def process_v2_upload(input_path, output_path):
    try:
        if not os.path.exists(input_path):
            print(f"File not found: {input_path}")
            return

        img = Image.open(input_path)
        # Convert to RGB if needed (e.g. for jpg)
        if img.mode != 'RGB':
            img = img.convert('RGB')
            
        print(f"Processing {input_path} ({img.size})")

        # 1. Resize/Upscale to optimal width (1200px)
        target_width = 1200
        w_percent = (target_width / float(img.size[0]))
        h_size = int((float(img.size[1]) * float(w_percent)))
        
        # Lanczos is high quality for both up and downscaling
        img_resized = img.resize((target_width, h_size), Image.Resampling.LANCZOS)
        
        # 2. Apply Custom Sharpening
        # Unsharp Mask: Radius 1.5, Percent 175% (Strong but not artifacts)
        img_sharp = img_resized.filter(ImageFilter.UnsharpMask(radius=1.5, percent=175, threshold=3))
        
        # 3. Enhance Contrast slightly (pop)
        # contrast = ImageEnhance.Contrast(img_sharp)
        # img_final = contrast.enhance(1.05) 

        img_sharp.save(output_path, 'PNG')
        print(f"Saved V2 processed image to {output_path} ({img_sharp.size})")

    except Exception as e:
        print(f"Error processing {input_path}: {e}")

if __name__ == "__main__":
    process_v2_upload('public/projects/cantech-v2.png', 'public/projects/cantech-v2-crisp.png')
    process_v2_upload('public/projects/qonaq-revamp-v2.jpg', 'public/projects/qonaq-revamp-v2-crisp.png')
