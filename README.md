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

## Signup notifications

After a waitlist signup is saved, `/api/waitlist` sends a notification email over SMTP (`src/lib/signup-notify.ts`). The email has the person's name, Lagos side, party types, and signup time. It leaves out email and phone. A failed send is logged and does not affect the signup response.

| Variable           | Required | Notes                                       |
| ------------------ | -------- | ------------------------------------------- |
| `SMTP_HOST`        | yes      | Notifications are skipped when unset        |
| `SMTP_USER`        | yes      |                                             |
| `SMTP_PASS`        | yes      |                                             |
| `SMTP_PORT`        | no       | Defaults to `587`; `465` uses implicit TLS  |
| `SMTP_FROM`        | no       | Defaults to `SMTP_USER`                     |
| `SIGNUP_NOTIFY_TO` | no       | Defaults to `silas+party-match@catlog.shop` |
