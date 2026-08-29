# Maren Vale

An editorial website for a contemporary art practice — paintings on linen and sculptural bags, presented as a quiet digital gallery rather than a shop.

The studio is fictional. The site is a complete, usable showcase: home, work archive, bag collection, and contact.

## Pages

- **Home** — hero, selected works, bags preview, studio about, inquiry callout
- **Work** — full archive of paintings, with a dedicated page for each work
- **Bags** — bags as art objects, with material notes and detail views
- **Contact** — studio email, Instagram, and a short inquiry form

Artwork and bag records live in `lib/content.ts`. Add a new piece by appending to `artworks` or `bags` and placing images in `public/images/`.

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

Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui primitives. Typography is Geist with Cormorant Garamond. Images are served from `public/images` and optimized by Next.js.
