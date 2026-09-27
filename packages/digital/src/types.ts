import type { ComponentType, ReactNode } from "react";

/**
 * A single post-like item, shared by LatestNews and PostList. Deliberately
 * CMS-agnostic — a WordPress consumer maps `WP_Post`/REST API shapes onto
 * this before rendering; the section never fetches data itself.
 */
export interface PostSummary {
  id: string;
  title: string;
  href: string;
  excerpt?: string;
  date?: string;
  imageUrl?: string;
  author?: string;
}

export interface LinkComponentProps {
  href: string;
  children?: ReactNode;
  className?: string;
}

/**
 * Swap in a router's Link (Next.js, React Router, WP's own anchor) without
 * this package depending on any router. Defaults to a plain `<a>`.
 */
export type LinkComponent = ComponentType<LinkComponentProps>;
