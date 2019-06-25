#!/bin/bash
rm -r pngs
mkdir pngs
for dir in videos/mp4/*.mp4; do
	mkdir "pngs/${dir##*/}/"
    ffmpeg -i "$dir" -vf "select=eq(pict_type\,I)" -vsync vfr "pngs/${dir##*/}/thumb%04d.png" -hide_banner;
done

for dir in videos/other/*; do
	mkdir "pngs/${dir##*/}/"
    ffmpeg -ss 00:00:10 -i "$dir" -vf fps=1 "pngs/${dir##*/}/thumb%04d.png" -hide_banner;
done

mkdir selectedpngs

# Then put some selected pngs in this folder to convert into a montage 
magick montage -mode concatenate -tile 10x0 selectedpngs/*.png -gravity center -crop 4:3 -resize 480x360 outfile.png
