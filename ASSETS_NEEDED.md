# Assets You Need to Upload

Put these files in your project so “Our Journey” shows your photos. Paths and doors are drawn with CSS (no extra images needed).

---

## 1. Start screen photo (you two together)

- **File:** `assets/start-photo.jpg`
- **What:** A photo of you and your girlfriend for the start screen.
- **Format:** `.jpg` or `.png`
- **Suggested size:** At least 400×400 px (square or portrait works; it’s shown in a circle).

If this file is missing, the start screen will show a placeholder.

---

## 2. Memory photos (one per date)

- **Folder:** `assets/memories/`
- **What:** One image per special date. When you open a door, this photo is shown.
- **Format:** `.jpg` or `.png`
- **Suggested size:** At least 600×450 px (roughly 4:3).

**Filenames:** Use the same names as in `data.js` under each date’s `photo` field.

Example from `data.js`:

```js
{
  id: 'first-date',
  date: '15. 3. 2024',
  photo: 'assets/memories/first-date.jpg',   // ← put first-date.jpg in assets/memories/
  text: 'Our first date.'
},
{
  id: 'trip',
  date: '20. 7. 2024',
  photo: 'assets/memories/trip.jpg',         // ← put trip.jpg in assets/memories/
  text: 'Best trip together.'
}
```

So you need:

- `assets/memories/first-date.jpg`
- `assets/memories/trip.jpg`
- `assets/memories/anniversary.jpg`
- … and one file per extra date you add in `data.js`.

---

## Summary

| Asset              | Path                         | Purpose                    |
|-------------------|------------------------------|----------------------------|
| Start photo       | `assets/start-photo.jpg`      | Photo of you two at start  |
| Memory for date 1 | `assets/memories/first-date.jpg` | Photo behind first door |
| Memory for date 2 | `assets/memories/trip.jpg`    | Photo behind second door   |
| Memory for date 3 | `assets/memories/anniversary.jpg` | Photo behind third door |
| More dates        | `assets/memories/your-name.jpg` | Add one file per date in `data.js` |

No other images are required; the pathway and doors are drawn in the browser.
