import type { Meta, StoryObj } from "@storybook/react";
import Box from "@mui/material/Box";
import { Grid } from "./Grid";

function Tile({ label }: { label: string }) {
  return (
    <Box sx={{ bgcolor: "background.paper", border: "1px solid", borderColor: "divider", p: 2, textAlign: "center" }}>
      {label}
    </Box>
  );
}

const meta: Meta<typeof Grid> = {
  title: "Primitives/Grid",
  component: Grid,
};
export default meta;

type Story = StoryObj<typeof Grid>;

export const ThreeColumns: Story = {
  render: () => (
    <Grid container spacing={2}>
      {["One", "Two", "Three"].map((label) => (
        <Grid key={label} size={{ xs: 12, sm: 4 }}>
          <Tile label={label} />
        </Grid>
      ))}
    </Grid>
  ),
};
