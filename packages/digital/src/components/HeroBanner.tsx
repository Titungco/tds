import type { ReactNode } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Button, Container, type ButtonProps } from "@tds/ui";

export interface HeroBannerAction {
  label: string;
  href: string;
  variant?: ButtonProps["variant"];
}

export interface HeroBannerProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryAction?: HeroBannerAction;
  secondaryAction?: HeroBannerAction;
  /** Illustration/screenshot rendered beside the copy on wide screens. */
  media?: ReactNode;
}

/**
 * Marketing hero section: eyebrow + title + description + up to two CTAs,
 * with an optional media slot. CMS-agnostic — actions are plain hrefs.
 */
export function HeroBanner({ eyebrow, title, description, primaryAction, secondaryAction, media }: HeroBannerProps) {
  return (
    <Container sx={{ py: { xs: 6, md: 10 } }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 4, md: 8 }}
        sx={{ alignItems: "center", justifyContent: "space-between" }}
      >
        <Stack spacing={2} sx={{ maxWidth: 560 }}>
          {eyebrow && (
            <Typography variant="button" color="primary.main" component="p">
              {eyebrow}
            </Typography>
          )}
          <Typography variant="h1" component="h1">
            {title}
          </Typography>
          {description && (
            <Typography variant="body1" color="text.secondary">
              {description}
            </Typography>
          )}
          {(primaryAction || secondaryAction) && (
            <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
              {primaryAction && (
                <Button
                  variant={primaryAction.variant ?? "contained"}
                  color="primary"
                  href={primaryAction.href}
                >
                  {primaryAction.label}
                </Button>
              )}
              {secondaryAction && (
                <Button
                  variant={secondaryAction.variant ?? "outlined"}
                  color="secondary"
                  href={secondaryAction.href}
                >
                  {secondaryAction.label}
                </Button>
              )}
            </Stack>
          )}
        </Stack>
        {media}
      </Stack>
    </Container>
  );
}
