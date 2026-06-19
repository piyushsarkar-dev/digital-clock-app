# Digital Clock App

A minimal, glassmorphic digital clock built with Next.js. It shows the current time and date in a smooth, animated "liquid glass" panel, with full dark/light theme support.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB)

## Why use this

- **Live, animated time display** — hours, minutes, and seconds update every tick with smooth digit transitions powered by `@number-flow/react`, plus an animated AM/PM indicator and a full weekday/date line.
- **Liquid glass aesthetic** — a custom `GlassSurface` component renders a frosted, refractive glass panel using SVG filters, with configurable blur, displacement, and chromatic offset.
- **Dark and light themes** — theme switching is handled via `next-themes`, with dedicated background art for each mode and a toggle in the header.
- **Modern stack** — built on Next.js 16 (App Router, typed routes), React 19, and the React Compiler, styled with Tailwind CSS 4.

## Getting started

### Prerequisites

- [Bun](https://bun.sh) (this project uses `bun.lock`)
- Node.js `>=24.x`

### Installation

```bash
git clone https://github.com/piyushsarkar-dev/digital-clock-app.git
cd digital-clock-app
bun install
```

### Usage

Start the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see the clock.

Other available scripts:

```bash
bun run build   # Production build
bun run start   # Start the production server
bun run lint    # Run ESLint
bun run prod    # Lint, build, and start in one step
```

## Project structure

```
src/
├── app/                  # Next.js App Router entry (layout, page, global styles)
├── components/
│   ├── Clock.tsx         # Core clock logic and live time/date rendering
│   ├── GlassSurface.tsx  # SVG-filter-based liquid glass effect
│   ├── Header/           # App header and navigation
│   ├── Providers/        # Theme provider
│   └── shadcnui/         # UI primitives (aurora text, animated text)
└── lib/                  # Fonts and shared utilities
```

## Getting help

- **Issues and bugs**: open an issue on the [GitHub Issues](https://github.com/piyushsarkar-dev/digital-clock-app/issues) page.
- **Questions**: start a discussion or open an issue with the `question` label.

## Contributing and maintainers

This project is created and maintained by [Piyush Sarkar](https://github.com/piyushsarkar-dev).

Contributions are welcome — feel free to open an issue or submit a pull request. Dependency updates are kept current automatically via Dependabot.

## License

Licensed under the [MIT License](LICENSE).
