import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdf2f2",
          100: "#f0c4c4",
          200: "#d46a6a",
          300: "#b33a3a",
          400: "#8b2525",
          500: "#6b1e1e",
          600: "#501515",
          700: "#3d1010",
          800: "#2a0a0a",
          900: "#1a0505",
        },
        accent: {
          300: "#ff4d4d",
          400: "#ff2d2d",
          500: "#dc0000",
          600: "#b80000",
          700: "#900000",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
