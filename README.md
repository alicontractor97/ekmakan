# Ek Makān — One Home for Every Family

India's inclusive property platform. Rent or buy homes where every family is welcome.

**Live:** [ekmakan.com](https://ekmakan.com)

## Stack

- **Frontend:** HTML + CSS + JS (no build step, no framework)
- **Backend:** Supabase (Postgres + Auth + Storage)
- **Hosting:** Cloudflare Pages (auto-deploy from this repo)
- **Domain:** ekmakan.com

## Files

- `index.html` — Page structure and content (~82 KB)
- `app.css` — All styles (~32 KB)
- `app.js` — Application logic (~160 KB)
- `_headers` — Security HTTP headers (HSTS, CSP, XSS protection)
- `_redirects` — URL redirect rules

## Deployment

Every push to `main` triggers an automatic deploy to Cloudflare Pages.
No build step needed — Cloudflare serves the files directly.

## Local Development

Open `index.html` in a browser. No npm install, no dev server required.

© 2026 HAFAR CONTRATECH AI LLP
