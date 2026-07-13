# Md Farhamdur Reza — Academic Website

A dependency-free academic portfolio hosted on GitHub Pages. The site uses plain
HTML, CSS, and JavaScript; no build step is required.

## Local preview

From the repository root, run:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`. Use an HTTP server rather than opening the
HTML files directly so paths and browser behavior match GitHub Pages.

## Content updates

- Treat `private-input/updated-resume-source.pdf` as the primary factual source.
- Use the supplied Scholar export for publication metadata.
- Keep submitted and under-review work explicitly labeled.
- Do not publish citation counts or any material from `private-input/`.
- Update publication status consistently on Home, Research, Publications, and News.
- Keep the public CV at `docs/resume.pdf`.
- Add new visual rules to `assets/css/styles.css` and shared behavior to
  `assets/js/app.js`; avoid inline styles and production dependencies.

Before publishing, follow the verification checklist in `AGENTS.md` and confirm
that canonical URLs still use the intended public origin.
