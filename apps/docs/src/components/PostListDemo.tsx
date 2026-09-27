import { useState } from "react";
import { PostList, type PostSummary } from "@tds/digital";

export const samplePosts: PostSummary[] = [
  {
    id: "1",
    title: "Why we rebuilt our design system on MUI",
    excerpt: "The tokens, the tradeoffs, and what we'd do differently.",
    href: "#",
    date: "Sep 12, 2026",
    author: "Titung Team",
  },
  {
    id: "2",
    title: "Shipping a block theme without shipping React to every visitor",
    excerpt: "Selective hydration, explained with a real example.",
    href: "#",
    date: "Sep 5, 2026",
    author: "Titung Team",
  },
];

/** Live interactive demo embedded in docs/sections.mdx — real pagination state, no real data fetching. */
export function PostListDemo() {
  const [page, setPage] = useState(1);
  return (
    <PostList
      posts={samplePosts}
      pagination={{ page, totalPages: 5, onPageChange: setPage }}
    />
  );
}
