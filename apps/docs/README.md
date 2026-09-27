# @tds/docs

Documentation site for the Titung Design System, built with
[Docusaurus](https://docusaurus.io/). Run everything from the repo root
(this app uses pnpm workspaces + Turborepo), not from inside this
directory directly.

## Local development

```bash
pnpm run docs   # http://localhost:3000
```

## Build

```bash
pnpm run build --filter=@tds/docs   # static output in build/
```

## Versioning

This site uses [Docusaurus's docs versioning](https://docusaurus.io/docs/versioning)
— `docs/` is always the unreleased "Next" version; `versioned_docs/` holds
frozen snapshots per release, and the navbar's version dropdown
(`docusaurus.config.ts`) lets readers switch between them.

**When `@tds/ui` or `@tds/digital` gets a new released version** (after
`pnpm run version-packages`), cut a matching docs snapshot so past
behavior stays documented:

```bash
pnpm --filter @tds/docs exec docusaurus docs:version <new-version>
```

This copies the current `docs/` into `versioned_docs/version-<new-version>/`
and adds it to `versions.json` — commit the result alongside the release.
Keep editing `docs/` afterward for the next unreleased changes.
