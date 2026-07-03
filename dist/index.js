var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/theme.ts
import { createTheme } from "@mui/material/styles";

// src/tokens.ts
var tokens_exports = {};
__export(tokens_exports, {
  color: () => color,
  elevation: () => elevation,
  motion: () => motion,
  radius: () => radius,
  typography: () => typography
});
var color = {
  primary: "#E85D04",
  primaryHover: "#F48C06",
  secondary: "#0A0A0A",
  background: "#EFEFEC",
  paper: "#FFFFFF",
  textPrimary: "#0A0A0A",
  textSecondary: "#64748B",
  divider: "rgba(0,0,0,0.08)",
  onPrimary: "#ffffff"
};
var typography = {
  fontFamily: '"Inter", "Helvetica Neue", Arial, sans-serif',
  googleFontUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
  weight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  heading: {
    h1: { fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05 },
    h2: { fontWeight: 700, letterSpacing: "-0.025em" },
    h3: { fontWeight: 700, letterSpacing: "-0.02em" },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 }
  },
  body1: { lineHeight: 1.7 },
  button: { fontWeight: 600, letterSpacing: "0.02em" }
};
var radius = {
  default: 4
};
var motion = {
  standard: "all 0.22s cubic-bezier(0.4, 0, 0.2, 1)"
};
var elevation = {
  primaryHover: "0 8px 28px rgba(232,93,4,0.28)",
  primaryActive: "0 2px 8px rgba(232,93,4,0.18)"
};

// src/theme.ts
var theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: color.primary,
      contrastText: color.onPrimary
    },
    secondary: {
      main: color.secondary
    },
    background: {
      default: color.background,
      paper: color.paper
    },
    text: {
      primary: color.textPrimary,
      secondary: color.textSecondary
    },
    divider: color.divider
  },
  typography: {
    fontFamily: typography.fontFamily,
    h1: typography.heading.h1,
    h2: typography.heading.h2,
    h3: typography.heading.h3,
    h4: typography.heading.h4,
    h5: typography.heading.h5,
    h6: typography.heading.h6,
    body1: typography.body1,
    button: typography.button
  },
  shape: { borderRadius: radius.default },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(239,239,236,0.94)",
          color: color.textPrimary
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "12px 28px",
          fontSize: "0.95rem",
          transition: motion.standard,
          "& .MuiButton-endIcon": {
            transition: motion.standard
          },
          "&:hover .MuiButton-endIcon": {
            transform: "translateX(5px)"
          },
          variants: [
            {
              props: { variant: "contained", color: "primary" },
              style: {
                color: color.onPrimary,
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: color.primaryHover,
                  transform: "translateY(-2px)",
                  boxShadow: elevation.primaryHover
                },
                "&:active": {
                  transform: "translateY(0px)",
                  boxShadow: elevation.primaryActive
                }
              }
            },
            {
              props: { variant: "outlined", color: "secondary" },
              style: {
                borderColor: "rgba(0,0,0,0.2)",
                color: color.textPrimary,
                "&:hover": {
                  borderColor: color.secondary,
                  backgroundColor: "rgba(0,0,0,0.03)",
                  transform: "translateY(-1px)"
                },
                "&:active": { transform: "translateY(0px)" }
              }
            }
          ]
        }
      }
    },
    MuiChip: {
      styleOverrides: { root: { borderRadius: radius.default } }
    },
    MuiDivider: {
      styleOverrides: { root: { borderColor: color.divider } }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "rgba(0,0,0,0.15)" },
            "&:hover fieldset": { borderColor: "rgba(0,0,0,0.35)" }
          }
        }
      }
    }
  }
});
var theme_default = theme;

// src/components/Button.tsx
import MuiButton from "@mui/material/Button";
import { jsx } from "react/jsx-runtime";
function Button(props) {
  return /* @__PURE__ */ jsx(MuiButton, { disableElevation: true, ...props });
}

// src/components/Logo.tsx
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Logo({ label = "titung", onClick }) {
  return /* @__PURE__ */ jsxs(
    Box,
    {
      onClick,
      sx: {
        display: "flex",
        alignItems: "baseline",
        gap: "2px",
        cursor: onClick ? "pointer" : void 0
      },
      children: [
        /* @__PURE__ */ jsx2(
          Typography,
          {
            component: "span",
            sx: {
              fontWeight: 900,
              fontSize: "1.35rem",
              letterSpacing: "-0.04em",
              color: "text.primary",
              lineHeight: 1
            },
            children: label
          }
        ),
        /* @__PURE__ */ jsx2(
          Box,
          {
            component: "span",
            sx: {
              width: 6,
              height: 6,
              borderRadius: "50%",
              backgroundColor: "primary.main",
              display: "inline-block",
              mb: "1px"
            }
          }
        )
      ]
    }
  );
}
export {
  Button,
  Logo,
  theme_default as tdsTheme,
  theme,
  tokens_exports as tokens
};
//# sourceMappingURL=index.js.map