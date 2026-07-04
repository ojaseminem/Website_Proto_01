# Turtle Game Works — Website

Experience-driven studio site for Turtle Game Works: an IP creation company
that also offers full production, live services, co-development and
outsourcing. A companion turtle (the logo mark) swims with you as you scroll.

## Stack
- **Astro 5** — static output, View Transitions, SEO-first
- **GSAP 3.13+** — ScrollTrigger + MotionPathPlugin (fully free)
- **Lenis** — smooth inertial scroll
- Self-hosted fonts (Fontsource: Space Grotesk, Inter) — no CDNs, no tracking

## Develop
```bash
npm install
npm run dev        # http://localhost:4321/Website_Proto_01/
npm run build      # static output -> dist/
npm run preview    # serve the build locally (under the base path)
```

## Architecture notes
- **Base path**: deploys to `https://ojaseminem.github.io/Website_Proto_01/`.
  All internal links go through `withBase()` (`src/lib/url.ts`). If you move
  to a custom domain, update `site`/`base` in `astro.config.mjs` and the
  Sitemap URL in `public/robots.txt`.
- **Themes**: dual light/dark token system in `src/styles/tokens.css`
  (semantic tokens on `html[data-theme]`; no pure white/black). An inline
  head script in `BaseLayout.astro` prevents theme flash.
- **Motion**: `src/scripts/motion.ts` is the single lifecycle owner
  (init on `astro:page-load`, teardown on `astro:before-swap`). The turtle
  path per page is a normalized 0–100 `data-turtle-path` on `<main>`.
  Everything is disabled under `prefers-reduced-motion` and on mobile.
- **Content**: all copy lives in `src/data/*.ts`, flagged `placeholder: true`
  where it needs real replacements (projects, roles, stats, emails, dates).
- **Legal pages**: templates pending counsel review — see the visible note on
  each page.

## Deploy
Pushing to `main` triggers `.github/workflows/deploy.yml` (build + Pages
deploy). One-time setup: repo **Settings → Pages → Source = GitHub Actions**.

## Regenerate brand assets
`node scripts/generate-assets.mjs` rebuilds `public/favicon.svg` and
`public/assets/og/og-default.png` from `src/assets/turtle-mark.svg`.
