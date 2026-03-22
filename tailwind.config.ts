import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        stone: {
          50: "var(--color-stone-50)",
          100: "var(--color-stone-100)",
          200: "var(--color-stone-200)",
          300: "var(--color-stone-300)",
          500: "var(--color-stone-500)",
          700: "var(--color-stone-700)",
          900: "var(--color-stone-900)",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)"],
        serif: ["var(--font-display)"],
      },
      letterSpacing: {
        editorial: "0.12em",
      },
      maxWidth: {
        "site": "90rem",
      },
      boxShadow: {
        card: "0 18px 60px rgba(15, 15, 15, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
