# AGENTS.md

## Project

PAK 健衡学园 landing page. React 18 + Vite 6 + TypeScript + Tailwind CSS v4.

## Commands

```bash
npm run dev      # dev server on http://localhost:5173
npm run build    # production build → dist/
```

No lint, typecheck, or test scripts exist.

## Tailwind v4 — Not the old setup

- `@tailwindcss/vite` plugin in `vite.config.ts` handles everything. **No `tailwind.config.js`** and **no PostCSS tailwind plugin**.
- `src/styles/tailwind.css` uses `@source` to explicitly scan `src/**/*.{js,ts,jsx,tsx}` for class names.
- Theme tokens live in `src/styles/theme.css` as CSS variables, bridged to Tailwind via `@theme inline`.

## Path alias

`@` → `./src` (configured in `vite.config.ts` resolve.alias).

## Figma asset resolver

Custom Vite plugin `figmaAssetResolver()` in `vite.config.ts` resolves `figma:asset/<filename>` imports to `src/assets/<filename>`.

## Structure

- **Pages:** `src/app/App.tsx` (home), `CoursePage.tsx`, `AlumniPage.tsx`, `FaqPage.tsx`, `ContactPage.tsx`
- **UI components:** `src/app/components/ui/` — 40+ shadcn/ui components (Radix-based, source in repo, editable)
- **Data:** `src/data/` — TypeScript modules, no API calls. Alumni and FAQ data imported directly.
- **Routing:** React Router v7 in `src/main.tsx`. Routes: `/`, `/course`, `/alumni`, `/faq`, `/contact`

## Style conventions

- Design tokens in `theme.css` (light + dark via `.dark` class).
- Fonts: Playfair Display (headings), Inter (body) — imported in `src/styles/fonts.css`.
- shadcn/ui pattern: `cn()` utility with `tailwind-merge` + `clsx` + `cva`.
- Entry CSS chain: `src/styles/index.css` → imports `fonts.css`, `tailwind.css`, `theme.css`.

## Gotchas

- No HMR hot-reload reliability guarantee — if styles break, hard-refresh (`Ctrl+Shift+R`) or restart dev server.
- `guidelines/Guidelines.md` is a Figma template placeholder, not active instructions.
