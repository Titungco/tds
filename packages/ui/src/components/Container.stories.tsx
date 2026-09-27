import type { Meta, StoryObj } from "@storybook/react";
import Box from "@mui/material/Box";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Primitives/Container",
  component: Container,
  args: {
    children: (
      <Box sx={{ bgcolor: "background.paper", border: "1px dashed", borderColor: "divider", p: 2 }}>
        Content constrained to the container's max width.
      </Box>
    ),
  },
};
export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {};

export const NarrowReadingWidth: Story = {
  args: { maxWidth: "sm" },
};
