// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` once the custom domain is wired up (see TODO.md).
export default defineConfig({
  site: 'https://turtle-game-works.pages.dev',
  output: 'static',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'never',
  },
});
