/**
 * Every internal link and every `public/` asset reference must go through
 * `withBase` — the site deploys under a GitHub Pages base path
 * (`/Website_Proto_01/`), so raw root-relative URLs 404 in production.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
  return `${BASE}/${path.replace(/^\//, '')}`;
}
