import type { LinkComponentProps } from "./types";

export function DefaultLink({ href, children, className }: LinkComponentProps) {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
