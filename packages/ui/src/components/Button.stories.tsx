import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Primitives/Button",
  component: Button,
  args: { children: "Start a Project" },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Contained: Story = {
  args: { variant: "contained", color: "primary" },
};

export const Outlined: Story = {
  args: { variant: "outlined", color: "secondary" },
};

export const Text: Story = {
  args: { variant: "text", color: "primary" },
};

export const Disabled: Story = {
  args: { variant: "contained", color: "primary", disabled: true },
};
