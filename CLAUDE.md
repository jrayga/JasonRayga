# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/resume website for Jason Rayga, hosted at www.jrayga.com. A single-page application with anchor-based navigation, built with vanilla HTML, CSS, and JavaScript — no frameworks, no build pipeline.

## Development

No build step required. Open `index.html` in a browser or serve with any static file server:

```bash
# VS Code Live Server (recommended)
# Right-click index.html → "Open with Live Server"

# Or any static server
npx serve .
python -m http.server
```

## Architecture

### Tech Stack
- **Vanilla HTML/CSS/JS** — no frameworks, no build tools
- **Leaflet.js** — map widget (CDN)
- **FontAwesome 6** — icons (CDN)
- **Poppins + Space Mono** — fonts (Google Fonts CDN)
- **Intersection Observer API** — scroll-triggered animations (native)

### File Layout

| Path | Purpose |
|------|---------|
| `index.html` | The entire site — all sections in one file |
| `assets/css/style.css` | All custom styles — dark theme, layout, animations |
| `assets/js/main.js` | Portfolio data array + all interactivity |
| `assets/img/` | Project images and profile photo |
| `assets/JasonRayga.pdf` | Resume download |
| `CNAME` | GitHub Pages custom domain (`www.jrayga.com`) |

### Application Structure

**`assets/js/main.js`** is a set of self-contained init functions called on `DOMContentLoaded`:

- **`PORTFOLIO` array** — all portfolio project data; `renderPortfolio()` renders cards into `#portfolio-grid`
- **`initNavbar()`** — scroll shadow on `#navbar`, mobile hamburger toggle with body scroll lock
- **`initReveal()`** — Intersection Observer adds `.visible` to `.reveal` elements as they enter the viewport
- **`initSkillBars()`** — Intersection Observer animates `.skill-fill` widths from each bar's `data-level` attribute
- **`initMap()`** — Leaflet map centred on Manila, Philippines
- **`setYear()`** — writes current year into `#year` span

**`assets/css/style.css`** uses CSS custom properties on `:root` (`--bg`, `--accent`, `--text-dim`, etc.) for the dark navy + teal colour scheme. No preprocessor needed.

### Sections

`index.html` has five sections stacked vertically (`#hero`, `#about`, `#skills`, `#portfolio`, `#services`), followed by the Leaflet `#map` div and `<footer>`. No client-side routing.

### Deployment

GitHub Pages serves the `master` branch root. `CNAME` maps `www.jrayga.com` to the Pages URL.
