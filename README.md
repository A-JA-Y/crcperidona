# CRC The Peridona — Marketing Microsite

A [Next.js](https://nextjs.org) (App Router, Tailwind CSS v4) lead-generation microsite for **CRC The Peridona**, an ultra-luxury residential project by **CRC Group** at Jaypee Greens, Greater Noida. Published by an authorised channel partner at [https://www.crcperidona.in](https://www.crcperidona.in).

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

- `app/` — App Router pages (home, about, residences, price, floor plans, location, amenities, contact, blogs, news)
- `components/` — shared UI components (header, footer, hero, forms, modals)
- `assets-crc/` — project imagery; `assets/` — brand logos
- `data/` — navigation and content data
- `public/` — static files (brochure, robots.txt, sitemap.xml, og image)
