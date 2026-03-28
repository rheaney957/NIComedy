# NI Comedy — Belfast Comedy Shows Website

A static website for Northern Ireland's largest live comedy promoter, built with Next.js. The site lists upcoming comedy shows, provides event details, and allows fans to search by artist or date.

## Tech Stack

- Next.js 13 (Pages Router, static export)
- React 18 / TypeScript
- CSS Modules
- Font Awesome icons
- SWR for data fetching
- React DatePicker for date-based search
- Sharp for image optimization

## Pages

- `/` — Comedy shows listing with search by artist/date
- `/about` — About NI Comedy
- `/comedy-gallery` — Photo gallery
- `/contact-us` — Contact form
- `/help-and-FAQs` — Frequently asked questions
- `/privacy-policy` — Privacy policy

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build & Export

The project is configured for static export:

```bash
npm run build
```

This runs `next build` followed by `next export`, outputting static files to the `out/` directory.

## Project Structure

```
components/    — Reusable UI components (NavBar, Header, Footer, Card, Carousel, etc.)
pages/         — Next.js page routes
public/        — Static assets (images, gallery, JSON data)
styles/        — CSS Modules
fonts/         — Custom fonts (Bebas)
```

## Data Sources

- Show listings are fetched from the Shine.net events API
- Gallery images and featured gigs are loaded from JSON files in `public/JSON/`
