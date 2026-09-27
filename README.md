# Party Match marketing

A single-page, prelaunch website for Party Match, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Local development

Use Node.js 22 (`nvm use`), then run:

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
```

## Content and assets

- The page and its sections live in `src/app/page.tsx` and `src/components`.
- Layout, color, and type styles are Tailwind class names on those components. `src/app/globals.css` holds theme tokens and a few global base rules.
- Unbounded and Geist are self-hosted through `next/font/local` using Fontsource packages.
- Supplied logos and the hero photograph live in `public/images`. The page uses an optimized WebP copy of the original photograph.
- Product copy is based on the sibling API repository's `docs/PRODUCT.md` and `docs/PROGRESS.md`.

## Waitlist

Waitlist CTAs navigate to the page's waitlist section. Registration is intentionally a disabled preview labelled “Signups opening soon.” No email is submitted or stored. Connect the form to a real registration service before enabling its controls.

The homepage is statically prerendered. There is no API or database dependency.
