import type { Meta, StoryObj } from "@storybook/react";
import { LatestNews } from "./LatestNews";
import { samplePosts } from "./fixtures";

const meta: Meta<typeof LatestNews> = {
  title: "Sections/LatestNews",
  component: LatestNews,
  args: { posts: samplePosts },
};
export default meta;

type Story = StoryObj<typeof LatestNews>;

export const Default: Story = {};

export const NoImages: Story = {
  args: { posts: samplePosts.map(({ imageUrl: _imageUrl, ...post }) => post) },
};
