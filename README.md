# Face Crease Police — Website

Rebuild of [facecreasepolice.com](https://facecreasepolice.com), a medically-led facial aesthetics
clinic in Hoylake, Wirral. Built with [Astro](https://astro.build) + Tailwind CSS: static-generated,
close to zero client-side JavaScript, and built around search and AI-answer-engine visibility from
the ground up.

## Stack & why

- **Astro (static output)** — every page pre-rendered to plain HTML. Near-perfect Core Web Vitals,
  no framework tax, trivially cheap and fast to host anywhere (Vercel, Netlify, Cloudflare Pages, or
  any static file host — no server required).
- **Tailwind CSS** — utility-first styling, no separate design system to maintain.
- **Content as data** (`src/data/*.ts`) — treatments, goals and FAQs are plain typed arrays. Add a
  treatment or FAQ by editing data, not markup; pages and schema are generated from it automatically.

## SEO & GEO (Generative Engine Optimization)

- Per-page `<title>`, meta description, canonical URL, Open Graph & Twitter cards (`Seo.astro`).
- Structured data on every page: `MedicalBusiness`, `BreadcrumbList`, `FAQPage`, and
  `MedicalProcedure`/`MedicalTherapy` for each treatment (`src/data/schema.ts`).
- `/sitemap.xml` generated from the same route data used to build the pages (no drift possible).
- `/robots.txt` explicitly allows AI/answer-engine crawlers (GPTBot, ClaudeBot, PerplexityBot,
  Google-Extended, etc.) alongside standard search bots.
- `/llms.txt` — a plain-language summary of the business, treatments and pages for AI assistants
  answering questions about the clinic.
- Content is written "answer-first": every treatment page opens with a direct, quotable definition
  before going into detail — the format AI answer engines tend to lift directly.

## Compliance notes (important — read before editing copy)

Anti-wrinkle treatment (and any other prescription-only medicine) is **never** priced, discounted or
promoted on this site — only described factually, with a note that it requires a prescriber
consultation. This matches UK ASA/CAP advertising rules for prescription-only medicines. Keep new
copy for POM treatments (`isPOM: true` in `src/data/treatments.ts`) informational, not promotional.

## Getting started

```bash
npm install
npm run dev        # http://localhost:4321
npm run build       # type-check + production build to dist/
npm run preview     # serve the production build locally
```

## Editing content

- **Treatments** — `src/data/treatments.ts`
- **Goals (Refresh/Refine/Relax/Renew)** — `src/data/goals.ts`
- **FAQs** — `src/data/faqs.ts`
- **Business info, social links, nav** — `src/data/site.ts`

Every treatment/goal automatically gets its own page, sitemap entry and schema — no need to touch
`src/pages/` for routine content changes.

## Deployment

Static output (`dist/`) — deploy to Vercel, Netlify, Cloudflare Pages, or any static host. No
environment variables or backend are required for the current build.

## Known follow-ups / things to confirm before go-live

- [ ] Confirm full postal address (currently `Hoylake, Wirral` only) and add exact `PostalAddress` +
      Google Business Profile link.
- [ ] Add a phone number if the clinic takes calls/texts (`src/data/site.ts`).
- [ ] Confirm/add the real Instagram handle in `src/data/site.ts` (`social.instagram`).
- [ ] Replace the generated placeholder Open Graph image (`public/og-image.jpg`) with real brand
      photography once available.
- [ ] Add a genuine before/after results gallery to `/results/` once client consent is in place.
- [ ] The contact form currently opens the visitor's email client (`mailto:`, zero backend cost). If
      inbox-direct submissions are wanted, wire it to a form service (e.g. Formspree, or a small
      Vercel/Netlify serverless function).
- [ ] Confirm CQC/JCCP/Save Face or other professional registration details to add to `/about/` for
      extra trust signalling, if applicable.
