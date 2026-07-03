import * as _mui_material_styles from '@mui/material/styles';
import * as react from 'react';
import { ButtonProps as ButtonProps$1 } from '@mui/material/Button';

declare const theme: _mui_material_styles.Theme;

/**
 * Framework-agnostic design tokens for the Titung Design System.
 * These are the raw values consumed by `theme.ts` and by non-MUI contexts
 * (e.g. CSS variables, native apps, docs).
 */
declare const color: {
    readonly primary: "#E85D04";
    readonly primaryHover: "#F48C06";
    readonly secondary: "#0A0A0A";
    readonly background: "#EFEFEC";
    readonly paper: "#FFFFFF";
    readonly textPrimary: "#0A0A0A";
    readonly textSecondary: "#64748B";
    readonly divider: "rgba(0,0,0,0.08)";
    readonly onPrimary: "#ffffff";
};
declare const typography: {
    readonly fontFamily: "\"Inter\", \"Helvetica Neue\", Arial, sans-serif";
    readonly googleFontUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap";
    readonly weight: {
        readonly regular: 400;
        readonly medium: 500;
        readonly semibold: 600;
        readonly bold: 700;
        readonly extrabold: 800;
        readonly black: 900;
    };
    readonly heading: {
        readonly h1: {
            readonly fontWeight: 800;
            readonly letterSpacing: "-0.03em";
            readonly lineHeight: 1.05;
        };
        readonly h2: {
            readonly fontWeight: 700;
            readonly letterSpacing: "-0.025em";
        };
        readonly h3: {
            readonly fontWeight: 700;
            readonly letterSpacing: "-0.02em";
        };
        readonly h4: {
            readonly fontWeight: 600;
        };
        readonly h5: {
            readonly fontWeight: 600;
        };
        readonly h6: {
            readonly fontWeight: 600;
        };
    };
    readonly body1: {
        readonly lineHeight: 1.7;
    };
    readonly button: {
        readonly fontWeight: 600;
        readonly letterSpacing: "0.02em";
    };
};
declare const radius: {
    readonly default: 4;
};
declare const motion: {
    readonly standard: "all 0.22s cubic-bezier(0.4, 0, 0.2, 1)";
};
declare const elevation: {
    readonly primaryHover: "0 8px 28px rgba(232,93,4,0.28)";
    readonly primaryActive: "0 2px 8px rgba(232,93,4,0.18)";
};

declare const tokens_color: typeof color;
declare const tokens_elevation: typeof elevation;
declare const tokens_motion: typeof motion;
declare const tokens_radius: typeof radius;
declare const tokens_typography: typeof typography;
declare namespace tokens {
  export { tokens_color as color, tokens_elevation as elevation, tokens_motion as motion, tokens_radius as radius, tokens_typography as typography };
}

type ButtonProps = ButtonProps$1;
/**
 * TDS Button. Thin wrapper around MUI's Button — all the visual styling
 * (padding, hover lift, shadow, transitions) comes from the TDS theme, so
 * this component just pins sensible defaults (`disableElevation`) and
 * re-exports the MUI prop surface.
 */
declare function Button(props: ButtonProps): react.JSX.Element;

interface LogoProps {
    /** Wordmark text. Defaults to "titung". */
    label?: string;
    /** Optional click handler; wrap in a Link/anchor from your router for navigation. */
    onClick?: () => void;
}
/**
 * TDS wordmark: lowercase brand name with a solid primary-color dot,
 * matching titung's site header/footer logo treatment.
 */
declare function Logo({ label, onClick }: LogoProps): react.JSX.Element;

export { Button, type ButtonProps, Logo, type LogoProps, theme as tdsTheme, theme, tokens };
