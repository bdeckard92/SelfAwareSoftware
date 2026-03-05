# ADR-001: Frontend Architecture Baseline Review

- Status: Accepted with follow-up actions
- Date: 2026-03-05
- Deciders: Project maintainers
- Scope: `SelfAwareSoftware` React web application

## Context

This project is a React + Vite single-page application that publishes educational content for software engineers. It currently delivers:

- Route-based pages (`Home`, `VideoList`, `About`, `Blog`) via `react-router-dom`
- Local, static content sources for videos and blog posts (`src/utils/videos.jsx`, `src/utils/blogs.jsx`)
- Shared utility logic for filtering, sanitizing, and sorting (`src/utils/filterByKeywords.js`, `src/utils/sanitizeSearchInput.js`, `src/utils/sortByDate.js`)
- Unit/component tests using Vitest and React Testing Library

The codebase is early-stage and intentionally simple, but it needs an explicit architectural direction to support maintainability as content volume and feature complexity grow.

## Current Architecture Review

### What is working well

- Simple and understandable SPA layout with clear top-level routing.
- Reusable utility functions for search sanitization and date sorting reduce duplication.
- Basic test coverage exists for core UI behaviors (search and sort on blog/video pages).
- Theme state persistence via `localStorage` is implemented cleanly in `App.jsx`.
- Tooling baseline is healthy (Vite, ESLint, Vitest, jsdom).

### Key architectural risks

- Content is embedded as executable JSX in data files, coupling content and presentation tightly.
- `Blog` includes UI-introspection logic (`getBlogSubtitle`) that traverses React element internals, which is brittle to content shape changes.
- Data layer and view layer boundaries are weak: there is no typed domain model or schema validation.
- A backend dependency (`firebase`) is present but not integrated, creating ambiguity about intended persistence strategy.
- Search is computed in component render paths with no memoization strategy; this is fine now but can degrade with scale.
- Minor code quality smell: unused import in `src/utils/blogs.jsx` (`data` from `react-router-dom`).

## Decision

Keep the current client-rendered SPA architecture for now, but introduce clear boundaries between content, domain logic, and UI so the app can evolve safely.

### Architectural decisions adopted

1. Keep Vite + React Router SPA as the primary runtime architecture.
2. Preserve utility-first domain helpers for filtering/sorting/sanitization.
3. Move content toward structured, serializable data formats (JSON/MD/MDX) instead of JSX-rich objects.
4. Remove brittle React-element introspection from business logic.
5. Define a gradual path for data sourcing: local static files first, optional Firebase-backed content later.

## Consequences

### Positive

- Faster iteration remains possible with low operational complexity.
- Better separation of concerns will make tests clearer and refactors safer.
- Structured content enables future API-driven or CMS-driven delivery.

### Negative

- Short-term migration work is required for existing blog content.
- Additional transformation code (content rendering pipeline) will be needed.
- Introducing stricter schemas/tests will add some upfront maintenance overhead.

## Implementation Plan

### Phase 1 (near-term)

- Remove unused imports and lint warnings.
- Introduce a content model contract for video/blog records.
- Refactor blog subtitle handling to read a dedicated subtitle field instead of parsing React children.
- Add tests that validate content model invariants.

### Phase 2 (growth)

- Move blog/video content into structured source files.
- Add a small content adapter layer (`contentService`) consumed by UI components.
- Add memoization (`useMemo`) where filtering/sorting costs become measurable.

### Phase 3 (optional backend)

- If dynamic publishing is required, add a repository abstraction and implement a Firebase adapter behind it.
- Keep UI components backend-agnostic by depending only on the adapter interface.

## Quality Gates

The architecture is considered healthy when:

- Content data is serializable and schema-validated.
- UI components no longer parse React element internals for domain fields.
- Test coverage includes utility functions and critical UI states for all primary routes.
- Data-source choice (local vs Firebase) is explicit and documented.

## Alternatives Considered

- Full migration to Next.js/SSR now: rejected for current scope; operational complexity outweighs benefit.
- Immediate backend-first architecture: rejected until dynamic content requirements are confirmed.
- Keep current structure unchanged: rejected due to increasing brittleness as content grows.

## Review Cadence

Revisit this ADR after either of the following:

- More than 25 blog entries are added, or
- Dynamic content editing/publishing becomes a requirement.
