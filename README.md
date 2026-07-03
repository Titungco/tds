# tds — Titung Design System

Shared design tokens, MUI theme, and primitive components extracted from the
[titung](https://titung.com) marketing site, so every Titung product shares
the same look and feel.

## Install

```bash
npm install tds @mui/material @emotion/react @emotion/styled react react-dom
```

## Usage

```tsx
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme, Button, Logo } from "tds";

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
  Titung palette, typography scale, and component style overrides
  (`Button`, `AppBar`, `Chip`, `Divider`, `TextField`).
- **`tokens`** — the raw, framework-agnostic values behind the theme:
  `color`, `typography`, `radius`, `motion`, `elevation`.
- **Components** — `Button` and `Logo`, the primitives shared across
  Titung surfaces.

## Design tokens

| Token | Value |
| --- | --- |
| Primary | `#E85D04` |
| Primary hover | `#F48C06` |
| Secondary / text primary | `#0A0A0A` |
| Background | `#EFEFEC` |
| Paper | `#FFFFFF` |
| Text secondary | `#64748B` |
| Font family | `Inter` |
| Border radius | `4px` |

## Develop

```bash
npm install
npm run build      # builds dist/ via tsup (ESM + CJS + .d.ts)
npm run dev         # watch mode
npm run typecheck
```

## Source of truth

Tokens and component styling in this package are kept in sync with
[titung/app/theme/theme.ts](https://github.com/Titungco/titung) — when the
site's visual language changes, update it there first, then port the change
here.
