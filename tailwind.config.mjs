/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", 
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Chivo", "sans-serif"],
      },
      colors: {
        primary: "#2A1B5C", 
        secondary: "#FFFFFF", 
        tertiary: "#F0C074", 
      },
    },
  },
  plugins: [],
};
