# E.D.E Studio

An editorial website for E.D.E Studio — handmade handbags and studio works, presented as a quiet digital gallery.

## Pages

- **Home** — the studio mark
- **About** — a short account of the practice
- **Handbags** — ten handmade bags, shown with number, name, and color
- **Contact** — studio email, Instagram, and a short inquiry form

Artwork and bag records live in `lib/content.ts`. Add a new bag by appending to `handbags` and placing an image in `public/images/handbags/`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:43147](http://localhost:43147).

```bash
npm run build
npm start
```

## Stack

Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui primitives. Typography is Geist with Cormorant Garamond — the same pairing used in the studio mark. Images are served from `public/` and optimized by Next.js.
