import type { Meta, StoryObj } from "@storybook/react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Primitives/Card",
  component: Card,
  args: {
    sx: { maxWidth: 320 },
    children: (
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Card title
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Supporting copy that describes what this card links to.
        </Typography>
      </CardContent>
    ),
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Outlined: Story = {};

export const Elevated: Story = {
  args: { variant: "elevation", elevation: 2 },
};
