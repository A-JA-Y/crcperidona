# CRC The Peridona — Marketing Microsite

A [Next.js](https://nextjs.org) (App Router, Tailwind CSS v4) lead-generation microsite for **CRC The Peridona**, an ultra-luxury residential project by **CRC Group** at Jaypee Greens, Greater Noida. Published by an authorised channel partner at [https://thecrcperidona.com](https://thecrcperidona.com).

## About the Project

CRC The Peridona offers 4, 4.5 & 5.5 BHK golf course residences (starting 4,950 sq ft) across 7 towers of 43 floors on 6.80 acres inside the 452-acre Jaypee Greens golf township, Greater Noida.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build (runs `next-sitemap` postbuild to regenerate the sitemap)
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Structure

- `app/` — App Router pages (home, about, residences, price, floor plans, location, amenities, contact, buyer guides, blogs, news)
- `components/` — shared UI components (header, footer, hero, forms, modals)
- `assets-crc/` — project imagery; `assets/` — brand logos
- `data/` — navigation and content data
- `public/` — static files (brochure, robots.txt, sitemap.xml, og image)

## Deploying to Cloudflare

The site is a static export (`output: "export"`), so `npm run build` writes the whole site to `out/`. `wrangler.jsonc` serves that folder as static assets on Cloudflare Workers.

In the Cloudflare dashboard, connect this repository and use:

- **Build command:** `npm run build`
- **Deploy command:** `npx wrangler deploy`

The Worker name in `wrangler.jsonc` (`crcperidona`) must match the Worker name in your Cloudflare account.

To deploy from your own machine:

```bash
npm run build && npx wrangler deploy
```

Note: `next-sitemap` runs after the export, so it rewrites `public/sitemap.xml` but not `out/sitemap.xml`. The deployed sitemap is the committed `public/sitemap.xml`; add new pages to it by hand (or rebuild twice).
