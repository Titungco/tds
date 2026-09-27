import MuiCard, { type CardProps as MuiCardProps } from "@mui/material/Card";

export type CardProps = MuiCardProps;

/**
 * TDS Card. Thin wrapper around MUI's Card — radius and surface color come
 * from the TDS theme; this pins `variant="outlined"` so cards read as flat
 * surfaces rather than MUI's default drop-shadow.
 */
export function Card(props: CardProps) {
  return <MuiCard variant="outlined" {...props} />;
}
