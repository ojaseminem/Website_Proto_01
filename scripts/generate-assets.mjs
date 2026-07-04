/**
 * One-shot asset generator: favicon.svg + og-default.png from the logo mark.
 * Run: node scripts/generate-assets.mjs   (requires devDep `sharp`)
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import sharp from 'sharp';

const mark = readFileSync('src/assets/turtle-mark.svg', 'utf8');
const inner = mark
  .replace(/^<svg[^>]*>/, '')
  .replace(/<\/svg>$/, '')
  .replaceAll('currentColor', '#e9f1ee');

// --- favicon: turtle on rounded abyss tile --------------------------------
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080">
<rect width="1080" height="1080" rx="200" fill="#0a1c26"/>
<g transform="translate(108 108) scale(0.8)">${inner}</g>
</svg>`;
writeFileSync('public/favicon.svg', favicon);

// --- og-default.png: 1200x630 abyss gradient + mark + wordmark ------------
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
<defs>
  <linearGradient id="sea" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#0d2836"/>
    <stop offset="0.6" stop-color="#0a1c26"/>
    <stop offset="1" stop-color="#06131b"/>
  </linearGradient>
  <linearGradient id="ray" x1="0" y1="0" x2="0.3" y2="1">
    <stop offset="0" stop-color="#3fc9be" stop-opacity="0.22"/>
    <stop offset="1" stop-color="#3fc9be" stop-opacity="0"/>
  </linearGradient>
</defs>
<rect width="1200" height="630" fill="url(#sea)"/>
<polygon points="640,0 900,0 620,630 460,630" fill="url(#ray)"/>
<polygon points="880,0 1040,0 840,630 740,630" fill="url(#ray)"/>
<g transform="translate(90 120) scale(0.36)">${inner}</g>
<text x="560" y="300" font-family="Arial, sans-serif" font-size="64" font-weight="bold" fill="#e9f1ee" letter-spacing="4">TURTLE</text>
<text x="560" y="380" font-family="Arial, sans-serif" font-size="64" font-weight="bold" fill="#e9f1ee" letter-spacing="4">GAME WORKS</text>
<text x="562" y="440" font-family="Arial, sans-serif" font-size="26" fill="#93aeaa" letter-spacing="2">Worlds worth returning to.</text>
</svg>`;

mkdirSync('public/assets/og', { recursive: true });
await sharp(Buffer.from(og)).png().toFile('public/assets/og/og-default.png');
console.log('favicon.svg + og-default.png generated');
