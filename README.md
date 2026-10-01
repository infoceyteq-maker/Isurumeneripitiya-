# Isuru Meneripitiya — Official Artist Website

A production-ready, dark-themed artist profile site for **Isuru Chaturanga Meneripitiya**
(stage name *Isuru Meneripitiya*) — Singer & Music Director, Ginigathhena, Sri Lanka.

## Tech stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS 3** (custom black / ash / white palette)
- **Framer Motion** (scroll reveals, nav transitions)
- **Lucide React** (icons)
- **Inter** self-hosted via `@fontsource-variable/inter`

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Project structure

```
app/
  layout.tsx        Root layout, fonts, SEO metadata
  page.tsx          Single-page composition + JSON-LD structured data
  globals.css       Tailwind layers, smooth scroll, shared .btn/.card utilities
components/
  Navbar.tsx        Sticky glassmorphism nav, scroll-spy, mobile drawer
  Hero.tsx          Cover photo, tagline, Apple Music + YouTube CTAs
  About.tsx         Bio, discipline cards, 3-image gallery
  Music.tsx         Apple Music embed + release list
  VideoGallery.tsx  YouTube grid (click-to-load facade player)
  Contact.tsx       Location / email / phone, WhatsApp CTA, enquiry form
  Footer.tsx        Centered social icons + copyright
  Reveal.tsx        Reusable framer-motion scroll-reveal wrapper
  MediaFrame.tsx    Image with graceful "Add photo" fallback
lib/
  site.ts           ⭐ All artist data, nav links, releases, video IDs
public/images/      hero.jpg, about1.jpg, about2.jpg, about3.jpg
tailwind.config.js  Custom `ink` (black) and `ash` (grey) color scales
```

## How to customise

1. **Photos** — replace the files in `public/images/` keeping the same names
   (`hero.jpg`, `about1.jpg`, `about2.jpg`, `about3.jpg`). See
   `public/images/README.md` for recommended sizes.
2. **YouTube videos** — edit the `videos` array in `lib/site.ts` and replace each
   `id` with the real video ID (the part after `watch?v=`) from
   [@isurumeneripitiya](https://youtube.com/@isurumeneripitiya).
3. **Releases** — edit the `releases` array in `lib/site.ts`. Point `appleUrl` at a
   specific album/song URL to deep-link it.
4. **Apple Music embed** — in `components/Music.tsx`, `APPLE_EMBED_SRC` is just the
   artist URL with the `embed.` subdomain; swap in any album/song URL the same way.
5. **Contact details / socials** — all live in `lib/site.ts`.
6. **Colors** — the `ink` and `ash` scales live in `tailwind.config.js`.

## Deploy

Push to GitHub and import the repo on [Vercel](https://vercel.com) — zero config.
