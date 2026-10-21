#!/usr/bin/env bash
# Renders resume/*.html to PDF with headless Chrome.
# Public PDFs go to public/cv/. With PRIVATE_CONTACT set, also writes full versions
# (phone/email) to PRIVATE_DIR, which must be outside the repo.
set -euo pipefail
cd "$(dirname "$0")/.."
CHROME="${CHROME:?set CHROME to a Chrome/Chromium binary}"

render() { # html pdf
  "$CHROME" --headless=new --no-sandbox --no-pdf-header-footer --virtual-time-budget=10000 \
    --print-to-pdf="$2" "file://$PWD/$1" 2>/dev/null
}

render resume/pt.html public/cv/augusto-lima-curriculo.pdf
render resume/en.html public/cv/augusto-lima-resume.pdf

if [ -n "${PRIVATE_CONTACT:-}" ]; then
  : "${PRIVATE_DIR:?set PRIVATE_DIR}"
  tmp=$(mktemp -d resume/.private-XXXX)
  trap 'rm -rf "$tmp"' EXIT
  cp resume/resume.css "$tmp/"
  for lang in pt en; do
    sed "s|<!--PRIVATE-CONTACT-->|<br>${PRIVATE_CONTACT}|" "resume/$lang.html" > "$tmp/$lang.html"
  done
  render "$tmp/pt.html" "$PRIVATE_DIR/augusto-lima-curriculo-completo.pdf"
  render "$tmp/en.html" "$PRIVATE_DIR/augusto-lima-resume-full.pdf"
fi
