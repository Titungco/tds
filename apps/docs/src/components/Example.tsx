import type { CSSProperties, ReactNode } from "react";

export interface ExampleProps {
  children: ReactNode;
  /** Set for full-width sections (HeroBanner, Navigation) instead of centered/wrapped controls. */
  fullWidth?: boolean;
}

/**
 * Bordered preview box for a live @tds/ui / @tds/digital example embedded
 * directly in an MDX doc page — visually separates "this actually renders"
 * from surrounding prose/code blocks.
 */
export function Example({ children, fullWidth }: ExampleProps) {
  const style: CSSProperties = {
    border: "1px solid var(--ifm-color-emphasis-300)",
    borderRadius: 8,
    marginBottom: 16,
    overflow: "hidden",
    ...(fullWidth
      ? { padding: 0 }
      : {
          padding: 24,
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          alignItems: "center",
        }),
  };

  return <div style={style}>{children}</div>;
}
