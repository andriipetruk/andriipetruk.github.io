# andriipetruk.com

Personal site of Andrii Petruk — Systems Researcher · Infrastructure Architect · AI Systems Builder.

Built with Next.js (App Router) and statically exported. Deployed to GitHub Pages
on every push to `main` via the workflow in `.github/workflows/deploy.yml`.

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build

```bash
npm run build        # produces ./out
```

## Deploy

Push to `main`. GitHub Actions builds and deploys to GitHub Pages.
GitHub Pages source must be set to **GitHub Actions**
(Settings → Pages → Source).

The custom domain (`andriipetruk.com`) is configured via `CNAME` in `public/`.
