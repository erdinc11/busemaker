# Busem Aker Artist Website

Dark, cinematic single-artist site for Busem Aker, built with Next.js static export.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production export

```bash
npm run lint
npm run build
```

The static site is written to `out/`.

## GitHub Pages

The site is configured for the `busemaker` project repository and deploys automatically from `main` via GitHub Actions.

## Updating content and assets

- Edit artist copy, releases, shows, videos, social links and booking email in `data/siteContent.ts`.
- Replace the temporary files in `public/reference/` with the generated Busem-specific assets, keeping the configured filenames or updating the paths in `data/siteContent.ts`.
- The full image-generation prompt pack is in `PROMPTS.md`.
- Platform and social links are intentionally omitted until official URLs are supplied.
- The Contact route remains booking-only until a confirmed booking email is added.
