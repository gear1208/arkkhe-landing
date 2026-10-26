# Arkkhe — Exoform Landing

A single-page, dark editorial landing page built with Next.js 15 App Router, React 19, TypeScript, Tailwind CSS v4 and Framer Motion 12.

## Requirements
- Node.js 20.9+ recommended
- npm

## Run locally
```bash
npm install
npm run dev
```
Then open http://localhost:3000.

## Production build
```bash
npm run build
npm run start
```

## Assets
All asset URLs are centralized in `lib/assets.ts`. The hand film is intentionally pinned behind the entire document, autoplays muted, loops, and is never scroll-scrubbed. When the operating system requests reduced motion, the video source is not attached and the poster is used instead.

The three still images are served via `next/image` from the configured asset base. To use local files, copy the supplied source images into `public/images/` and set:
```bash
NEXT_PUBLIC_ASSET_BASE=
```
Because an empty value is intentionally honoured, `ASSETS` then resolves to `/images/...` on the local origin.

Expected local asset files:
- `public/images/hand-poster.jpg`
- `public/images/arm-detail.jpg`
- `public/images/logo-mark.png`

The asset URLs provided in the brief point to the hosted images. If a hosted still does not load in your environment, place the corresponding file in `public/images/` and use the empty environment variable above.

## Architecture notes
- The hero has separate desktop canvas and mobile reading-order trees.
- The film is a fixed layer at `z-0`; header and content remain transparent so no section paints an opaque band over it. The full-screen menu is intentionally opaque.
- Framer Motion handles entrance, scroll-linked parallax, the chevron sweep, scroll cue rotation, count-up and form status transitions.
- The newsletter form validates and announces status locally. No backend endpoint is configured, so it does not actually send email.
- Licensed font names are first in the CSS font stacks (`Surgena`, `SK Cuber Expanded Trial`); Archivo and Orbitron are the bundled Google Font fallbacks.
