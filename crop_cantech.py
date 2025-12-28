
from PIL import Image

def create_hero_thumbnail():
    # Load the manual upscale (which we know has the correct content)
    input_path = 'public/projects/cantech-v4-final.png'
    output_path = 'public/projects/cantech-hero.png'
    
    try:
        img = Image.open(input_path)
        print(f"Original Size: {img.size}")
        
        # Crop to 1200x900 (Standard 4:3 Aspect Ratio for Thumbnails)
        # This takes the top part (Hero Section)
        cw, ch = 1200, 900
        
        # Ensure we don't crop if smaller (though we know it's 1200 wide)
        if img.size[1] > ch:
            img = img.crop((0, 0, cw, ch))
            print(f"Cropped to Hero: {img.size}")
        
        img.save(output_path)
        print(f"Saved to {output_path}")
        
    except Exception as e:
        print(f"Error: {e}")

create_hero_thumbnail()
