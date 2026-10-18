import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08291c",
        surface: "#072418",
        "on-surface": "#beedd4",
        "on-surface-variant": "#cdc6b3",
        primary: "#ffeeac",
        "primary-container": "#e6d27a",
        "on-primary": "#393000",
        "on-primary-container": "#68590b",
        secondary: "#87d898",
        "secondary-container": "#195c3b",
        "secondary-fixed": "#a2f5b2",
        tertiary: "#c0feb9",
        "tertiary-container": "#a5e19e",
        "surface-container-lowest": "#041b12",
        "surface-container-low": "#092f20",
        "surface-container": "#0d3626",
        "surface-container-high": "#11422f",
        "surface-container-highest": "#154d37",
        "surface-variant": "#0f3c2b",
        outline: "#96907f",
        "outline-variant": "#4b4738",
        error: "#ffb4ab",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      fontSize: {
        "display-hero": [
          "clamp(2.75rem, 6vw + 1rem, 4.5rem)",
          { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "500" },
        ],
        "headline-lg": [
          "clamp(2rem, 4vw + 1rem, 3rem)",
          { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "500" },
        ],
        "headline-md": [
          "2.25rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "400" },
        ],
        "headline-sm": ["1.5rem", { lineHeight: "1.3", fontWeight: "500" }],
        "title-lg": ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }],
        "title-md": ["1rem", { lineHeight: "1.5", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body-md": ["0.9375rem", { lineHeight: "1.7" }],
        "body-sm": ["0.8125rem", { lineHeight: "1.6" }],
        "label-caps": [
          "0.75rem",
          { lineHeight: "1.4", letterSpacing: "0.12em", fontWeight: "600" },
        ],
        "label-md": ["0.875rem", { lineHeight: "1.5", fontWeight: "500" }],
      },
      spacing: {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        "space-2xl": "4rem",
        "space-3xl": "6rem",
        "margin-mobile": "1.25rem",
        "margin-tablet": "2rem",
        gutter: "1.5rem",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
      },
      keyframes: {
        "firefly-float": {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "25%": { transform: "translate3d(6px, -14px, 0)" },
          "50%": { transform: "translate3d(-4px, -22px, 0)" },
          "75%": { transform: "translate3d(-8px, -8px, 0)" },
        },
        "firefly-pulse": {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.7" },
        },
        "frame-sway": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(1.2deg)" },
        },
        "frame-sway-rev": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-1.2deg)" },
        },
      },
      animation: {
        "firefly-float": "firefly-float 14s ease-in-out infinite",
        "firefly-pulse": "firefly-pulse 4s ease-in-out infinite",
        "frame-sway": "frame-sway 8s ease-in-out infinite",
        "frame-sway-rev": "frame-sway-rev 9.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
