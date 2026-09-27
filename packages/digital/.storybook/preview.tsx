import type { Preview } from "@storybook/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "@tds/ui";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "tds-background",
      values: [{ name: "tds-background", value: "#EFEFEC" }],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
