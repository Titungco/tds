# @tds/ui

Design tokens, MUI theme, and themed primitive components for the Titung
Design System.

## Install

Not published yet (no npm registry or GitHub Packages target decided). A
plain `npm/pnpm install github:Titungco/tds` installs the whole monorepo,
not just this package — until a real publish target exists, consume this
package via a git checkout + `pnpm link`, or a git submodule.

## Usage

```tsx
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme, Button, Card, Container, Grid, Logo } from "@tds/ui";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Logo />
      <Button variant="contained" color="primary">
        Start a Project
      </Button>
    </ThemeProvider>
  );
}
```

Don't forget to load the Inter font (the theme's `fontFamily` assumes it's
available):

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
/>
```

Or pull the URL from tokens: `tokens.typography.googleFontUrl`.

## What's in here

- **`theme`** — a ready-to-use MUI theme (`createTheme` output) with the
  Titung palette, typography scale, and component style overrides.
- **`tokens`** — the raw, framework-agnostic values behind the theme:
  `color`, `typography`, `radius`, `motion`, `elevation`.
- **Components** — `Button`, `Card`, `Container`, `Grid`, `Logo`.

## Develop

Run these from the repo root:

```bash
pnpm run build --filter=@tds/ui       # builds dist/ via tsup (ESM + CJS + .d.ts)
pnpm --filter @tds/ui dev             # watch mode
pnpm run typecheck --filter=@tds/ui
pnpm run storybook:ui                 # http://localhost:6006
```
