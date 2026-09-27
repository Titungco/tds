import MuiButton, { type ButtonProps as MuiButtonProps } from "@mui/material/Button";

export type ButtonProps = MuiButtonProps;

/**
 * TDS Button. Thin wrapper around MUI's Button — all the visual styling
 * (padding, hover lift, shadow, transitions) comes from the TDS theme, so
 * this component just pins sensible defaults (`disableElevation`) and
 * re-exports the MUI prop surface.
 */
export function Button(props: ButtonProps) {
  return <MuiButton disableElevation {...props} />;
}
