import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stripe: {
          light: "#f6f9fc",
          dark: "#0a2540",
          darker: "#06182c",
          purple: "#635bff",
          purpleHover: "#5851ea",
          cyan: "#00d4ff",
          blue: "#0073e6",
          pink: "#ff6b8b",
          amber: "#ffcb57",
          heading: "#0a2540",
          body: "#425466",
          muted: "#727f96",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        stripe: "0 30px 60px -15px rgba(50, 50, 93, 0.25)",
        "stripe-lg":
          "0 50px 100px -20px rgba(50, 50, 93, 0.25), 0 30px 60px -30px rgba(0, 0, 0, 0.3)",
        "stripe-sm":
          "0 13px 27px -5px rgba(50, 50, 93, 0.15), 0 8px 16px -8px rgba(0, 0, 0, 0.12)",
        "stripe-glow": "0 0 40px -10px rgba(99, 91, 255, 0.45)",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(1.06)" },
        },
        "packet-flow": {
          "0%": { transform: "translateX(0%) scale(0.9)", opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { transform: "translateX(100%) scale(1)", opacity: "0" },
        },
      },
      animation: {
        "pulse-slow": "pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "packet-flow": "packet-flow 2.4s cubic-bezier(0.4, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;

