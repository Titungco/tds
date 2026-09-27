import { createTheme } from "@mui/material/styles";
import { color, typography, radius, motion, elevation } from "./tokens";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: color.primary,
      contrastText: color.onPrimary,
    },
    secondary: {
      main: color.secondary,
    },
    background: {
      default: color.background,
      paper: color.paper,
    },
    text: {
      primary: color.textPrimary,
      secondary: color.textSecondary,
    },
    divider: color.divider,
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
    button: typography.button,
  },
  shape: { borderRadius: radius.default },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(239,239,236,0.94)",
          color: color.textPrimary,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "12px 28px",
          fontSize: "0.95rem",
          transition: motion.standard,
          "& .MuiButton-endIcon": {
            transition: motion.standard,
          },
          "&:hover .MuiButton-endIcon": {
            transform: "translateX(5px)",
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
                  boxShadow: elevation.primaryHover,
                },
                "&:active": {
                  transform: "translateY(0px)",
                  boxShadow: elevation.primaryActive,
                },
              },
            },
            {
              props: { variant: "outlined", color: "secondary" },
              style: {
                borderColor: "rgba(0,0,0,0.2)",
                color: color.textPrimary,
                "&:hover": {
                  borderColor: color.secondary,
                  backgroundColor: "rgba(0,0,0,0.03)",
                  transform: "translateY(-1px)",
                },
                "&:active": { transform: "translateY(0px)" },
              },
            },
          ],
        },
      },
    },
    MuiChip: {
      styleOverrides: { root: { borderRadius: radius.default } },
    },
    MuiDivider: {
      styleOverrides: { root: { borderColor: color.divider } },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "rgba(0,0,0,0.15)" },
            "&:hover fieldset": { borderColor: "rgba(0,0,0,0.35)" },
          },
        },
      },
    },
  },
});

export default theme;
