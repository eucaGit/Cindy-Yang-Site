# Cindy Yang — personal site (Gaea Realty)

Live preview: https://eucagit.github.io/Cindy-Yang-Site/ · Admin: https://eucagit.github.io/Cindy-Yang-Site/admin/

Static site on GitHub Pages. No build step.

## Files
| Path | What it is |
|---|---|
| `index.html` | Home: "What's my home worth?" chat → track record + $11.56M feature + all closed sales (price high→low) → listings → testimony → bio (中/EN verbatim) → growth story → roles → Gaea |
| `blog.html` | Blog list and posts (`blog.html?p=slug`) |
| `admin/` | Login portal + editor (blog, listing order, portfolio pin/hide, modules, settings) |
| `content/settings.json` | Contact email, hero photo, admin password hash, **reserved feature switches** |
| `content/blog.json` | Blog posts (EN + 中文, light Markdown) |
| `content/listings.json` | Current listings, in display order |
| `content/sales.json` | 169 closed sales (Zillow + Homes.com public record); `pinned` / `hidden` lists |
| `data.js` | Reviews (Zillow + Google) and Zillow photo map for listings |
| `site.css`, `site.js` | Shared styles and helpers |
| `img/` | Site images; admin uploads go to `img/uploads/` |

## Admin
- Initial password: `Admin` (change it in Admin → Settings, then Publish).
- The password is a client-side gate only. Publishing needs a GitHub **fine-grained token** with *Contents: Read and write* on this repository, entered once in Admin → Settings (stored in that browser only).
- Edits are saved as drafts in the browser; **Preview** shows them on the site; **Publish** commits the JSON files and the site updates in ~1 minute.

## Reserved for later (content/settings.json → features)
`valuation_chat.ai_endpoint` (live AI replies), `lead_webhook` (CRM / Google Sheet), `mls_idx_feed` (needs an IDX vendor agreement), `open_houses`, `newsletter`, `market_reports`, `video`.

## To do
- Hero photo: save the San Francisco portrait as `img/cindy-hero.jpg` (falls back to `cindy.png` until then).
- Replace the three "Sample" stock photos in *Talk to me as…* with Cindy's own.
- Custom domain `cindy.gaearealty.com` (CNAME `cindy` → `eucagit.github.io`, then set it in repo Settings → Pages).
- House photos are hotlinked from Zillow / Homes.com; self-host before launch.

## Local preview
`python3 -m http.server 4173` in this folder, then open http://localhost:4173
