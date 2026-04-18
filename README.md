# Ek Makān — One Home for Every Family

India's inclusive property platform. Rent or buy homes where every family is welcome.

**Live:** [ekmakan.com](https://ekmakan.com)

## Stack

- **Frontend:** Single-file HTML/CSS/JS (no build step)
- **Backend:** Supabase (Postgres + Auth + Storage)
- **Hosting:** Cloudflare Pages (auto-deploy from this repo)
- **Domain:** ekmakan.com

## Deployment

Every push to `main` triggers an automatic deploy to Cloudflare Pages.

- `index.html` — The full application
- `_headers` — Security HTTP headers (HSTS, CSP, XSS protection)
- `_redirects` — www → apex redirect

## Local Development

Just open `index.html` in a browser. No build step, no npm install, no dev server required.

## Architecture

- **Auth:** Supabase Auth (email/password, password reset, email verification)
- **Database:** Supabase Postgres with Row Level Security
- **Images:** Supabase Storage (listing-images bucket)
- **Email Validation:** 4-tier (format, disposable blocklist, typo suggestion, MX lookup via DoH)

© 2026 HAFAR CONTRATECH AI LLP
