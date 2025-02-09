import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "780px",
      lg: "1024px",
      xxl: "1180px",
      xl: "1280px",
      "2xl": "1530px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          400: "#1F0954",
        },
        secondary: {
          400: "#F0C074",
          300: "#FEE0B1",
          250: "#FFECCC",
          200: "#fff9f2",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
