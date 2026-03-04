import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#00A99D",
          light: "#00C4B7",
          pale: "#EEF8F7",
        },
        slate: {
          brand: "#1E2B3C",
          gray: "#6B7C93",
        },
        dark: {
          bg: "#0D1520",
          soft: "#111D2C",
          card: "#172030",
          text: "#EDF2F7",
          muted: "#7A90AA",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tight: "-0.03em",
        snug: "-0.02em",
        wide: "0.06em",
        wider: "0.1em",
        widest: "0.12em",
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
