import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        caramel: "var(--color-caramel)",
        "caramel-light": "var(--color-caramel-light)",
        chocolate: "#6e393f",
        "chocolate-dark": "var(--color-chocolate-dark)",
        cream: "var(--color-cream)",
        beige: "var(--color-beige)",
      },
    },
  },
  plugins: [],
};
export default config;
