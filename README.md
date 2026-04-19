# BlackGate Website

A React + Vite multi-page cybersecurity website with a modular section-based homepage, Tailwind CSS styling, and Framer Motion animations.

## Tech Stack

- React 19
- Vite 7
- React Router
- Tailwind CSS + PostCSS
- Framer Motion
- Lucide React icons

## Project Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev`: Start Vite dev server.
- `npm run build`: Create production build in `dist/`.
- `npm run preview`: Serve production build locally.
- `npm run lint`: Run ESLint.

## Current Structure

```text
BlackGate/
	src/
		App.jsx
		main.jsx
		index.css
		assets/
		components/
		hooks/
		lib/
		pages/
		sections/
	index.html
	package.json
	vite.config.js
	tailwind.config.js
	postcss.config.js
```

## Routing

Main routes are configured in `src/main.jsx`:

- `/`
- `/services/web-development`
- `/services/cybersecurity`
- `/services/cyber-forensics`
- `/services/ai-solutions`
- `/about`
- `/case-studies`
- `/privacy`
- `/terms`
- `/security`

## Styling Notes

- Tailwind is enabled via `tailwind.config.js` and `postcss.config.js`.
- Global theme/base styles are in `src/index.css`.
- Homepage sections rely on utility classes and assets from `src/assets`.

## Cleanup Status

- Temporary migration folder `temp/` has been removed.
- Legacy helper files and extra markdown documents were removed.
- Image assets used by homepage sections are now maintained in `src/assets`.

## Notes

- If a dev server port is occupied, Vite automatically picks the next available port.
- For deployment, use the contents of `dist/` after `npm run build`.
