# Ibrahim — Portfolio

Ibrahim's personal portfolio and link-in-bio hub: MoodShift and Livecheck, plus the Storefront Sites agency block. Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. The page sits inside a foliage frame over a forest-green gradient.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/            Layout (metadata, favicon), page, global styles
components/     Header, Hero, Products, ProductCard, StorefrontSites,
                Contact, Footer, frame & garden art
content/        Editable data: products.ts, links.ts
public/
  frame/        The four foliage frame images (top, left, right, bottom)
  pfp.jpg       Profile photo in the header
scripts/        Frame art SVGs and their rasterizer
```

## Editing content

- `content/products.ts` — the MoodShift and Livecheck links, plus
  `livecheckRunOnEverySite`. Set it to `false` to drop the "Used for
  Storefront Sites audits" link and the Livecheck audit bullet.
- `content/links.ts` — the contact URL and the GitHub profile.

The Storefront Sites block lives in `components/StorefrontSites.tsx` and is
self-contained on purpose: its copy and URLs are in that file so it can move
to its own domain later.

## Swapping the frame art

The forest frame is four images in `public/frame/`: `top.webp`, `left.webp`,
`right.webp`, `bottom.webp`. Replace them with your own art, keeping the same
file names — nothing else needs to change. For no distortion, roughly match
these aspects:

- `top.webp` ~1600×360
- `bottom.webp` ~1600×380
- `left.webp` / `right.webp` ~240×2400 (tall; stretched to full page height)

Keep each file under ~150 KB for fast loads.

## Regenerating the frame images

The frame images are rendered from the SVGs in `scripts/frame-src/`
(`top.svg`, `left.svg`, `bottom.svg` — the right side is mirrored from the
left). `sharp` is intentionally not a dependency; install it on demand:

```bash
npm install --no-save sharp
npm run placeholder:assets
```

## Deploying to Netlify

1. Push this folder to a Git repository.
2. In Netlify: **Add new site → Import an existing project** and pick the repo.
3. Netlify reads `netlify.toml` automatically (build `npm run build`, publish `.next`, Node 20) and installs the Next.js runtime on its own — no extra configuration needed.
4. Deploy.

## TODO checklist

- [ ] Swap `public/pfp.jpg` for a current photo
- [ ] Optionally add an Open Graph image
