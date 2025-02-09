import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#1F0954",
        },
        grey: {
          DEFAULT: "#AAAAAA",
          text: "#777795",
        },
      },
      fontFamily: {
        chivo: "var(--font-chivo)",
      },
    },
  },
  plugins: [],
} satisfies Config;
