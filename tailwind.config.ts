import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chivo: ["var(--font-chivo)", "sans-serif"]
      },
      colors: {
        primary: "#1F0954",
      },
    },
  },
  plugins: [],
} satisfies Config;
