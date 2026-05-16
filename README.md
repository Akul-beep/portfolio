# Akul Nehra — Portfolio

Next.js portfolio site with a clear narrative: technical work → impact ventures → extracurriculars → experience → about → contact.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content

Update copy and project data in [`lib/content.ts`](lib/content.ts) — no layout changes needed for most updates.

## Deploy

### GitHub Pages (https://akul-beep.github.io/portfolio/)

1. Push to `main` on [Akul-beep/portfolio](https://github.com/Akul-beep/portfolio).
2. In the repo: **Settings → Pages → Build and deployment → Source** → choose **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes automatically.

Local preview of the GitHub Pages build:

```bash
npm run build:gh-pages
npx serve out
```

Then open `http://localhost:3000/portfolio/` (serve serves `out` at root; use the `/portfolio` path if testing basePath).

### Vercel (optional)

Push to GitHub and connect the repo to [Vercel](https://vercel.com) for a root-domain deploy without `/portfolio` base path.

Place `resume.pdf` in the `public/` folder for the resume download links. See [`public/ASSETS_NEEDED.md`](public/ASSETS_NEEDED.md) for the full checklist (screenshots, links to confirm).
