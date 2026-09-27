import MuiGrid, { type GridProps as MuiGridProps } from "@mui/material/Grid";

export type GridProps = MuiGridProps;

/**
 * TDS Grid. Direct re-export of MUI's Grid — the layout primitive
 * @tds/digital sections compose with; no TDS-specific behavior needed.
 */
export function Grid(props: GridProps) {
  return <MuiGrid {...props} />;
}
