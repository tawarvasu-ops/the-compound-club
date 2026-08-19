# Fieldnotes

A Next.js 14 (App Router) blog with a notebook/ledger visual identity:
dated entries instead of numbered lists, a fixed left "spine," and a
hand-drawn underline as the hover interaction.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `lib/posts.ts` — all post content lives here as an array of objects
  (title, date, tags, markdown body). Add/edit entries directly, or swap
  this file out for a filesystem/CMS-backed loader later — every other
  file just calls `getAllPosts()` / `getPostBySlug()`, so the rest of the
  app doesn't need to change.
- `app/page.tsx` — homepage, lists all entries newest-first.
- `app/posts/[slug]/page.tsx` — individual entry page, statically
  generated at build time via `generateStaticParams`.
- `components/` — `Spine` (left rail nav), `Footer`, `EntryRow` (list item).
- `app/globals.css` — design tokens live as Tailwind theme colors
  (`tailwind.config.ts`); the hand-drawn underline and drop-cap styling
  live here since they're custom, not utility classes.

## Customizing

- **Colors/fonts:** edit `tailwind.config.ts` and the font imports in
  `app/layout.tsx` (currently Fraunces / Newsreader / JetBrains Mono via
  `next/font/google`).
- **Content:** edit or add objects in `lib/posts.ts`. `slug` becomes the
  URL (`/posts/your-slug`).
- **Site name/description:** `app/layout.tsx` (`metadata`) and
  `components/Spine.tsx`.

## Deploying

Works out of the box on Vercel (`vercel deploy`) or any Node host that
supports Next.js. `npm run build && npm run start` for a production
build locally.
