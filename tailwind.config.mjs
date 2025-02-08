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
      colors: {
        lightBg: "#f8f9fa",
        darkBg: "#1e1e2e",
        lightText: "#333",
        darkText: "#fff",
      },
    },
  },
  plugins: [],
};
