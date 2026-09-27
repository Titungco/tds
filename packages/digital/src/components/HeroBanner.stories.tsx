import type { Meta, StoryObj } from "@storybook/react";
import Box from "@mui/material/Box";
import { HeroBanner } from "./HeroBanner";

const meta: Meta<typeof HeroBanner> = {
  title: "Sections/HeroBanner",
  component: HeroBanner,
  args: {
    eyebrow: "Titung Design System",
    title: "One design system, every Titung product.",
    description: "Shared tokens, a themed MUI layer, and composed sections you don't have to rebuild per project.",
    primaryAction: { label: "Get started", href: "#" },
    secondaryAction: { label: "View on GitHub", href: "#" },
  },
};
export default meta;

type Story = StoryObj<typeof HeroBanner>;

export const Default: Story = {};

export const WithMedia: Story = {
  args: {
    media: (
      <Box sx={{ bgcolor: "background.paper", border: "1px solid", borderColor: "divider", width: 360, height: 240 }} />
    ),
  },
};

export const NoActions: Story = {
  args: { primaryAction: undefined, secondaryAction: undefined },
};
