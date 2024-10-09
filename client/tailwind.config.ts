import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        custom1: "0px 2px 2px 2px rgb(0, 153, 230)",
      },
      fontFamily: {
        DancingScript: ["Dancing Script, cursive"],
        Teko: ["Teko", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
