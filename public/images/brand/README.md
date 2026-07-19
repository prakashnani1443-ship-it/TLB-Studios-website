# brand

Logo marks, favicon set, and Open Graph / Twitter share image.

| File | Purpose |
|---|---|
| `og-image.png` | 1200×630 social share image, wired into `openGraph.images` / `twitter.images` in `src/app/layout.tsx` and `src/app/work/[slug]/page.tsx` |
| `../../favicon.ico`, `../../icon-192.png`, `../../icon-512.png`, `../../apple-touch-icon.png` | Favicon / app icon set (in `public/` directly, per platform convention), wired into `metadata.icons` in `src/app/layout.tsx` |

All of the above are generated — not hand-drawn or sourced from stock/external
logo files — via `scripts/generate-brand-assets.mjs`, which renders a "TLB"
lettermark and the OG composition from the site's own color tokens using
Next's bundled `next/og` (satori + resvg). Re-run
`node scripts/generate-brand-assets.mjs` any time to regenerate all five
files after editing that script.

The site still uses a text wordmark in the navbar/footer — no `logo.svg`
exists yet. Swap in a real logo file there whenever one exists; it doesn't
feed into the generator above.
