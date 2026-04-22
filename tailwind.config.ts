import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#0A0A0A",
          card: "#121212",
          elevated: "#1A1A1A",
        },
        border: {
          DEFAULT: "#282828",
          subtle: "#1F1F1F",
        },
        primary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
          DEFAULT: "#7c3aed",
        },
        accent: {
          pink: "#EC4899",
          magenta: "#DB2777",
          coral: "#F97316",
        },
        success: "#10B981",
        danger: "#EF4444",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse at top, rgba(124,58,237,0.25), transparent 60%), radial-gradient(ellipse at bottom, #0A0A0A, #000)",
        "card-glass":
          "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0))",
        "cta-gradient": "linear-gradient(90deg, #EF4444, #F97316)",
        "primary-gradient": "linear-gradient(90deg, #7C3AED, #EC4899)",
      },
      boxShadow: {
        "glow-primary": "0 0 40px rgba(124,58,237,0.4)",
        "glow-pink": "0 0 60px rgba(236,72,153,0.35)",
        glass:
          "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.5)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.1)" },
        },
        "count-up": {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 30s linear infinite",
        "marquee-right": "marquee-right 30s linear infinite",
        "pulse-glow": "pulse-glow 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
