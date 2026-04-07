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

Upload the `dist/` folder to **Netlify**, **Cloudflare Pages**, or enable **GitHub Pages** for your repo. For GitHub Pages with a project URL, set `base` in `vite.config.js` (e.g. `base: '/your-repo-name/'`).

## Customize

- **Products & images:** edit `src/data/products.js` — replace `image` URLs with real photos (or put files in `public/products/` and use paths like `/products/mint.jpg`).
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
