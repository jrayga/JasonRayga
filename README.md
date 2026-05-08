# Jason Rayga — Portfolio

Personal portfolio and resume website, live at [www.jrayga.com](https://www.jrayga.com).

## Tech

- Vanilla HTML, CSS, and JavaScript — no frameworks or build tools
- [Leaflet.js](https://leafletjs.com/) for the interactive map
- [FontAwesome 6](https://fontawesome.com/) for icons
- [Poppins](https://fonts.google.com/specimen/Poppins) + [Space Mono](https://fonts.google.com/specimen/Space+Mono) from Google Fonts
- Hosted on GitHub Pages with a custom domain

## Structure

```
assets/
  css/style.css     Custom styles (dark navy + teal theme)
  js/main.js        Portfolio data and all interactivity
  img/              Project images and profile photo
  JasonRayga.pdf    Resume
index.html          The entire site
CNAME               GitHub Pages custom domain
```

## Running locally

Open `index.html` directly in a browser, or serve with a static server for full path resolution:

```bash
npx serve .
# or
python -m http.server
```
