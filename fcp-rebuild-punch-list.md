# Face Crease Police — Rebuild Punch List

**Live preview:** https://facepolice-git-claude-website-r-5be9b4-paul-mcwilliams-projects.vercel.app
**PR:** https://github.com/mcfearless75/Facepolice/pull/1 (draft)
**Branch:** `claude/website-rebuild-seo-mc2sp8`
**Last updated:** 13 Sept 2026

---

## ✅ Done

### Platform
- Rebuilt off GoDaddy on Astro (static-generated, near-zero JS) — fast, cheap to host, no CMS/DB attack surface
- Deployed to Vercel, auto-builds on every push to this branch
- 21 pages: home, 8 individual treatment pages, 4 treatment-by-goal pages, about, results, FAQs, contact, privacy policy, 404

### Content
- Full copy for every page, written answer-first (see GEO below)
- Content lives as typed data (`src/data/*.ts`) — adding a treatment/FAQ is a data edit, not a template edit
- UK ad-compliance safe: anti-wrinkle (POM) copy carries no pricing/promotional language, per ASA/CAP rules

### SEO
- Per-page title/description/canonical, Open Graph + Twitter cards
- Structured data: `MedicalBusiness`, `BreadcrumbList`, `FAQPage`, `MedicalProcedure`/`MedicalTherapy` per treatment
- Self-generating `/sitemap.xml` (can't drift out of sync with actual routes)

### GEO (AI answer engines — ChatGPT, Perplexity, Google AI Overviews, etc.)
- `/llms.txt` — plain-language business/treatment summary for AI assistants
- `robots.txt` explicitly welcomes AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.)
- Answer-first copy pattern throughout — the format these engines tend to lift directly
- See "Outstanding — off-site GEO" below for the Reddit/YouTube/GBP plan discussed

### Branding & images
- Real logo (the actual badge/wings crest) now used everywhere — header, footer, favicon, OG image
- Real clinic photography (Jo, treatment room) on homepage hero, About page, and injectable treatment pages
- Real before/after gallery on Results page (4 clean images; 2 with baked-in text-overlay branding dropped as looking dated at gallery size)
- Real supplier/device logos: Dermalux (LED page), SkinPen/Crown Aesthetics (micro-needling page)
- Real accreditation badges in footer: NMC, Hamilton Fraser Cosmetic Insurance, PolicyBee, VTCT
- All images optimised for web (2.4MB logo → 51KB, photos compressed) — full-res originals kept in `public/images/` for print/social use

### Design
- Font: Bodoni Moda (headlines, distinctive high-fashion serif) + Manrope (body — swapped off Inter, which is the default in every AI page builder)
- Colour: deep petrol-teal + warm copper accent — pulled off the generic "navy + pale gold" template default and tied to the real logo's actual colour instead
- Motion: scroll-triggered reveals, staggered hero entrance, hover lift/scale/shadow on every card/button/link, native page-transition animation between routes (Astro View Transitions)
- Mobile hero: image displays first, copy follows on scroll

---

## 🟡 Outstanding — needs your/Jo's input

- [ ] **Full postal address** — site currently only shows "Hoylake, Wirral"
- [ ] **Phone number** — if Jo takes calls/texts, add to `src/data/site.ts`
- [ ] **Real Instagram handle** — placeholder is empty
- [ ] **CryoPen / mole screening** — parked per your call; scraped assets show these are real services not currently on the site. Revisit if you want them added as proper pages
- [ ] **Contact form backend** — currently opens the visitor's email client (`mailto:`, zero cost, works everywhere). Fine to launch with; upgrade later if you want submissions landing straight in an inbox
- [ ] **Domain cutover** — point facecreasepolice.com DNS at this once you're happy, off GoDaddy for good

## 🟡 Outstanding — off-site GEO plan (discussed, not yet built)

Two-lane plan from the "OpenAI/LLM" conversation:

| # | What | Who | Status |
|---|---|---|---|
| 1 | Google Business Profile — fully claim/optimise | You/Jo (I can write the copy) | Not started — highest ROI, do this regardless of AI angle |
| 2 | Save Face / JCCP register + local directories | You (I can draft profiles) | Not started |
| 3 | YouTube — short explainer videos, real transcripts | Jo on camera, me on scripts | Not started |
| 4 | Reddit — Jo genuinely answering in r/wirral, skincare subs (real account only, never scripted/fake) | Jo, directly | Not started |
| 5 | Expanded long-tail FAQ/blog content | Me | Not started |

Say the word on #1 and #5 — both are pure content, I can start any time.

---

## Notes for whoever's driving the laptop session

- Stay on branch `claude/website-rebuild-seo-mc2sp8` and push there — everything lands on PR #1
- `npm run dev` to run locally, `npm run build` to type-check + build
- Images live in `public/images/` — `site/` subfolder has the resized/optimised versions actually used on pages; root has full-res originals scraped from the old site
- See `README.md` in repo root for the fuller technical writeup

---

_This file lives in the repo root so it travels with `git pull`/`git push` — update it as items get ticked off rather than starting a new one._
