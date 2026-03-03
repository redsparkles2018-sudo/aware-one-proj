# Aware One — Project Memory

> This file is the single source of truth for this project.
> Read it at the start of every Claude Code session.
> Update it as decisions are made and tasks are completed.

---

## Project Identity

- **Business name:** Aware One
- **Trading name for:** Existing NZ registered company (Wei Yu)
- **Type:** B2B consultancy for NZ SMBs
- **Tagline:** *"One partner. Every advantage."*
- **Owner:** Wei Yu (based in Auckland, NZ)

---

## Key Decisions Made

- [2026-03-03] Brand name chosen: **Aware One**
- [2026-03-03] Domains to register: `awareone.co.nz` + `awareone.nz` (both available)
- [2026-03-03] Tech stack agreed: Next.js + Tailwind + Sanity CMS + Vercel
- [2026-03-03] Three service pillars: **Operate / Source / Build**
- [2026-03-03] Website focus: SEO-first, blog-driven content strategy
- [2026-03-03] Hosting: Vercel free tier to launch, upgrade when needed
- [2026-03-03] Email: Zoho Mail (free) to start → Google Workspace later

---

## Service Pillars

### Operate
Improve business operations using latest AI tools — automation, workflow, process improvement.

### Source
Help businesses set up overseas logistics and sourcing (China/Asia focus).

### Build
Product design, prototyping, custom apps and AI-integrated workflows.

---

## Tech Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | Next.js (App Router) | SSG/ISR for SEO |
| Styling | Tailwind CSS | |
| Hosting | Vercel | Free tier |
| CMS | Sanity | Blog + content |
| Forms | React Hook Form + Resend/Formspree | Contact form |
| Analytics | GA4 + Google Search Console | |
| Email | Zoho Mail → Google Workspace | `wei@awareone.co.nz` |

---

## Sitemap

```
/ ................. Home
/services ......... Services overview
/services/operate . Operate pillar page
/services/source .. Source pillar page
/services/build ... Build pillar page
/blog ............. Blog index
/blog/[slug] ...... Individual posts
/about ............ About page
/contact .......... Contact + Calendly
```

---

## Current Status

- [x] Business concept defined
- [x] Brand name finalised: Aware One
- [x] Domains confirmed available
- [x] Tech stack chosen
- [x] Full plan written → `PLAN.md`
- [ ] Domains registered
- [ ] Logo designed
- [ ] Email set up
- [ ] Website copy written
- [ ] Website built
- [ ] Blog posts written
- [ ] Launched

---

## Content Plan

**First 10 blog posts planned** (see PLAN.md for full titles)
- Pillar 1 (Operate): AI tools, automation, process
- Pillar 2 (Source): Sourcing from Asia, import logistics
- Pillar 3 (Build): Custom software, apps, prototyping

**Cadence:** 2 posts/month minimum

---

## File Structure (planned)

```
aware-one/
├── MEMORY.md          ← this file (always read first)
├── PLAN.md            ← full business & website plan
├── app/               ← Next.js app directory
├── components/        ← reusable UI components
├── content/           ← static content / MDX (if not using Sanity)
├── public/            ← assets, images, favicon
├── sanity/            ← Sanity studio + schemas
├── styles/            ← global CSS
└── README.md          ← setup instructions
```

---

## Notes for Claude Code

- Always read this file first before making any changes
- Update the "Current Status" checklist as tasks complete
- Update "Key Decisions Made" when anything significant is decided
- The website must be SEO-optimised — every page needs proper meta tags, OG images, and semantic HTML
- Performance matters for SEO — aim for 90+ Lighthouse score
- Mobile-first design — most SMB owners browse on phones
- Blog posts should target specific keywords — check PLAN.md for planned topics
- Keep components modular — pillar pages share the same layout pattern

---

*Last updated: 2026-03-03*
