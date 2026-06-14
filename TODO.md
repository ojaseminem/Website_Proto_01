# Turtle Game Works — TODO

## Launch blockers / soon
- [ ] **Custom domain** — point your paid domain at the Cloudflare Pages project
      (Pages → Custom domains), update `site` in `astro.config.mjs`, the
      `Sitemap:` URL in `public/robots.txt`, and uncomment
      `Strict-Transport-Security` in `public/_headers`.
- [ ] **Real logo files** — save the white turtle logo you supplied into
      `public/assets/logos/`, replacing the placeholders `turtle-mark-white.svg`
      and `lockup-white.svg` (and `public/favicon.svg`). If the file is a PNG,
      keep the same base name (e.g. `turtle-mark-white.png`) and update the
      `src=` references in `Nav.astro`, `Footer.astro`, `HeroTitle.astro`,
      `ClosingCta.astro`, and `BaseLayout.astro`. Transparent, white-on-dark.

## Content (currently placeholder)
- [ ] Hero / featured-title copy + key art (`src/components/scenes/Hero.astro`).
- [ ] Showreel: real trailer `<video>` sources + posters
      (`src/components/scenes/Showreel.astro`) — wire `<video>` in place of the
      poster `<div>` and have the play button start it.
- [ ] Client logos (`src/components/scenes/Clients.astro`).
- [ ] Portfolio entries + art (`src/pages/portfolio.astro`,
      `src/components/scenes/PortfolioTeaser.astro`).
- [ ] Open roles (`src/pages/career.astro`), team stats/values
      (`src/pages/about.astro`), real contact addresses + social URLs
      (`src/pages/contact.astro`, `src/components/Footer.astro`).
- [ ] `public/assets/og-default.png` — 1200×630 social preview image.

## Cinematic polish
- [ ] **True shard-assemble cold open** — needs an SVG of the mark with each
      shell plate as its own `<path>`. Inline it and stagger each plate in
      (replace the focus/scale reveal in `HeroTitle.astro`).
- [ ] Self-host a display font (e.g. Archivo) under `public/fonts/` + `@font-face`
      instead of the system fallback, and keep `font-src 'self'` in `_headers`.

## Contact form (deferred from v1)
- [ ] Build a working form: Cloudflare Pages Function endpoint + **Turnstile**
      CAPTCHA + server-side validation + email delivery (Cloudflare Email
      Routing or a transactional provider). Use the `turnstile-spin` skill.
      Add the Turnstile/script origins to the CSP in `_headers` when you do.

## Cloudflare hardening (post-deploy, dashboard)
- [ ] Turn on **WAF managed rules** and **Bot Fight Mode**.
- [ ] Confirm **Always Use HTTPS** + Automatic HTTPS Rewrites are on.
- [ ] Verify response headers from `_headers` are applied (DevTools → Network).

## QA
- [ ] Lighthouse ≥ 90 (perf/a11y/SEO) — run the `web-perf` skill.
- [ ] Test with OS "Reduce motion" on → confirm static, readable fallback.
- [ ] Cross-browser + mobile pass.
