# Shaan Merchant Portfolio

Static portfolio site built with [Astro](https://astro.build), deployed on Vercel.

## Editing

- **Projects:** `src/data/projects.js`. Copy an entry to add a new project. Each one gets its own page at `/projects/<slug>`.
- **Contact info, tagline, resume link:** `src/data/site.js`
- **Home page text and highlights:** `src/pages/index.astro`
- **Styles:** `src/styles/global.css`
- **Images / videos / resume PDF:** `public/images`, `public/videos`, `public/files`

To update your resume, replace `public/files/Shaan-Merchant-Resume.pdf` with the new file (same name).

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploying

Import this repo at https://vercel.com/new. Vercel detects Astro automatically, no settings needed.
Every push to `main` redeploys the site.
