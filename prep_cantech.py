
import os
from PIL import Image

def prep_for_ai(input_path, output_path):
    try:
        img = Image.open(input_path).convert('RGB')
        print(f"Prepping {input_path} ({img.size})")
        
        # Upscale to 1200px width (Standard quality base)
        target_width = 1200
        w_percent = (target_width / float(img.size[0]))
        h_size = int((float(img.size[1]) * float(w_percent)))
        
        img = img.resize((target_width, h_size), Image.Resampling.LANCZOS)
        
        img.save(output_path)
        print(f"Saved prep file to {output_path}")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    prep_for_ai('public/projects/cantech-v3.png', 'public/projects/cantech-pre-ai.png')
