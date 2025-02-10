import type { Config } from "tailwindcss";

export default {
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
        midnightPurple: "#1F0954",
        honeyGold: "#F0C074",
        softGray: "#F6F6F6",
        pureSnow: "#FDFDFD",
        charcoalGray: "#404040",
        slateLavendar: "#777795",
        linkBlue: "#2B85FE",
        lavendarMist: "#A100FF21",
        royalPurple: "#8C00E3",
        greyBorder: "#C2C2C2",
        greyBg: "#F1F1F1",
        progInfoTextCardBg: "#FFFAF2",
        progInfoTextCardBorder: "#FEE0B1",
        iconWrapperBg: "#FFECCC",
        dateTimeText: "#809FB8",
      },
      backgroundImage: {
        sidebarBgGradient:
          "linear-gradient(to right, #1F0954 40%, transparent 40%)",
      },
      fontSize: { "10px": "10px", "32px": "32px" },
      boxShadow: {
        navbarShadow: "0px 2px 4px 0px #00000010",
        editorShadow: "0px 2px 4px 0px #00000010",
        programInfoShadow: "0px 6px 16px 0px #0000000F",
      },
    },
  },
  plugins: [],
} satisfies Config;
