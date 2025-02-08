/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Ensure this is set
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],theme: {
    extend: {
      colors: {
        primary: "#2A1B5C", // Your sidebar background color
        secondary: "#FFFFFF", // Example: white for active items
        accent: "#FBBF24", // Example: yellow for hover effects
      },
    },
  },
  plugins: [],
};
