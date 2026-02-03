# Our Journey

A small browser game: a pathway of dates as doors. Open each door to see a memory (photo + optional text). Made to run entirely in the browser so you can host it for free on GitHub Pages.

## What you need to add

1. **Start photo** – `assets/start-photo.jpg` (photo of you two).
2. **Memory photos** – one image per date in `assets/memories/`, with filenames matching the `photo` field in `data.js`.

See **ASSETS_NEEDED.md** for the exact list and naming.

## Edit your dates

Open **data.js** and edit the `dates` array:

- `date` – text shown on the door (e.g. `"15. 3. 2024"`).
- `photo` – path to the image (e.g. `"assets/memories/first-date.jpg"`).
- `text` – short caption under the photo (optional).

Add or remove entries to match your journey.

## Run locally

Open `index.html` in a browser, or use a simple server:

```bash
# Python 3
python3 -m http.server 8000

# Then open http://localhost:8000
```

## Host on GitHub Pages (free)

1. Create a new repository on GitHub.
2. Push this folder (including `index.html`, `data.js`, `game.js`, `styles.css`, and the `assets/` folder with your photos).
3. In the repo: **Settings → Pages → Source**: choose “Deploy from a branch”.
4. Branch: `main` (or `master`), folder: `/ (root)`.
5. Save. After a minute, the site will be at `https://YOUR_USERNAME.github.io/REPO_NAME/`.

No backend or server required.
