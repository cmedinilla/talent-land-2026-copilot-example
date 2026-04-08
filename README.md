# Talent Land 2026 — Speaker Hub

A **Speaker Hub** dashboard built as a demo/example project for [Talent Land 2026](https://www.talent-land.mx/). It showcases how to use **GitHub Copilot** to accelerate development of a modern React + TypeScript web application.

## ✨ Features

- Speaker dashboard with upcoming and completed talk cards
- Festival progress tracker
- Venue map and speaker resources panel
- Responsive layout: side navigation on desktop, bottom navigation on mobile
- Dark-mode-first design with a custom neon color palette (Tailwind CSS)

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| UI Library | [React 19](https://react.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Build Tool | [Vite](https://vite.dev/) |
| Styling | [Tailwind CSS v3](https://tailwindcss.com/) |
| Linting | [ESLint](https://eslint.org/) with `typescript-eslint` |
| Fonts & Icons | Google Fonts (Space Grotesk, Inter) + Material Symbols |

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
npm install
```

### Development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production build

```bash
npm run build
```

The compiled output is placed in the `dist/` folder.

### Preview production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## 📁 Project Structure

```
talent-land-2026-copilot-example/
├── public/                 # Static assets (favicon, etc.)
├── src/
│   ├── assets/             # Images and other media assets
│   ├── App.tsx             # Root component
│   ├── Landing.tsx         # Main landing/dashboard page component
│   ├── App.css             # App-level styles
│   ├── index.css           # Global styles (Tailwind base + utilities)
│   └── main.tsx            # Application entry point
├── index.html              # HTML entry point
├── tailwind.config.js      # Tailwind CSS configuration (custom tokens)
├── eslint.config.js        # ESLint flat config
├── tsconfig.json           # TypeScript base config
├── tsconfig.app.json       # TypeScript app config
├── tsconfig.node.json      # TypeScript Node/Vite config
├── vite.config.ts          # Vite configuration
└── package.json
```

## 🤝 Contributing

1. Fork the repository and create your feature branch (`git checkout -b feat/your-feature`).
2. Make your changes following the code style enforced by ESLint.
3. Run `npm run lint` and fix any reported issues.
4. Commit your changes using a descriptive message.
5. Open a Pull Request describing what you changed and why.

> **Tip:** This project ships with a `.github/copilot-instructions.md` file. GitHub Copilot will use it automatically to give you context-aware suggestions aligned with the project conventions.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
