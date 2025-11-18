# GameVault — Gaming E-Commerce

Lightweight Next.js storefront demo for a gaming marketplace. This repository contains a small Next 16 + React app with Tailwind styles and a 3D Hero (Spline).

## Features

- Next 16 app using React 19 and TailwindCSS
- Hero with a Spline 3D scene
- Dedicated Store page at `/store` listing products
- Product prices set to `1`, `2`, or `3` USDT (for demo purposes)

## Quick Start

Requirements: Node 18+ (or the version compatible with Next 16) and `pnpm` installed.

Install dependencies:

```powershell
cd 'd:\Projects\Gaming E-Commerce website'
npm install
```

Run the dev server:

```powershell
pnpm dev
```

Open `http://localhost:3000` (or the port shown by Next). Click the `Store` link in the header or the `Explore Store` button in the hero to browse the store at `http://localhost:3000/store`.

## Files of Interest

- `app/page.tsx` — Main landing page (no longer shows the product grid).
- `app/store/page.tsx` — The new Store page that lists products using `ProductCard`.
- `components/product-card.tsx` — Product card UI (Buy button is a mock/placeholder).
- `components/header.tsx` — Header navigation now links to `/store`.
- `styles/globals.css` — Global styles; includes a rule to hide Spline watermark/logo.

## Notes

- Product purchases are currently mocked: the `Buy Now` button is UI-only. Integrate a payment provider (USDT checkout, web3 wallet, or third-party gateway) to implement real purchases.
- The Spline watermark is hidden via a CSS rule in `styles/globals.css`. If Spline updates their markup, you may need to adjust the selector or place a targeted overlay inside `components/hero.tsx`.
- A `.gitignore` was added to the project root. Edit it if you want to keep `pnpm-lock.yaml` under version control.

## Next steps I can help with

- Wire up a payment flow (mock or real).
- Improve product data fetching from an API or CMS.
- Add filtering, search, or categories to the Store page.
- Commit the changes and create a branch with a clean commit message.

---
Generated changes:
- Added `app/store/page.tsx` (Store listing)
- Updated header/footer/hero to link to `/store`
- Removed product grid from homepage (`app/page.tsx`)
- Added `.gitignore` and `README.md`

## Authentication (Supabase)


This project includes a basic Supabase authentication setup (client-side) using `@supabase/supabase-js`.

Setup steps:

- Install the dependency:

```powershell
npm install @supabase/supabase-js
```

- Add the following environment variables (for local `.env.local`):

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

- Routes added:
	- `app/sign-in/page.tsx` — simple magic-link email sign-in page

After installing deps and setting env vars, run `npm run dev` and visit `/sign-in` to test authentication.

If you want, I can also:
- Add middleware to protect specific routes.
- Add social OAuth sign-in buttons (Google/GitHub) wired to Supabase.
- Add an auth context/provider to allow any client component to read session changes.
