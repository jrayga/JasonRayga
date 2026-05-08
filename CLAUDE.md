# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio/resume website for Jason Rayga, hosted at www.jrayga.com. Built as a single-page application with anchor-based navigation.

## Build Commands

```bash
npm install       # Install all Grunt dependencies
grunt             # Run full production build pipeline
```

There are no tests configured (`npm test` is a placeholder). `npm audit` runs `ncu && better-npm-audit audit` for dependency checks.

## Build Pipeline (Grunt)

The default `grunt` task runs these steps in order:

1. `useminPrepare` — scans index.html for build blocks
2. `copy` — copies files from `dev/` → `dist/`
3. `concat` — concatenates JS files into `public/min/`
4. `ngAnnotate` — adds Angular DI annotations (must run before uglify)
5. `uglify` — minifies JS into `public/minified/`
6. `cssmin` — minifies CSS into `public/minified/`
7. `usemin` — rewrites script/link tags to point at minified files
8. `cachebreaker` — appends `?v=<hash>` to asset URLs in `dist/index.html`

## Architecture

### Tech Stack
- **AngularJS 1.x** — SPA framework (legacy, not Angular 2+)
- **Bootstrap 5** — responsive layout
- **Grunt** — build automation (GruntFile.js)
- **Leaflet.js** — map widget
- **WOW.js + Animate.css** — scroll-triggered animations

### File Layout

| Path | Purpose |
|------|---------|
| `JS/app.js` | Source AngularJS app — single controller with all scope data |
| `dev/index.html` | Source HTML template (copied to `dist/` during build) |
| `dist/index.html` | Production HTML (has cache-busted asset refs) |
| `dist/main/js/main.min.js` | Minified app JS |
| `public/minified/all.min.css` | Minified combined CSS |
| `partials/` | Legacy HTML fragments (not wired into current build) |
| `GruntFile.js` | Full build configuration |

### Application Structure

There is one AngularJS module (`"module"`) with one controller (`IndexCtrl`). All site content is in `JS/app.js`:

- **Navigation** — `$scope.nav` array drives the top nav links (anchor hrefs like `#intro`, `#about`)
- **Portfolio items** — `$scope.worksImgAndDesc` array; each entry has `title`, `desc`, `img`, `link`, `tag`
- **Scroll** — `$scope.goTo(id)` uses `$anchorScroll` for smooth navigation
- **Footer year** — dynamically set from `new Date().getFullYear()`

The entire page is one `index.html` file. Sections are stacked vertically and revealed by scrolling; there is no client-side routing.

### Deployment

Deployed via GitHub Pages with a custom domain. `CNAME` file contains `www.jrayga.com`. The `dist/` folder is what gets served.
