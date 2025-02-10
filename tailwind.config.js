/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", 
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],theme: {
    extend: {
      fontFamily: {
        sans: ["Chivo", "sans-serif"],
        handwrite: ['"Lucida Handwriting"', 'cursive'],
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
