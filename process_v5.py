
from PIL import Image

def process_v5():
    input_path = 'public/projects/cantech-v5.png'
    output_path = 'public/projects/cantech-v5-final.png'
    
    try:
        img = Image.open(input_path)
        print(f"V5 Original Resolution: {img.size}")
        
        target_width = 1200
        
        if img.size[0] < target_width:
            print(f"Upscaling from {img.size[0]} to {target_width}...")
            w_percent = (target_width / float(img.size[0]))
            h_size = int((float(img.size[1]) * float(w_percent)))
            img = img.resize((target_width, h_size), Image.Resampling.LANCZOS)
        else:
            print("Image is already high res.")
            
        img.save(output_path)
        print(f"Saved to {output_path}")
        
    except Exception as e:
        print(f"Error: {e}")

process_v5()
