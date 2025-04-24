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
        chivo: ["var(--font-chivo)", "sans-serif"], 
        mono: ["ui-monospace", "SFMono-Regular", "monospace"], 
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--color-secondary)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        "3xl": "2560px",
      },
    
    },
  },
 
} satisfies Config;
