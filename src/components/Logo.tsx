import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface LogoProps {
  /** Wordmark text. Defaults to "titung". */
  label?: string;
  /** Optional click handler; wrap in a Link/anchor from your router for navigation. */
  onClick?: () => void;
}

/**
 * TDS wordmark: lowercase brand name with a solid primary-color dot,
 * matching titung's site header/footer logo treatment.
 */
export function Logo({ label = "titung", onClick }: LogoProps) {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "baseline",
        gap: "2px",
        cursor: onClick ? "pointer" : undefined,
      }}
    >
      <Typography
        component="span"
        sx={{
          fontWeight: 900,
          fontSize: "1.35rem",
          letterSpacing: "-0.04em",
          color: "text.primary",
          lineHeight: 1,
        }}
      >
        {label}
      </Typography>
      <Box
        component="span"
        sx={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "primary.main",
          display: "inline-block",
          mb: "1px",
        }}
      />
    </Box>
  );
}
