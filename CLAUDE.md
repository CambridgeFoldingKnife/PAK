# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server on http://localhost:5173
npm run build    # production build → dist/
```

No lint, typecheck, or test scripts exist in `package.json`.

## Tech Stack

React 18 + Vite 6 + TypeScript + Tailwind CSS v4. Animation: **GSAP** (`gsap` + `@gsap/react` + `lenis` for smooth scroll). Package manager is **npm** in practice (`package-lock.json` is gitignored; `pnpm-workspace.yaml` also exists but is not used for installs).

## Path Alias

`@` → `./src` (configured in `vite.config.ts` `resolve.alias`).

## Tailwind v4 — Different from v3

- `@tailwindcss/vite` plugin in `vite.config.ts` handles everything. **No `tailwind.config.js` file exists** and **PostCSS is not used for Tailwind** (only for autoprefixer in `postcss.config.mjs`).
- `src/styles/tailwind.css` uses `@import 'tailwindcss' source(none)` to disable automatic scanning, then `@source` to explicitly scan `src/**/*.{js,ts,jsx,tsx}`.
- Theme tokens (colors, spacing, fonts, radii) are CSS variables defined in `src/styles/theme.css`, bridged to Tailwind via `@theme inline`.
- Light/dark mode: CSS variables change under `.dark` class on `<html>`.

## Entry & Routing

- Entry: `index.html` → `/src/main.tsx` → `BrowserRouter` with `Routes`.
- **Code splitting**: `main.tsx` lazy-loads every page via `React.lazy` wrapped in `<Suspense>` (fallback = `PageLoader`). Each route is an independent chunk, loaded on demand.
- `main.tsx` also mounts global singletons: `ScrollToTop` (scroll to top on route change + `history.scrollRestoration = "manual"`), `SmoothScroll` (global Lenis), `CustomCursor`.

Routes:

| Path | Page | Component |
| --- | --- | --- |
| `/` | Home (landing) | `App.tsx` |
| `/course` | Course detail / 关于AK | `CoursePage.tsx` |
| `/course/part1` | Course Part 1 | `Part1Page.tsx` |
| `/course/part2` | Course Part 2 | `Part2Page.tsx` |
| `/pak-union` | Alumni / 治疗师目录 | `AlumniPage.tsx` |
| `/faq` | FAQ page | `FaqPage.tsx` |
| `/contact` | Contact form | `ContactPage.tsx` |
| `/research` | Literature | `LiteraturePage.tsx` |
| `/student-scenes` | 学员课堂 | `StudentScenesPage.tsx` |
| `/course-center` | 课程中心 | `CourseCenterPage.tsx` |
| `/knowledge` | AK知识库 | `KnowledgePage.tsx` |

(`/intro` was removed — navigation "关于AK" maps to `/course`, see `Navbar.tsx` links.)

## Architecture

### Pages (`src/app/`)

Single-file React components at the top of `src/app/`. Most are self-contained SFCs. `App.tsx` and `CoursePage.tsx` are the largest, each with a root-level `useGSAP` block driving scroll/entrance animations.

### Components (`src/app/components/`)

- `ui/` — 40+ shadcn/ui components (Radix UI primitives wrapped with styling). Source-in-repo.
- `alumni/`, `faq/`, `figma/` — as before.
- Animation utilities:
  - `ScrollReveal.tsx` — framer-motion reveal-on-scroll wrapper (used by pages without GSAP).
  - `CustomCursor.tsx` — global trailing cursor ring (mounted in `main.tsx`).
  - `Magnetic.tsx` — magnetic-hover wrapper for CTA buttons (plain `useEffect` pattern — **the reference implementation for hover effects**).
  - `Marquee.tsx` — infinite keyword marquee (uses `useGSAP` for a direct loop tween).
  - `SmoothScroll.tsx` — global Lenis smooth scroll (mounted in `main.tsx`).

The `cn()` utility (from `@/lib/utils` or similar) combines `tailwind-merge`, `clsx`, and `cva` — the standard shadcn/ui pattern.

### Data Layer (`src/data/`)

Static TypeScript modules — no API calls, no database. Includes `alumni.ts`, `faq.ts` (aggregates `faq-*.ts` category files), `faq-types.ts`. Content is also duplicated inline in some page components (e.g. `CoursePage.tsx` has large inline arrays).

### Styles (`src/styles/`)

CSS loading chain: `index.css` → imports `fonts.css`, `tailwind.css`, `theme.css`. `index.css` also has the recommended **Lenis** CSS.

**Fonts** (in `fonts.css`): 思源宋体 `Noto Serif SC` for headings + 思源黑体 `Noto Sans SC` for body, loaded via `fonts.loli.net` (Google Fonts China mirror — do not revert to `fonts.googleapis.com`, it's slow/blocked in mainland China). Applied per-element via Tailwind arbitrary classes `font-['Noto_Serif_SC',serif]` / `font-['Noto_Sans_SC',sans-serif]`.

## GSAP Conventions — READ BEFORE WRITING ANIMATIONS

GSAP + ScrollTrigger + Lenis are installed and used across pages. Two hard rules:

1. **Scroll / entrance animations** → use `useGSAP(() => {...}, { scope: ref })` with direct `gsap.from/to` + `scrollTrigger` config. **This works.** Register plugins at module top: `gsap.registerPlugin(useGSAP, ScrollTrigger)`.

2. **Hover / event-driven effects (mousemove, click, etc.) → use plain `useEffect` with `addEventListener` + `gsap.to`, and remove listeners in cleanup.** ⚠️ **Do NOT use `useGSAP` + `contextSafe()` / `context.add()` for event listeners** — in this environment the useGSAP context is reverted immediately after mount, which silently removes the listeners (no console errors, hover effects just never fire). Reference: `src/app/components/Magnetic.tsx` and the moments-card effect in `StudentScenesPage.tsx`.

Additional conventions:
- All animations respect `prefers-reduced-motion`: guard with `if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return`.
- `data-count` + `data-suffix` attributes drive number count-up animations (see `App.tsx` / `CoursePage.tsx`).
- Debugging GSAP: after dispatching events / scrolling, read `getComputedStyle` **after a tick** (animations start on the next RAF — reading synchronously shows the pre-animation value).

## Figma Asset Resolver

A custom Vite plugin (`figmaAssetResolver()` in `vite.config.ts`) resolves `figma:asset/<filename>` import paths to `src/assets/<filename>`. This is a Figma export artifact — do not remove it unless removing all `figma:asset/` imports.

## Git

Two remotes: `gitee` (https://gitee.com/feifei-001/pakfront.git) and `github` (https://github.com/CambridgeFoldingKnife/PAK.git). Current dev branch: `feature-web2` (tracks `github/feature-web2`). Push to GitHub with `git push`, PRs via `gh pr create`.

## Common Gotchas

- **HMR not reliable**: If styles break or the page looks broken, hard-refresh (`Ctrl+Shift+R`) or restart the dev server. Do not assume a style change is wrong until you've ruled out stale HMR.
- **Lazy-loaded routes**: editing a page triggers HMR; a full reload may be needed to pick up `main.tsx` route changes.
- **`guidelines/Guidelines.md`** is a placeholder template from Figma export — not active project instructions.
- **`ATTRIBUTIONS.md`** documents shadcn/ui and Unsplash licensing for Figma-exported assets.
