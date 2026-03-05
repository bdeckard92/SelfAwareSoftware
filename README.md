# SelfAwareSoftware

SelfAwareSoftware is a React + Vite web app for "The Self Aware Software Engineer" content platform.
It provides:

- A home page introducing the project and content focus.
- A videos page to explore video content.
- A blog page with keyword search and date sorting.
- An about page with background, coaching philosophy, and context.
- A persisted light/dark theme toggle.

## Tech Stack

- React
- React Router
- Vite
- Vitest + React Testing Library
- ESLint

## Getting Started Locally

### Prerequisites

- Node.js 20.x or newer (LTS recommended)
- npm (comes with Node.js)

### Clone the repository

```bash
git clone <your-repo-url>
cd SelfAwareSoftware
```

### Install dependencies

```bash
npm install
```

### Start the app in local development

```bash
npm run dev
```

Vite will print a local URL (usually `http://localhost:5173`) in the terminal.

## Scripts

- `npm run dev`: Start the Vite dev server.
- `npm run build`: Build production assets.
- `npm run preview`: Preview the production build locally.
- `npm run lint`: Run ESLint across the project.
- `npm test`: Run tests with Vitest.

## Running Tests

Run the full test suite:

```bash
npm test
```

Run tests one time (non-watch mode):

```bash
npm test -- --run
```

## How to Contribute

1. Fork this repository.
2. Clone your fork locally.
3. Create a feature branch.

```bash
git checkout -b feature/short-description
```

4. Install dependencies and run the app locally (`npm install`, `npm run dev`).
5. Make your changes.
6. Run quality checks before opening a PR:

```bash
npm run lint
npm test -- --run
```

7. Commit and push your branch.
8. Open a pull request with a clear summary of what changed and why.

## Project Structure

- `src/components/`: UI components and page sections.
- `src/utils/`: Data helpers and utility functions.
- `src/components/__tests__/`: Component and utility tests.

## Architecture Decision Records

- `ADR.md`: ADR-001 Frontend Architecture Baseline Review
- `ADR-002.md`: Structured Content Model and Rendering Strategy
- `ADR-003.md`: Data Source Abstraction with Optional Firebase Backend

## Notes

- Theme preference is stored in `localStorage`.
- Content data for videos/blog entries is currently maintained in utility files under `src/utils/`.
