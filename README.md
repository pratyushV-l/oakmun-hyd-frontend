# Oakridge MUN — public front-end copy

This project is a local, runnable capture of the HTML, client-side JavaScript, images, videos, PDFs, and other assets publicly served at `https://oakridgemun.in/` on 16 August 2026. It is not the original development repository.

## Run locally

```bash
npm install
npm run dev
```

Open the local address printed by Vite (normally `http://127.0.0.1:5173`).

## Build

```bash
npm run build
npm run preview
```

## Notes

- The public pages, linked site assets, PDFs, and background video are included.
- The site’s Lenis scrolling script is vendored in `vendor/lenis.min.js` so the principal front-end behavior does not rely on that CDN.
- Google Fonts, Cloudflare analytics, external forms, and the public QR lookup service are external integrations. They remain external because their original servers control those services.
- Source code, environment variables, deployment configuration, databases, and other server-side components are not available from the public website and are not included here.
