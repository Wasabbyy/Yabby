#!/usr/bin/env python3
"""Downscale all images in assets/ to fit within 1280x900, preserve aspect ratio."""
import os
import subprocess
import sys

try:
    from PIL import Image
except ImportError:
    print("Need Pillow: pip install Pillow")
    sys.exit(1)

ASSETS_DIR = os.path.join(os.path.dirname(__file__), "assets")
MAX_SIZE = (1280, 900)
IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".JPG", ".JPEG", ".PNG"}
HEIC_EXTS = {".heic", ".HEIC"}


def downscale_pil(path: str) -> bool:
    try:
        with Image.open(path) as im:
            # Preserve transparency for PNGs (RGBA, P); only convert to RGB for JPEG
            is_png = path.lower().endswith(".png")
            if not is_png and im.mode in ("RGBA", "P"):
                im = im.convert("RGB")
            elif is_png and im.mode == "P":
                im = im.convert("RGBA")  # Keep transparency for palette PNGs
            elif is_png and im.mode != "RGBA":
                im = im.convert("RGBA")  # Ensure alpha for PNG
            im.thumbnail(MAX_SIZE, Image.Resampling.LANCZOS)
            out_path = path
            if is_png:
                im.save(out_path, "PNG", optimize=True)
            else:
                if im.mode == "RGBA":
                    im = im.convert("RGB")
                im.save(out_path, "JPEG", quality=88, optimize=True)
            return True
    except Exception as e:
        print(f"  PIL failed: {e}")
        return False


def downscale_heic_sips(path: str) -> bool:
    """Use macOS sips to resize HEIC in place (keeps .HEIC)."""
    try:
        subprocess.run(
            ["sips", "-Z", "1280", path],
            check=True,
            capture_output=True,
        )
        return True
    except (subprocess.CalledProcessError, FileNotFoundError) as e:
        print(f"  sips failed: {e}")
        return False


def main():
    count = 0
    for root, _dirs, files in os.walk(ASSETS_DIR):
        for name in files:
            ext = os.path.splitext(name)[1]
            path = os.path.join(root, name)
            if ext in HEIC_EXTS:
                print(f"Resizing (HEIC): {path}")
                if downscale_heic_sips(path):
                    count += 1
                else:
                    print(f"  Skipped (install sips or convert manually)")
            elif ext in IMAGE_EXTS:
                print(f"Resizing: {path}")
                if downscale_pil(path):
                    count += 1
    print(f"Done. Resized {count} images.")


if __name__ == "__main__":
    main()
