/**
 * Framework-agnostic design tokens for the Titung Design System.
 * These are the raw values consumed by `theme.ts` and by non-MUI contexts
 * (e.g. CSS variables, native apps, docs).
 */

export const color = {
  primary: "#E85D04",
  primaryHover: "#F48C06",
  secondary: "#0A0A0A",
  background: "#EFEFEC",
  paper: "#FFFFFF",
  textPrimary: "#0A0A0A",
  textSecondary: "#64748B",
  divider: "rgba(0,0,0,0.08)",
  onPrimary: "#ffffff",
} as const;

export const typography = {
  fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
  googleFontUrl:
    "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  heading: {
    h1: { fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 },
    h2: { fontWeight: 700, letterSpacing: "-0.025em" },
    h3: { fontWeight: 700, letterSpacing: "-0.02em" },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  body1: { lineHeight: 1.7 },
  button: { fontWeight: 600, letterSpacing: "0.02em" },
} as const;

export const radius = {
  default: 4,
} as const;

export const motion = {
  standard: "all 0.22s cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

export const elevation = {
  primaryHover: "0 8px 28px rgba(232,93,4,0.28)",
  primaryActive: "0 2px 8px rgba(232,93,4,0.18)",
} as const;
