import type { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@tds/ui";

/**
 * Docusaurus's global wrapper (see https://docusaurus.io/docs/swizzling#wrapper-your-site-with-root)
 * — wraps the whole site once so MDX pages can render real @tds/ui and
 * @tds/digital components without each one setting up its own ThemeProvider.
 * Deliberately no CssBaseline here: it would fight Docusaurus's own site
 * chrome (nav, sidebar, footer) instead of just the embedded examples.
 */
export default function Root({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
