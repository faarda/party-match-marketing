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

Waitlist CTAs open a signup modal that posts to `/api/waitlist`. The route validates the input and upserts it into the Supabase `party_match_waitlist` table (keyed on email) using `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.

## Waitlist admin

`/admin/waitlist` lists every signup with totals by Lagos side and party type. It reads Supabase on the server with `SUPABASE_SERVICE_ROLE_KEY`, so the key never reaches the browser.

`src/proxy.ts` puts `/admin` behind HTTP Basic auth. The browser asks for a username (any value works) and the password hardcoded in `src/proxy.ts`. Setting `ADMIN_PASSWORD` overrides it.
