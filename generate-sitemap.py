#!/usr/bin/env python3
"""
generate-sitemap.py
Generates sitemap.xml for georginafootcare.co.uk
Run this script from the root of your project before deploying.
Add to deploy.sh to auto-generate on every push.
"""

import os
from datetime import date

# ── Configuration ──────────────────────────────────────────────────────────────
BASE_URL = "https://georginafootcare.co.uk"

# Pages and their priority/change frequency
# Add new pages here as your site grows
PAGES = [
    {"file": "index.html",          "priority": "1.0", "changefreq": "monthly"},
    {"file": "gfcare-contact.html", "priority": "0.8", "changefreq": "yearly"},
]

# Automatically discover any other .html files not listed above
AUTO_DISCOVER = True
# ──────────────────────────────────────────────────────────────────────────────


def get_url(filename):
    """Convert filename to URL."""
    if filename == "index.html":
        return BASE_URL + "/"
    return BASE_URL + "/" + filename


def generate_sitemap():
    today = date.today().isoformat()
    known_files = {p["file"] for p in PAGES}

    pages = list(PAGES)

    # Auto-discover additional HTML files
    if AUTO_DISCOVER:
        for filename in sorted(os.listdir(".")):
            if filename.endswith(".html") and filename not in known_files:
                pages.append({
                    "file": filename,
                    "priority": "0.5",
                    "changefreq": "yearly"
                })

    # Build XML
    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ]

    for page in pages:
        filepath = page["file"]
        if not os.path.exists(filepath):
            print(f"  ⚠️  Skipping {filepath} (file not found)")
            continue

        lines.append("  <url>")
        lines.append(f"    <loc>{get_url(filepath)}</loc>")
        lines.append(f"    <lastmod>{today}</lastmod>")
        lines.append(f"    <changefreq>{page['changefreq']}</changefreq>")
        lines.append(f"    <priority>{page['priority']}</priority>")
        lines.append("  </url>")

    lines.append("</urlset>")

    xml = "\n".join(lines) + "\n"

    with open("sitemap.xml", "w") as f:
        f.write(xml)

    print(f"✅ sitemap.xml generated with {len(pages)} pages")
    print(f"   Base URL: {BASE_URL}")
    for page in pages:
        if os.path.exists(page["file"]):
            print(f"   → {get_url(page['file'])}")


if __name__ == "__main__":
    generate_sitemap()
