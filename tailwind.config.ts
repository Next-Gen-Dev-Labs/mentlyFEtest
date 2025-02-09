import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      colors: {
        mentlyBlue: "#1F0954",
        titleColor: "#06152B",
      },
      screens: {
        "1xl": "1300px",
      },
      fontFamily: {
        "meow-script": ["var(--font-meow-script)"],
      },
    },
  },
  plugins: [require("preline/plugin")],
} satisfies Config;
