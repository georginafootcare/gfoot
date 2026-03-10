#!/bin/bash
MESSAGE=${1:-"update"}
python3 generate-sitemap.py
git add .
git commit -m "$MESSAGE"
git push
