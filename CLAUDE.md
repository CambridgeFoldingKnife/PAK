# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server on http://localhost:5173
npm run build    # production build → dist/
```

No lint, typecheck, or test scripts exist in `package.json`.

## Tech Stack

React 18 + Vite 6 + TypeScript + Tailwind CSS v4. Package manager is pnpm (see `pnpm-workspace.yaml` and `pnpm.overrides` in `package.json`).

## Path Alias

`@` → `./src` (configured in `vite.config.ts` `resolve.alias`).

## Tailwind v4 — Different from v3

- `@tailwindcss/vite` plugin in `vite.config.ts` handles everything. **No `tailwind.config.js` file exists** and **PostCSS is not used for Tailwind** (only for autoprefixer in `postcss.config.mjs`).
- `src/styles/tailwind.css` uses `@import 'tailwindcss' source(none)` to disable automatic scanning, then `@source` to explicitly scan `src/**/*.{js,ts,jsx,tsx}`.
- Theme tokens (colors, spacing, fonts, radii) are CSS variables defined in `src/styles/theme.css`, bridged to Tailwind via `@theme inline`.
- Light/dark mode: CSS variables change under `.dark` class on `<html>`.

## Entry & Routing

- Entry: `index.html` → `/src/main.tsx` → `BrowserRouter` with `Routes`.
- Routes:

| Path | Page | Component |
| --- | --- | --- |
| `/` | Home (landing) | `App.tsx` |
| `/course` | Course detail | `CoursePage.tsx` |
| `/course/part1` | Course Part 1 | `Part1Page.tsx` |
| `/course/part2` | Course Part 2 | `Part2Page.tsx` |
| `/intro` | Course intro | `IntroPage.tsx` |
| `/pak-union` | Alumni list | `AlumniPage.tsx` |
| `/faq` | FAQ page | `FaqPage.tsx` |
| `/contact` | Contact form | `ContactPage.tsx` |

## Architecture

### Pages (`src/app/`)

All page components are single-file React components at the top of `src/app/`. Most are self-contained SFCs without extracted sub-components. `App.tsx` is the largest (~16KB) — it contains the landing page with Navbar, Hero, course sections, instructor section, and Footer all inline.

### Design System & Components (`src/app/components/`)

- `ui/` — 40+ shadcn/ui components (Radix UI primitives wrapped with styling). These are source-in-repo (not node_modules), customizable directly. Includes: accordion, alert-dialog, avatar, button, card, chart, checkbox, dialog, dropdown-menu, form, input, popover, select, table, tabs, tooltip, and more.
- `alumni/` — AlumniCard, AlumniSection components for `/pak-union`.
- `faq/` — FaqSection accordion-based component for `/faq`.
- `figma/` — ImageWithFallback component for handling `figma:asset/` imports.

The `cn()` utility (from `@/lib/utils` or similar) combines `tailwind-merge`, `clsx`, and `cva` for className merging — this is the standard shadcn/ui pattern.

### Data Layer (`src/data/`)

All content is static TypeScript modules — no API calls, no database. Pages import data directly:
- `alumni.ts` — Alumni array + `Alumni` type definition.
- `faq.ts` — Aggregates all FAQ category files into a single `faqItems` export.
- `faq-*.ts` (8 files) — FAQ content split by topic (about, course, certification, clinical, comparison, instructor, learning, registration).
- `faq-types.ts` — Shared `FAQItem` interface.

### Styles (`src/styles/`)

CSS loading chain: `index.css` → imports `fonts.css`, `tailwind.css`, `theme.css`.
- `fonts.css` — Playfair Display (headings/logo) and Inter (body/UI).
- `tailwind.css` — Tailwind entry with `@source` scan directive.
- `theme.css` — CSS custom properties for design tokens, `@theme inline` block for Tailwind v4 integration, and global typography rules.

### Figma Asset Resolver

A custom Vite plugin (`figmaAssetResolver()` in `vite.config.ts`) resolves `figma:asset/<filename>` import paths to `src/assets/<filename>`. This is a Figma export artifact — do not remove it unless removing all `figma:asset/` imports.

## Common Gotchas

- **HMR not reliable**: If styles break or the page looks broken, hard-refresh (`Ctrl+Shift+R`) or restart the dev server. Do not assume a style change is wrong until you've ruled out stale HMR.
- **`guidelines/Guidelines.md`** is a placeholder template from Figma export — it is not active project instructions.
- **`ATTRIBUTIONS.md`** documents shadcn/ui and Unsplash licensing for Figma-exported assets.
