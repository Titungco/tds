import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Button, Container, Logo } from "@tds/ui";
import { DefaultLink } from "../DefaultLink";
import type { LinkComponent } from "../types";

export interface NavigationLink {
  label: string;
  href: string;
}

export interface NavigationCta {
  label: string;
  href: string;
}

export interface NavigationProps {
  logoLabel?: string;
  links: NavigationLink[];
  cta?: NavigationCta;
  /** Swap in a router's Link; defaults to a plain `<a>`. */
  linkComponent?: LinkComponent;
}

/**
 * Site header: logo, a row of nav links, and an optional CTA button.
 * Router-agnostic — pass `linkComponent` to wire up Next.js/React Router/etc.
 */
export function Navigation({ logoLabel, links, cta, linkComponent: Link = DefaultLink }: NavigationProps) {
  return (
    <AppBar position="static" elevation={0}>
      <Container>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Logo label={logoLabel} />
          <Stack direction="row" spacing={3} component="nav" sx={{ alignItems: "center" }}>
            {links.map((link) => (
              <Box key={link.href} sx={{ typography: "body1" }}>
                <Link href={link.href}>{link.label}</Link>
              </Box>
            ))}
            {cta && (
              <Button variant="contained" color="primary" href={cta.href}>
                {cta.label}
              </Button>
            )}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
