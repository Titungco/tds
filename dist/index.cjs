"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  Logo: () => Logo,
  tdsTheme: () => theme_default,
  theme: () => theme,
  tokens: () => tokens_exports
});
module.exports = __toCommonJS(index_exports);

// src/theme.ts
var import_styles = require("@mui/material/styles");

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
var theme = (0, import_styles.createTheme)({
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
var import_Button = __toESM(require("@mui/material/Button"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
function Button(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Button.default, { disableElevation: true, ...props });
}

// src/components/Logo.tsx
var import_Box = __toESM(require("@mui/material/Box"), 1);
var import_Typography = __toESM(require("@mui/material/Typography"), 1);
var import_jsx_runtime2 = require("react/jsx-runtime");
function Logo({ label = "titung", onClick }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    import_Box.default,
    {
      onClick,
      sx: {
        display: "flex",
        alignItems: "baseline",
        gap: "2px",
        cursor: onClick ? "pointer" : void 0
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_Typography.default,
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
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          import_Box.default,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Logo,
  tdsTheme,
  theme,
  tokens
});
//# sourceMappingURL=index.cjs.map