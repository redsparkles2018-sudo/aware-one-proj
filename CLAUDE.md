# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project State

Pre-build phase transitioning to active build. Read `MEMORY.md` first — it is the single source of truth and must be kept up to date as tasks complete.

What exists today:
- `public/index.html` — static HTML/CSS prototype of the homepage (**pixel-accurate design reference**)
- `public/brand/` — all brand SVG assets (logos, service icons, favicon)
- `content/pillars/` — copy stubs for the three service pillar pages
- `BRAND.md` — locked brand guidelines
- `MEMORY.md` — project memory, status tracker, and implementation notes

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 14 (App Router, SSG/ISR) |
| Styling | Tailwind CSS |
| CMS | Sanity (blog + content) |
| Hosting | Vercel (free tier) |
| Forms | Contact form → Resend or mailto |
| Font | Inter via `next/font/google` |

---

## Commands

```bash
# Dev server
npm run dev

# Build
npm run build

# Lint
npm run lint
```

---

## Architecture

```
app/
  layout.tsx          # Root layout — font, theme provider, nav, footer
  page.tsx            # Homepage
  services/
    page.tsx          # Services overview
    operate/page.tsx
    source/page.tsx
    build/page.tsx
  about/page.tsx
  contact/page.tsx
  blog/
    page.tsx          # Blog index (Sanity-powered)
    [slug]/page.tsx   # Individual post
components/
  nav.tsx
  footer.tsx
  # Shared UI components
public/brand/         # All SVG logo + icon assets
content/pillars/      # Copy source for pillar pages
sanity/               # Sanity studio + schemas (set up separately)
```

---

## Key Implementation Rules

1. **Dark mode is DEFAULT** — `<html data-theme="dark">` on load, stored in localStorage. Light mode is the toggle option.
2. **Theme-aware images** — logos and service icons have `-dark` variants in `public/brand/`. Swap based on active theme.
3. **Design reference** — `public/index.html` is the source of truth for the homepage layout, CSS variables, hover effects, and component patterns. Recreate faithfully.
4. **Pillar pages** — share the same layout template (hero → pain points → what we do → process → CTA). Copy from `content/pillars/*.md`.
5. **SEO** — every page uses the Next.js Metadata API (`export const metadata`). OG images, canonical URLs, semantic HTML required on all pages.
6. **Performance** — use `next/image` for all images, `next/font/google` for Inter. Target 90+ Lighthouse.
7. **Mobile-first** — nav collapses at 640px, services grid goes 3-col → 2-col → 1-col.
