// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site: https://ojaseminem.github.io/Website_Proto_01/
// If this ever moves to a custom domain, update `site` and drop `base`.
export default defineConfig({
  site: 'https://ojaseminem.github.io',
  base: '/Website_Proto_01',
  trailingSlash: 'ignore',
  output: 'static',
  integrations: [sitemap()],
  // View Transitions block pointer input while the next page is fetched —
  // prefetching every internal link as it enters the viewport keeps that
  // window near zero, so the nav never feels dead after a click.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
