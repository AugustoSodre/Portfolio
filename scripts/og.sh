#!/usr/bin/env bash
# Renders scripts/og.html to the link preview images in public/.
set -euo pipefail
cd "$(dirname "$0")/.."
CHROME="${CHROME:?set CHROME to a Chrome/Chromium binary}"
for lang in pt en; do
  "$CHROME" --headless=new --no-sandbox --hide-scrollbars --window-size=1200,630 --virtual-time-budget=10000 \
    --screenshot="public/og-$lang.png" "file://$PWD/scripts/og.html?$lang" 2>/dev/null
done
