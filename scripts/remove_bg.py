#!/usr/bin/env python3
from PIL import Image, ImageFilter
import math

src = 'public/blackgate.jpeg'
out = 'public/blackgate.png'

im = Image.open(src).convert('RGBA')
w, h = im.size

# Sample border pixels to estimate background color
samples = []
for x in range(w):
    samples.append(im.getpixel((x, 0))[:3])
    samples.append(im.getpixel((x, h - 1))[:3])
for y in range(h):
    samples.append(im.getpixel((0, y))[:3])
    samples.append(im.getpixel((w - 1, y))[:3])

r = sum(p[0] for p in samples) // len(samples)
g = sum(p[1] for p in samples) // len(samples)
b = sum(p[2] for p in samples) // len(samples)

# Distance threshold: adjust if needed
threshold = 60

new_data = []
for pr, pg, pb, pa in im.getdata():
    dist = math.sqrt((pr - r) ** 2 + (pg - g) ** 2 + (pb - b) ** 2)
    if dist < threshold:
        new_data.append((pr, pg, pb, 0))
    else:
        new_data.append((pr, pg, pb, pa))

new_im = Image.new('RGBA', im.size)
new_im.putdata(new_data)

# Smooth alpha edge
alpha = new_im.split()[3].filter(ImageFilter.GaussianBlur(radius=2))
new_im.putalpha(alpha)

new_im.save(out)
print('Saved', out)
