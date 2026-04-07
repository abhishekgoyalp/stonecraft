# StoneCraft Sandstone — React site

A marketing site for a sandstone business: **React + Vite**, product grid with **per-product images** (placeholders via [placehold.co](https://placehold.co)), **no e-commerce**, **contact form** via free [FormSubmit](https://formsubmit.co).

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Build for free hosting

```bash
npm run build
```

Upload the **`dist/` folder contents** (not the repo root) to **Netlify** or **Cloudflare Pages**, or use **GitHub Pages** (see below).

### GitHub Pages (fix for 404 on `/assets/...`)

Project sites live at `https://<user>.github.io/<repo>/`. Vite’s default `base: "/"` makes the browser load `https://<user>.github.io/assets/...` instead of `.../repo/assets/...` → **404**.

This repo sets `base: "./"` in `vite.config.js` so JS/CSS resolve under your repo path.

**Deploy options**

1. **GitHub Actions (recommended):** push to `main`. In the repo go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**. The workflow `.github/workflows/deploy-github-pages.yml` builds and publishes `dist/`.

2. **Manual:** run `npm run build`, then upload **everything inside `dist/`** to the branch/folder GitHub Pages serves (often `gh-pages` root or `/docs` — not the unbuilt `src/`).

If you use a **username.github.io** repo (site at domain root), you can set `base: "/"` in `vite.config.js` instead.

## Customize

- **Products & images:** edit `src/data/products.js` — replace `image` URLs with real photos (or put files in `public/products/` and use paths like `./products/mint.jpg` or `products/mint.jpg` so they work with `base: "./"`).
- **Contact email:** in `src/components/Contact.jsx`, set `FORM_ACTION` to `https://formsubmit.co/your@email.com`.
- **Branding / copy:** `src/components/*.jsx` and `src/App.css`.

## Folder structure

```text
stones/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── index.css
    ├── data/
    │   └── products.js
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Products.jsx
        ├── Services.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

Future mobile apps can reuse `src/data/products.js` or the same JSON shape served from an API.
