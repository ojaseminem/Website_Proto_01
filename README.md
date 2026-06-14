# Turtle Game Works — Website

A cinematic, scroll-driven studio site. Not a panel-by-panel scroll — the
visitor moves through a sequence of *shots* with fade-to-black cuts, dolly/zoom
moves, and a red "film thread" that draws itself down the page.

## Stack
- **Astro 5** (static output) — multi-page, SEO-friendly, ships minimal JS.
- **GSAP + ScrollTrigger** — scroll-driven camera work.
- **Lenis** — smooth/inertial scroll.
- **Astro View Transitions** — cinematic page-to-page cuts.

## Develop
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output -> dist/
npm run preview    # serve the build locally
```

## How the cinematics work
The engine is declarative — components opt in with data-attributes, so each
page composes its own sequence of shots. See `src/scripts/cinematic.ts`:

| attribute | effect |
|---|---|
| `data-shot="rise\|fade\|focus"` | entrance reveal |
| `data-shot="dolly"` | scrubbed scale-in |
| `data-parallax="0.3"` | scrubbed parallax drift |
| `data-marquee` | auto horizontal drift (duplicate the content) |
| `data-cut` (on a `.scene`) | fade-to-black cut as the scene arrives |

`src/scripts/lenis.ts` boots smooth scroll and syncs it to GSAP's ticker.
Everything is re-initialised on `astro:page-load` and torn down on
`astro:before-swap` (see `src/layouts/BaseLayout.astro`), and **disabled
entirely under `prefers-reduced-motion`** — the site then renders as a plain,
accessible static page.

## Deploy (Cloudflare Pages)
```bash
npm run build
npx wrangler pages deploy dist --project-name turtle-game-works
```
Free `*.pages.dev` URL for v1. Security headers live in `public/_headers`.

## What's next
See [`TODO.md`](./TODO.md) — custom domain, real logos/content, and the
deferred Turnstile contact form.

## Credits
- Scroll-indicator turtle: [Flaticon icon #7335393](https://www.flaticon.com/free-icon/turtle_7335393),
  recolored white. Flaticon's free license **requires attribution** — confirm
  the author credit and add it visibly (e.g. site footer) before public launch.
  See `public/assets/logos/scroll-turtle.png`.
