<div align="center">

# RKA Studio

### A cinematic, single-page portfolio for a creative branding agency.

Built with React, TypeScript, and Tailwind CSS — no animation library, no bloat.
Every interaction on this site, including the custom cursor, is hand-rolled vanilla JS.

[![React](https://img.shields.io/badge/React-19-149ECA?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)

</div>

---

## About

RKA Studio is a single-page site built for a branding & creative agency —
five sections (Hero, Work, Services, About, Contact), a custom animated
cursor, and editorial-style motion throughout. It's designed to feel
cinematic without leaning on GSAP or any other animation dependency:
every transition here is plain CSS keyframes, `IntersectionObserver`, and
a `requestAnimationFrame` loop or two.

## Features

- 🎯 **Custom cursor** — a small dot that smoothly trails the pointer and
  inverts colour (`mix-blend-mode: difference`) over buttons and links, so
  text underneath always stays legible
- 🖼️ **Work grid** — project cards with a hover-reveal arrow badge that
  links out to each live project
- 📰 **News-ticker marquee** — an infinite right-to-left scroll, reused for
  both the oversized background heading and the client-name strip in About
- 🎬 **Cursor-following image preview** — hovering a service in the list
  pops a photo preview that trails the pointer, swapping per row
- 📈 **Scroll-reveal animations** — sections fade/slide in the first time
  they enter the viewport, no library required
- 📱 **Fully responsive** — custom cursor and hover effects gracefully
  disable on touch devices via `(hover: hover) and (pointer: fine)`
- ✉️ **EmailJS-ready contact form** *(in progress)*

## Tech Stack

| | |
|---|---|
| **Framework** | React 19 + TypeScript |
| **Build tool** | Vite |
| **Styling** | Tailwind CSS v4 (CSS-first `@theme` config, no config file) |
| **Animation** | Native CSS keyframes + `requestAnimationFrame` — zero animation libraries |
| **Forms** | EmailJS |
| **Fonts** | Archivo (display), Inter (body), Instrument Serif (italic accent) |


## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Clone the repo
git clone https://github.com/<your-username>/rka-studio.git
cd rka-studio

# Install dependencies
npm install

# Add your images (see Assets below), then run the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it.

### Build for production

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Assets

This repo ships without real photography. Drop your images into the paths
listed in [Project Structure](#project-structure) above, matching the
filenames — or edit the `import` statements at the top of `Work.tsx`,
`Services.tsx`, and `About.tsx` to match whatever you name them.

## Design Tokens

Colours, fonts, and the fade-up animation are all defined once in
`src/index.css` under `@theme`, Tailwind v4's CSS-first config. No
`tailwind.config.js` needed — change a value there and it updates
everywhere it's used.

| Token | Value | Used for |
|---|---|---|
| `--color-ink` | `#0a0a0b` | Page background |
| `--color-paper` | `#f5f4f2` | Primary text |
| `--color-signal` | `#ff5a1f` | Orange accent — labels, CTAs, cursor |

## License

This project was built as a freelance commission for RKA Studio. All
brand assets, copy, and photography are property of the client. The
code structure itself is free to reference for your own projects.

---

<div align="center">
<sub>Built with care — no bloat, no unnecessary dependencies.</sub>
</div>