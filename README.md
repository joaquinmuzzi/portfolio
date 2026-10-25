# Portfolio

Personal portfolio of Joaquín Muzzi, a backend developer from Buenos Aires.
Live at https://joaquinmuzzi.github.io/portfolio/

Plain HTML, CSS and JavaScript, no build step. English and Spanish, chosen from the browser language with a switch in the top bar.

## Edit

- Texts and projects: the `TEXT`, `PROJECTS` and `FAQ` objects at the top of `script.js` (each has an `en` and an `es` version).
- Look: `style.css`.
- Résumé PDFs: `assets/cv-en.pdf` and `assets/cv-es.pdf`. They are generated from `assets/cv-src/build_cv.py`;
  run `assets/cv-src/export_pdf.ps1` on Windows with Edge installed to rebuild them.

## Run locally

```bash
python -m http.server 8000
```

Then open http://localhost:8000.
