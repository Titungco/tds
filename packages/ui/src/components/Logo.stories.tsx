import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Primitives/Logo",
  component: Logo,
};
export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {};

export const CustomLabel: Story = {
  args: { label: "tds" },
};

export const Clickable: Story = {
  args: { onClick: () => console.log("Logo clicked") },
};
