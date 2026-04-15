# AGENTS.md — PERMIAS SDIA Website

Technical reference for AI coding agents working in this codebase.

## Stack

- **Framework:** Next.js 15 (App Router, React 18, TypeScript 5)
- **Styling:** Tailwind CSS 3.4 with `tailwindcss-animate` and `tailwind-scrollbar` plugins
- **UI components:** shadcn/ui (default style, neutral base, CSS variables, Lucide icons)
- **Fonts:** Geist Sans / Geist Mono (loaded via `geist` package, set as CSS variables on `<html>`)
- **Database:** Neon Postgres via `@neondatabase/serverless` (`lib/neon.ts`, requires `DATABASE_URL`)
- **Legacy data layer:** PocketBase client (`lib/pb.ts`, uses `NEXT_PUBLIC_POCKETHOST_URL`)
- **Analytics:** `@vercel/analytics`
- **Package manager:** pnpm
- **Deployment:** Vercel (`vercel.json` runs `pnpm install --no-frozen-lockfile && pnpm run build`)
- **Linting:** ESLint 9 flat config + Prettier, enforced via Husky + lint-staged on commit

## Project Structure

```
app/
├── layout.tsx              # Root layout: Navigation, Geist fonts, Analytics
├── globals.css             # Tailwind directives + CSS custom properties (shadcn tokens)
├── page.tsx                # Home page
├── about/page.tsx
├── contact/page.tsx
├── events/page.tsx         # Legacy events page (NOT linked in navbar)
├── events-documentation/   # Active events archive page (fetches from Google Sheets CSV)
│   └── page.tsx
├── team/page.tsx
├── alumni/page.tsx
├── wiki/
│   ├── page.tsx
│   └── ExpandableSection.tsx
└── api/
    ├── events/route.ts     # GET — SELECT * FROM events (Neon)
    ├── team/route.ts       # GET — SELECT * FROM team (Neon, custom sort)
    └── alumni/route.ts     # GET — SELECT * FROM alumni (Neon)

components/
├── navigation.tsx          # Fixed top navbar (desktop + mobile), client component
├── footer.tsx
├── cta.tsx
├── theme-provider.tsx      # next-themes wrapper (exists but NOT wired into layout)
└── ui/                     # shadcn primitives
    ├── badge.tsx
    ├── button.tsx
    ├── card.tsx
    ├── input.tsx
    ├── select.tsx
    └── textarea.tsx

lib/
├── utils.ts                # cn() (clsx + tailwind-merge), buildImageUrl()
├── types.ts                # TeamRecord, AlumniRecord, EventRecord interfaces
├── neon.ts                 # Neon SQL client (server-only, requires DATABASE_URL)
└── pb.ts                   # PocketBase client (NEXT_PUBLIC_POCKETHOST_URL)
```

## Environment Variables

| Variable | Context | Used by |
|----------|---------|---------|
| `DATABASE_URL` | Server | `lib/neon.ts` — Neon Postgres connection string |
| `NEXT_PUBLIC_POCKETHOST_URL` | Client + Server | `lib/pb.ts` — PocketBase instance URL |

## Brand Colors

Defined in `tailwind.config.ts` as numeric scales (not the shadcn `--primary` CSS variable):

- **Primary (red):** `primary-600: #a02a28` — used for buttons, active nav, accents
- **Secondary (gold):** `secondary-400: #f6be0f` — used for badges, hero highlights

Use `primary-600`, `primary-700`, `secondary-300`, `secondary-400`, etc. in utility classes for brand-consistent styling. The shadcn `bg-primary` / `text-primary` tokens resolve to neutral grays from CSS variables, NOT the brand red.

## Page Conventions

- All pages use `"use client"` when they need interactivity or fetch data client-side.
- Common page structure: hero section → content sections → `<Footer />`.
- Hero sections use a full-bleed background image with gradient overlay (`from-primary-900/80 via-primary-800/60 to-primary-700/40`), a `Badge` subtitle, a large heading with a secondary-gradient text span, and a description paragraph.
- The `<Navigation />` component is rendered in the root layout and floats at the top (`fixed`, `rounded-full`, `backdrop-blur-md`). Pages should add `pt-20` to their first section to avoid overlap.

## Navigation

Links are hardcoded in `components/navigation.tsx`. Both desktop and mobile menus must be updated when adding/removing pages. The "People" dropdown uses `onMouseEnter`/`onMouseLeave` with a 200ms timeout.

Current links: About, People (Team dropdown), Events → `/events-documentation`, Wiki, Contact.

## Data Patterns

- **Team, Alumni, Events (legacy):** API routes in `app/api/` query Neon Postgres and return JSON. Client pages fetch from these endpoints.
- **Events Documentation:** Fetches a published Google Sheets CSV directly on the client (`https://docs.google.com/spreadsheets/d/e/.../pub?output=csv`). Data columns: `Event_Name`, `month_year` (MM/YYYY), `GDrive_Folder` (URL).

## Database Tables

Inferred from API routes and `lib/types.ts`:

- **`team`** — columns: id, name, graduation_year, major, role, pic, second_pic, description, department, isHead
- **`alumni`** — columns: id, name, graduation_year, major, role, career, fun_fact, instagram, email, linkedin, formal_headshot, casual_headshot, created, updated
- **`events`** — columns: id, title, description, long_description, datetime, location, category, isPast, instagram, documentation (text[]), created, updated

## Build Notes

- `next.config.mjs` has `eslint.ignoreDuringBuilds: true` and `typescript.ignoreBuildErrors: true` — the build will succeed even with lint/type errors, but you should still fix them.
- Images are unoptimized (`images.unoptimized: true`).
- Static assets (images, logo) live in `public/`.

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm lint` | Run ESLint |
| `pnpm lint-fix` | Run lint fix script |
| `pnpm start` | Start production server |
