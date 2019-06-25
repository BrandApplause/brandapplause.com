#!/bin/bash

bpath=src/assets/svg/brands

# Build an index of svgs to include
for dir in ${bpath}/*.svg; do
	echo "include ${dir##*/}"
done > ${bpath}/brands.pug

# Build the actual site
npm run buildprod