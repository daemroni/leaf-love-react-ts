# Leaf Love Advisor — React App (Vite + TypeScript + Tailwind + shadcn/ui)

A lightweight React app that recommends houseplants based on your preferences. Built with **Vite**, **React (TypeScript)**, **Tailwind CSS**, and **shadcn/ui**.

## Tech Stack

- **Build tool:** Vite 5 (`vite.config.ts`)
- **Language:** React + TypeScript
- **Styling:** Tailwind CSS (`tailwind.config.ts`, `postcss.config.js`)
- **UI:** shadcn/ui (Radix UI primitives)
- **Routing:** React Router
- **Data fetching/cache:** @tanstack/react-query
- **Linting:** ESLint 9

> Dev server is configured to run on **http://localhost:8080**.

## Prerequisites

- **Node.js ≥ 18** (Vite 5 requires Node 18+). Node 20+ recommended.
- A package manager of your choice: **npm** (default), **pnpm**, **yarn**, or **bun**.
  - The repo contains both `package-lock.json` and `bun.lockb`. If in doubt, use **npm** for consistency with the lockfile already in the project.

## Getting Started

Clone the repo and install dependencies:

```bash
# with npm
npm install

# or with pnpm
pnpm install

# or with yarn
yarn install

# or with bun
bun install
```

### Run the app in development

```bash
npm run dev
```
- The Vite dev server starts on **http://localhost:8080** (configured in `vite.config.ts`).

### Build for production

```bash
npm run build
```
- Outputs static files to `dist/`.

### Preview the production build locally

```bash
npm run preview
```
- Serves the contents of `dist/` so you can verify the production build locally.
- Vite will print the preview URL and port in the terminal (defaults to 4173 unless overridden).

### Lint the project

```bash
npm run lint
```

## Project Structure (high level)

```
leaf-love-advisor/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── public/                # static assets served as-is
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── components/        # UI components (includes shadcn/ui)
│   └── assets/            # app images
└── ...
```

## Environment Variables

No environment variables are required to run the app locally. If you add any later, Vite expects variables to be prefixed with `VITE_` in your `.env` files (e.g., `.env`, `.env.development`). Access them via `import.meta.env.VITE_SOME_KEY`.

## Deployment

This is a static front‑end. After `npm run build`, deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, S3/CloudFront, Nginx, etc.).

- Ensure your server serves `index.html` for unknown routes if you rely on client-side routing (React Router).

## Common Issues & Tips

- **Port already in use (8080):** change the port in `vite.config.ts` or stop the conflicting process.
- **Node version errors:** ensure `node -v` is ≥ 18. Consider using `nvm` to switch versions.
- **CSS not applying:** verify Tailwind is configured and the stylesheet is imported (see `src/main.tsx` and `src/index.css`/`src/App.css`).

---

Happy planting 🌿
