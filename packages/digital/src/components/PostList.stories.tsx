import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PostList } from "./PostList";
import { samplePosts } from "./fixtures";

const meta: Meta<typeof PostList> = {
  title: "Sections/PostList",
  component: PostList,
  args: { posts: samplePosts },
};
export default meta;

type Story = StoryObj<typeof PostList>;

export const Default: Story = {};

export const Empty: Story = {
  args: { posts: [] },
};

export const Paginated: Story = {
  render: () => {
    function PaginatedDemo() {
      const [page, setPage] = useState(1);
      return (
        <PostList
          posts={samplePosts}
          pagination={{ page, totalPages: 5, onPageChange: setPage }}
        />
      );
    }
    return <PaginatedDemo />;
  },
};
