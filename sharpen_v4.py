
from PIL import Image, ImageFilter

def sharpen_v4():
    path = 'public/projects/cantech-v4-final.png'
    img = Image.open(path)
    
    # Mild Unsharp Mask to help the blur without adding artifacts
    img = img.filter(ImageFilter.UnsharpMask(radius=1, percent=100, threshold=3))
    
    img.save(path)
    print("Sharpened cantech-v4-final.png")

sharpen_v4()
