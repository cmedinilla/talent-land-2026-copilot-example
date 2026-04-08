# GitHub Copilot Instructions — Talent Land 2026 Speaker Hub

These instructions help GitHub Copilot understand the conventions, architecture, and design decisions of this project so it can provide better, context-aware suggestions.

---

## Project Overview

This is the **Talent Land 2026 Speaker Hub** — a single-page dashboard application that allows conference speakers to manage their sessions, track festival progress, and access resources. It is built primarily as a demo to showcase GitHub Copilot-assisted development.

---

## Tech Stack

- **React 19** with functional components and hooks only (no class components).
- **TypeScript** — always use explicit types; avoid `any`.
- **Vite** as the build tool and dev server.
- **Tailwind CSS v3** for all styling (no separate CSS modules or styled-components).
- **ESLint** (`eslint` + `typescript-eslint`) for code quality.

---

## Code Style & Conventions

### TypeScript

- Use `interface` for object shapes; use `type` aliases for unions/intersections.
- Export types/interfaces that are reused across components.
- Avoid `any`; prefer `unknown` with a type guard when the type is truly unknown.
- Use `const` by default; only use `let` when re-assignment is required.

### React

- All components are **functional components** using arrow functions or standard function declarations.
- Keep components in `src/` at the top level for now; create sub-directories (e.g., `src/components/`) when there are more than 3–4 reusable components.
- Prefer **named exports** for components so they are easy to import and refactor.
- Do not use `React.FC` — let TypeScript infer the return type from JSX.
- Use **controlled components** for forms (manage state with `useState`).

### Styling (Tailwind CSS)

- Use **only** Tailwind utility classes for styling — do not write custom CSS unless absolutely necessary (e.g., for complex animations or third-party overrides).
- Custom CSS goes in `src/index.css` and should be minimal.
- The project has a **custom neon dark theme**. All custom color tokens are defined in `tailwind.config.js` (e.g., `primary`, `secondary`, `surface-container`, `on-surface`, etc.). Use these tokens instead of raw hex values inside JSX.
- **Dark mode** is enabled via the `class` strategy (`darkMode: "class"`). The `<html>` element always has the `dark` class.
- Typography uses two Google Font families:
  - `font-headline` → `Space Grotesk`
  - `font-body` / `font-label` → `Inter`

### File & Component Naming

- Component files use **PascalCase** (e.g., `Landing.tsx`, `TalkCard.tsx`).
- Utility/helper files use **camelCase** (e.g., `formatDate.ts`).
- Keep one component per file.

---

## Project Structure

```
src/
├── assets/          # Static images / SVGs imported by components
├── App.tsx          # Root component — imports and renders Landing
├── Landing.tsx      # Main dashboard page
├── App.css          # App-level overrides (keep minimal)
├── index.css        # Tailwind directives + global resets
└── main.tsx         # ReactDOM.createRoot entry point
```

When adding new features, follow this structure:

- Add reusable UI pieces to `src/components/`.
- Add data-fetching or business logic to `src/hooks/` (custom hooks) or `src/services/`.
- Add shared TypeScript types to `src/types/`.

---

## Key Design Tokens (Tailwind)

| Token | Usage |
|---|---|
| `bg-background` | Page background |
| `text-on-surface` | Primary text color |
| `text-on-surface-variant` | Secondary/muted text |
| `text-primary` / `bg-primary` | Neon cyan accent (`#81ecff`) |
| `text-secondary` / `bg-secondary` | Neon green accent (`#2ff801`) |
| `text-tertiary` / `bg-tertiary` | Purple accent (`#ac89ff`) |
| `bg-surface-container` | Card/panel background |
| `bg-surface-container-low` | Slightly darker panel |
| `border-outline-variant` | Subtle border color |

---

## Icons

Use **Material Symbols Outlined** via the `<span>` tag pattern:

```tsx
<span className="material-symbols-outlined">icon_name</span>
```

The icon font is loaded from Google Fonts in `index.html`. Adjust the fill with inline `style={{ fontVariationSettings: "'FILL' 1" }}`.

---

## What to Avoid

- **Do not** add external UI component libraries (e.g., MUI, Chakra, Radix) — keep styling self-contained with Tailwind.
- **Do not** use inline `style` attributes for colors or spacing that can be expressed with Tailwind classes.
- **Do not** commit build artifacts (`dist/`) or dependencies (`node_modules/`) — they are in `.gitignore`.
- **Do not** use `console.log` in production code; remove debug statements before committing.

---

## Running the Project Locally

```bash
npm install       # Install dependencies
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Compile TypeScript and bundle for production
npm run lint      # Run ESLint checks
npm run preview   # Serve the production build locally
```
