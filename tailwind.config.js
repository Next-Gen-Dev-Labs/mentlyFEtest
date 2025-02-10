const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      current: "currentColor",
      white: "#FFFFFF",
      black: "#1C2434",
      "black-2": "#010101",
      body: "#64748B",
      bodydark: "#AEB7C0",
      bodydark1: "#DEE4EE",
      bodydark2: "#8A99AF",
      primary: "#3C50E0",
      secondary: "#80CAEE",
      stroke: "#E2E8F0",
      gray: "#EFF4FB",
      graydark: "#333A48",
      "gray-2": "#F7F9FC",
      "gray-3": "#FAFAFA",
      boxdark: "#1F0954",
      "boxdark-2": "#1A222C",
      strokedark: "#2E3A47",
      "meta-1": "#DC3545",
      "meta-2": "#EFF2F7",
      "meta-3": "#10B981",
      "meta-4": "#313D4A",
      "meta-5": "#259AE6",
      "meta-6": "#FFBA00",
      "meta-7": "#FF6766",
      "meta-8": "#F0950C",
      "meta-9": "#E5E7EB",
      success: "#219653",
      danger: "#D34053",
      warning: "#FFA70B",
      text: "#828282",
    },
    screens: {
      "2xsm": "375px",
      xsm: "425px",
      "3xl": "2000px",
      ...defaultTheme.screens,
    },
    extend: {
      zIndex: {
        999999: "999999",
        99999: "99999",
        9999: "9999",
        999: "999",
        99: "99",
        9: "9",
        1: "1",
      },

      transitionProperty: { width: "width", stroke: "stroke" },
      borderWidth: {
        6: "6px",
      },
      boxShadow: {
        default: "0px 8px 13px -3px rgba(0, 0, 0, 0.07)",
      },
      dropShadow: {
        1: "0px 1px 0px #E2E8F0",
        2: "0px 1px 4px rgba(0, 0, 0, 0.12)",
      },
      keyframes: {
        rotating: {
          "0%, 100%": { transform: "rotate(360deg)" },
          "50%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "ping-once": "ping 5s cubic-bezier(0, 0, 0.2, 1)",
        rotating: "rotating 30s linear infinite",
        "spin-1.5": "spin 1.5s linear infinite",
        "spin-2": "spin 2s linear infinite",
        "spin-3": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
