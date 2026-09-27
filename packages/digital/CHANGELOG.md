# @tds/digital

## 0.2.0

### Minor Changes

- Split the design system into a proper monorepo (pnpm workspaces + Turborepo):
  
  - `@tds/ui`: added `Card`, `Container`, and `Grid` primitives alongside the existing `Button`/`Logo`, each with a Storybook story.
  - `@tds/digital` (new package): composed, CMS-agnostic sections built from `@tds/ui` — `HeroBanner`, `Navigation`, `LatestNews`, and `PostList` (with optional pagination), each with a Storybook story.
  - `@tds/docs` (new package): a Docusaurus site documenting tokens, primitives, and sections, with live-rendered component examples (not just code snippets) and Docusaurus doc versioning wired up.
  - Repo tooling: Turborepo task pipeline, Changesets for independent per-package versioning, oxlint, and a CI workflow (lint/typecheck/build) gating merges.

### Patch Changes

- Updated dependencies
  - @tds/ui@0.2.0
