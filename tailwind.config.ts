import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0a",
        muted: "#525252",
        soft: "#a3a3a3",
        accent: "#ff5c00",
        impact: "#6366f1",
        success: "#16a34a",
      },
      fontFamily: {
        sans: ["var(--font-dm)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
