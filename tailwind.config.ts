import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        grayBackground: "#f8f6f3",
      },
      fontFamily: {
        sacramento: ["Sacramento", "sans-serif"],
      },
    },
  },
  plugins: [],
  safelist: ["bg-red-200", "bg-green-200", "bg-orange-200"],
} satisfies Config;
