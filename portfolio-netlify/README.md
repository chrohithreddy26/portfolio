# Rohith Reddy — Network Engineer Portfolio (static, Netlify-ready)

A React (Vite) single-page portfolio with **no backend**. All content is
bundled into the app, so it deploys to Netlify (or any static host) as-is.
The contact form uses **Netlify Forms** — submissions show up in your Netlify
dashboard under Forms, no server required.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

## Deploy to Netlify

**Option A — drag & drop (fastest):**
1. Run `npm run build` locally.
2. Go to app.netlify.com → "Add new site" → "Deploy manually".
3. Drag the `dist/` folder onto the page. Done.

**Option B — connect a Git repo (auto-deploys on push):**
1. Push this folder to GitHub/GitLab.
2. In Netlify: "Add new site" → "Import from Git" → pick the repo.
3. Netlify reads `netlify.toml` automatically:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy.

## Contact form (Netlify Forms)

The form works automatically once deployed to Netlify — no config needed.
- Submissions appear in your Netlify dashboard → **Forms** → "contact".
- To get email notifications: Netlify dashboard → Forms → Settings &
  notifications → add an email notification.
- The hidden `<form>` in `index.html` is what lets Netlify's build detect the
  form; don't remove it.

Note: the form only works on the deployed Netlify site, not on `localhost`.

## Edit your content

Everything lives in **`src/data/portfolio.js`** — profile, skills, experience,
certifications. Styling is in `src/styles.css`. Add your GitHub/LinkedIn URLs
to the `socials` object and they'll appear in the footer.
