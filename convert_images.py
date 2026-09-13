import os
from PIL import Image

public_dir = r"E:\Prince\New folder\portfolio\public"

for filename in os.listdir(public_dir):
    if filename.lower().endswith(".jpg"):
        jpg_path = os.path.join(public_dir, filename)
        webp_filename = filename.rsplit(".", 1)[0] + ".webp"
        webp_path = os.path.join(public_dir, webp_filename)
        
        try:
            with Image.open(jpg_path) as img:
                # Resize if it's too large, but these seem to be screenshots, max width 1200
                if img.width > 1200:
                    ratio = 1200 / float(img.width)
                    new_height = int(float(img.height) * float(ratio))
                    img = img.resize((1200, new_height), Image.Resampling.LANCZOS)
                
                # Save as WebP
                img.save(webp_path, "WEBP", quality=80, optimize=True)
                
            print(f"Converted {filename} to {webp_filename}")
            
            # Remove the original jpg to free up space and enforce the change
            os.remove(jpg_path)
            print(f"Deleted original {filename}")
        except Exception as e:
            print(f"Failed to convert {filename}: {e}")
