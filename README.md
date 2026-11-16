# Cindy Yang · Gaea Realty

Bilingual (EN / 中文) single-page site for Cindy Yang, intended for `cindy.gaearealty.com`.

- `index.html` — page, styles and behaviour
- `data.js` — reviews (Zillow + Google), seller-side closed sales, listing photo references
- `cindy.png` — portrait
- `index.dark.bak.html` — earlier dark theme, kept for reference

Before launch: replace the stand-in stock photos in the lifestyle slots (`.slot`, each has a `data-photo` name; see `STOCK` in `index.html`) with Cindy's own photos, and replace the Zillow-hosted listing photos in `data.js` with self-hosted files.

Preview locally: `python3 -m http.server 4173`
