import MuiContainer, { type ContainerProps as MuiContainerProps } from "@mui/material/Container";

export type ContainerProps = MuiContainerProps;

/**
 * TDS Container. Thin wrapper around MUI's Container, defaulting to the
 * reading width used across Titung marketing pages.
 */
export function Container(props: ContainerProps) {
  return <MuiContainer maxWidth="lg" {...props} />;
}
