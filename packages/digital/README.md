# @tds/digital

Composed, CMS-agnostic marketing/content sections built from
[`@tds/ui`](../ui) primitives: `HeroBanner`, `Navigation`, `LatestNews`,
`PostList`.

Every section is presentational only — plain props in, MUI-styled JSX out.
None of them fetch data or import a router; the consumer supplies data and,
where relevant, a `linkComponent` for routing.

## Install

Not published yet (no npm registry or GitHub Packages target decided). A
plain `npm/pnpm install github:Titungco/tds` installs the whole monorepo,
not just this package — until a real publish target exists, consume this
package via a git checkout + `pnpm link`, or a git submodule.

## Usage

```tsx
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "@tds/ui";
import { Navigation, HeroBanner, PostList, type PostSummary } from "@tds/digital";

const posts: PostSummary[] = await fetchPosts(); // however your platform fetches them

export default function Page() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navigation links={[{ label: "Blog", href: "/blog" }]} />
      <HeroBanner title="One design system, every Titung product." />
      <PostList posts={posts} />
    </ThemeProvider>
  );
}
```

## Develop

Run these from the repo root (not `cd packages/digital`) so Turborepo
builds `@tds/ui` first where needed:

```bash
pnpm run build --filter=@tds/digital
pnpm --filter @tds/digital dev          # watch mode
pnpm run typecheck --filter=@tds/digital
pnpm run storybook:digital              # http://localhost:6007
```
