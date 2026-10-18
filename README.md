# Ibrahim — Portfolio

A single-page portfolio for a solo developer & founder. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. The page sits inside a foliage frame over a forest-green gradient.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/            Layout, page, global styles, favicon
components/     Header, Hero, Products, Websites, Contact, Footer, frame & garden art
content/        Editable data: products.ts, sites.ts, links.ts
public/
  frame/        The four foliage frame images (top, left, right, bottom)
  products/     Product screenshots (1200x800)
  sites/        Website screenshots (1200x672)
scripts/        Placeholder asset generator (dev only)
```

## Editing content

All content that changes regularly lives in `content/`:

- `content/products.ts` — the product cards. Replace the `#` URLs with real links.
- `content/sites.ts` — websites you've built. Keep `kind: "concept"` unless it was a real client project, and only add `result` when you have a real, verifiable outcome.
- `content/links.ts` — social profile URLs and the contact email.

Section headings and sublines live in the matching component under `components/` (e.g. `Hero.tsx`).

### Contact email

Copy `.env.example` to `.env.local` and set:

```
NEXT_PUBLIC_CONTACT_EMAIL=you@yourdomain.com
```

On Netlify, add the same variable under Site configuration → Environment variables.

## Swapping the frame art

The forest frame is four images in `public/frame/`: `top.webp`, `left.webp`, `right.webp`, `bottom.webp`. Replace them with your own art, keeping the same file names — nothing else needs to change. For no distortion, roughly match these aspects:

- `top.webp` ~1600×360
- `bottom.webp` ~1600×380
- `left.webp` / `right.webp` ~240×2400 (tall; stretched to full page height)

Keep each file under ~150 KB for fast loads.

## Regenerating placeholder images

The frame, product, and site placeholders are generated from SVGs by `scripts/generate-placeholders.mjs`. `sharp` is intentionally not a dependency; install it on demand:

```bash
npm install --no-save sharp
npm run placeholder:assets
```

This writes `public/frame/*.webp`, `public/products/*.webp`, and `public/sites/*.webp`. To tweak the frame art, edit the SVGs in `scripts/frame-src/` (`top.svg`, `left.svg`, `bottom.svg` — the right side is mirrored from the left).

## Deploying to Netlify

1. Push this folder to a Git repository.
2. In Netlify: **Add new site → Import an existing project** and pick the repo.
3. Netlify reads `netlify.toml` automatically (build `npm run build`, publish `.next`, Node 20) and installs the Next.js runtime on its own — no extra configuration needed.
4. Add `NEXT_PUBLIC_CONTACT_EMAIL` under Site configuration → Environment variables, then deploy.

## TODO checklist

- [ ] Replace `#` links in `content/products.ts` and `content/links.ts`
- [ ] Replace placeholder entries in `content/sites.ts` with real work
- [ ] Swap product and site images for real screenshots
- [ ] Set `NEXT_PUBLIC_CONTACT_EMAIL`
- [ ] Optionally swap `app/icon.svg` and add an Open Graph image
