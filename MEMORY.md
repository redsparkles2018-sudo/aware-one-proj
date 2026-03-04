# Aware One — Project Memory

> **READ THIS FIRST before doing anything.**
> This is the single source of truth. Update it as you make decisions and complete tasks.

---

## Project Identity

- **Business:** Aware One — B2B consultancy for NZ SMBs
- **Trading name for:** Existing NZ registered company (Wei Yu)
- **Tagline:** *"One partner. Every advantage."*
- **Contact:** info@awareone.co.nz
- **Domains:** awareone.co.nz + awareone.nz (both registered)
- **Owner:** Wei Yu (Auckland, NZ)

---

## 🚦 Current Status

### Done
- [x] Brand locked → see `BRAND.md` for full spec
- [x] All logo + icon SVG files → `public/brand/`
- [x] Homepage mockup (HTML) → `public/index.html` ← **use this as design reference**
- [x] Homepage copy written (pain-point led, Mission Control concept)
- [x] Pillar copy saved → `content/pillars/operate.md`, `source.md`, `build.md`

### Up Next — Build the Website
- [x] Init Next.js (App Router) + Tailwind CSS
- [x] Recreate homepage from `public/index.html` mockup
- [x] Build remaining pages (services, operate, source, build, about, contact, blog, sitemap, robots)
- [x] Set up Sanity CMS for blog
- [ ] Deploy to Vercel + connect awareone.co.nz

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | **Next.js 16** (App Router) |
| Styling | **Tailwind CSS** |
| CMS | **Sanity** (blog + content) |
| Hosting | **Vercel** (free tier) |
| Forms | Contact form → mailto or Resend |
| Analytics | GA4 (add later) |
| Email | info@awareone.co.nz |

---

## Design System (from BRAND.md)

### Colours
```
--slate:   #1E2B3C   ← primary, headlines
--teal:    #00A99D   ← accent, CTAs, links
--teal-l:  #00C4B7   ← hover states
--teal-p:  #EEF8F7   ← light tint (use rgba(0,169,157,0.13) in dark mode)
--gray:    #6B7C93   ← body text
```

### Dark mode (DEFAULT — build dark-first)
```
--bg:      #0D1520
--bg-soft: #111D2C
--bg-card: #172030
--text:    #EDF2F7
--text-2:  #7A90AA
--border:  rgba(255,255,255,0.07)
```

### Typography
- Font: **Inter** (Google Fonts) — weights 300, 400, 600, 700, 800
- H1: 800, clamp(34px, 5.5vw, 56px), tracking -0.03em
- H2: 800, clamp(26px, 4.5vw, 40px), tracking -0.02em
- Body: 400, 15–17px, line-height 1.75

### Logo files
All in `public/brand/`:
- `logo-combined.svg` — icon + wordmark (light bg)
- `logo-combined-dark.svg` — icon + wordmark (dark bg) ← use in nav by default
- `logo-wordmark.svg` — text only (light bg)
- `logo-white.svg` — text only (dark bg)
- `logo-icon.svg` — A¹ icon only
- `favicon.svg` — browser favicon

### Service icons
- `icon-operate.svg` / `icon-operate-dark.svg`
- `icon-source.svg` / `icon-source-dark.svg`
- `icon-build.svg` / `icon-build-dark.svg`
> Always use the `-dark` variants in dark mode context

---

## Page List

### `/` — Homepage
**Reference: `public/index.html`** ← pixel-accurate design reference. Recreate this in Next.js/Tailwind.

Sections (in order):
1. **Nav** — logo + links + "Free call" CTA + theme toggle
2. **Hero** — "Focus on your ideas. We run the rest." + 3 stat cards
3. **Trust bar** — 4 trust signals
4. **Mission Control section** — "You're the commander" + flow diagram + quote
5. **Services grid** — 3 cards (Operate / Source / Build), 5 bullets each
6. **Why Aware One** — 3 numbered points
7. **CTA banner** — "Ready to take command?"
8. **Footer**

### `/services/operate` — Operate landing page
Use `content/pillars/operate.md` for copy.
Expand into full page: hero, pain points, what we do, process steps, CTA.

### `/services/source` — Source landing page
Use `content/pillars/source.md` for copy.

### `/services/build` — Build landing page
Use `content/pillars/build.md` for copy.

### `/about` — About page
- Who is Wei Yu / Aware One
- Why we exist
- NZ-based, globally connected
- Simple, personal, no corporate fluff
- CTA to book a call

### `/contact` — Contact page
- Simple form (name, email, message, which service)
- info@awareone.co.nz
- "Book a free 30-min strategy call" framing

### `/blog` — Blog index
- Sanity CMS powered
- Show latest posts in grid
- Categories: Operate / Source / Build

### `/blog/[slug]` — Blog post
- Full article layout
- Author, date, category
- Related posts

---

## Key Implementation Notes

1. **Dark mode is DEFAULT** — `<html data-theme="dark">` on load, theme stored in localStorage
2. **Theme-aware images** — logos and icons have light/dark variants. Use Next.js `<Image>` with conditional src based on theme. See the mockup JS for the swap logic.
3. **Responsive** — mobile-first. Nav collapses on <640px. Services grid: 3-col desktop → 2-col tablet → 1-col mobile.
4. **Hover effects** — cards lift on hover (`translateY(-3px)`) + teal bottom border slides in. Keep these.
5. **The Mission Control flow diagram** — horizontal flow: Source → Operate → Build → Market → Growth. Last step has teal highlight.
6. **SEO** — every page needs `<title>`, `<meta description>`, OG tags. Use Next.js metadata API.
7. **Performance** — target 90+ Lighthouse. Use Next.js Image for all images. Lazy load below fold.
8. **Font** — load Inter via `next/font/google` (not a `<link>` tag) for performance.
9. **Commit often** — commit after each page or major component is done.

---

## 🔄 Keeping Sparkle in the Loop

Sparkle (the AI assistant) is watching this project. After completing each major task, **update the status checklist above** and commit. Sparkle reads this file to track progress.

Specifically update:
- Tick off items in "Up Next" as they're done
- Add any new decisions to "Key Decisions Made" below
- Note any blockers or open questions at the bottom

---

## Key Decisions Made

- [2026-03-03] Brand name: **Aware One** (trading name)
- [2026-03-03] Domains registered: awareone.co.nz + awareone.nz ✅
- [2026-03-03] Brand colours: Deep Slate #1E2B3C + Teal #00A99D
- [2026-03-03] Logo: "AWARE 1" wordmark + A¹ icon
- [2026-03-03] Tech stack: Next.js 14 + Tailwind + Sanity + Vercel
- [2026-03-03] Dark mode is primary/default theme
- [2026-03-03] Contact email: info@awareone.co.nz (Wei Yu setting up)
- [2026-03-03] Homepage copy locked — Mission Control concept is the big idea
- [2026-03-03] Detailed pillar copy saved in `content/pillars/` for individual landing pages
- [2026-03-05] Sanity CMS configured — project ID `tw557kag`, dataset `production`, Studio at `/studio`
- [2026-03-05] Blog wired to Sanity: `/blog` fetches live posts, `/blog/[slug]` renders PortableText
- [2026-03-05] Replaced all emoji icons with flat stroke SVGs (`components/Icons.tsx`)
- [2026-03-05] Nav logo: theme-aware swap (dark/light variants), scroll-shrink effect (220→175px)

## Open Questions / Blockers

- About page: Wei Yu's bio/background not yet written — page has placeholder copy
- **Vercel deploy failing**: `.env.local` is gitignored so Vercel has no Sanity env vars. Add `NEXT_PUBLIC_SANITY_PROJECT_ID=tw557kag` and `NEXT_PUBLIC_SANITY_DATASET=production` in Vercel project settings → Environment Variables before deploying.
- Vercel: needs Wei Yu to connect domain (awareone.co.nz) after first successful deploy

---

*Last updated: 2026-03-05*
