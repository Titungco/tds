import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "./Navigation";

const meta: Meta<typeof Navigation> = {
  title: "Sections/Navigation",
  component: Navigation,
  args: {
    links: [
      { label: "Product", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Blog", href: "#" },
    ],
    cta: { label: "Sign in", href: "#" },
  },
};
export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {};

export const NoCta: Story = {
  args: { cta: undefined },
};
