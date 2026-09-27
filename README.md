# tds — Titung Design System

Shared design tokens, MUI theme, and components used across Titung
products, split into two packages:

- **[`packages/ui`](./packages/ui)** (`@tds/ui`) — design tokens, the MUI
  theme, and themed MUI primitives (`Button`, `Card`, `Container`, `Grid`,
  `Logo`).
- **[`packages/digital`](./packages/digital)** (`@tds/digital`) — composed,
  CMS-agnostic sections (`HeroBanner`, `Navigation`, `LatestNews`,
  `PostList`) built from `@tds/ui`. No WordPress, no router — plain props
  in, MUI-styled JSX out.

Plus **[`apps/docs`](./apps/docs)** — a Docusaurus site documenting both
packages.

## Install

Not published to npm — install directly from GitHub. See each package's
README for exact install commands.

## Develop

Uses [pnpm](https://pnpm.io) workspaces (see `pnpm-workspace.yaml`) — not
npm/yarn.

```bash
pnpm install                  # installs and links every workspace package
pnpm run build                # builds @tds/ui then @tds/digital (dist/ via tsup)
pnpm run typecheck            # tsc --noEmit across every workspace
pnpm run lint                 # oxlint across every workspace
pnpm run storybook:ui         # @tds/ui Storybook — http://localhost:6006
pnpm run storybook:digital    # @tds/digital Storybook — http://localhost:6007
pnpm run docs                 # Docusaurus dev server — http://localhost:3000
```

Storybook lives inside each package (`packages/*/​.storybook`) rather than
as a separate app, so each package stays independently developable — you
don't need the other package's Storybook running to work on one of them.
`@tds/digital`'s Storybook does need `@tds/ui` built first; that's handled
by [Turborepo](https://turbo.build/) (`turbo.json`), which builds a
package's dependencies before running any task that declares
`dependsOn: ["^build"]` — this is also what replaced the manual
`build-a-then-b` script chaining and gives `pnpm run build`/`pnpm run
typecheck` caching for free. Run everything through the root `pnpm run`
scripts above (not `cd packages/digital && pnpm run storybook` directly) so
Turborepo can do that ordering.

## CI

`.github/workflows/ci.yml` runs on every PR and on push to `main`: install
(`--frozen-lockfile`), `pnpm run lint` (oxlint), `pnpm run typecheck`, then
`pnpm run build`. Treat this as the required check before merging — enable
it as a required status check in the repo's branch protection settings for
`main` (not something this repo's files can enforce on their own).

## Versioning & releases

This repo uses [Changesets](https://github.com/changesets/changesets),
configured for **independent** versioning — `@tds/ui` and `@tds/digital`
each bump on their own semver track, not in lockstep.

```bash
pnpm run changeset          # after a change: describe it, pick affected package(s) + bump type
pnpm run version-packages   # collects pending changesets, bumps package.json/CHANGELOG.md
pnpm run release            # builds, then `changeset publish` (currently a no-op target — see below)
```

Commit the generated `.changeset/*.md` file alongside the code change it
describes. `@tds/docs` is `"private": true` (it's a website, not a
consumable package) — Changesets **excludes private packages from
versioning entirely** (not just from publishing): a changeset targeting
only `@tds/docs` is silently never consumed by `version-packages`. Its
`package.json` version is therefore unmanaged by this workflow — see below
for how its content history is actually tracked.

`pnpm run release` isn't wired to a real registry yet (packages are still
git-installed, not published) — no CI workflow runs it automatically. Once
a publish target (npm registry vs. GitHub Packages) is decided, add a
`changesets/action` workflow to automate the "Version Packages" PR + publish
step on merge to `main`.

**Docs versioning is separate from package versioning.** `apps/docs` uses
Docusaurus's own doc-versioning feature (a version dropdown, frozen
`versioned_docs/` snapshots per release) so past API documentation stays
readable after `@tds/ui`/`@tds/digital` change — see
[`apps/docs/README.md`](./apps/docs/README.md#versioning) for when and how
to cut a new docs version.

## Source of truth

Tokens and component styling are kept in sync with
[titung/app/theme/theme.ts](https://github.com/Titungco/titung) — when the
marketing site's visual language changes, update it there first, then port
the change here.
