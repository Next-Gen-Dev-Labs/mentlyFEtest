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
      },
      backgroundImage: {
        'home-hero' : 'linear-gradient(180deg, #00000055, #255c9955), url("https://res.cloudinary.com/dzfqshhzu/image/upload/v1737663340/heroBg_jlmxlp.jpg")',
      },
      backgroundColor: {
        'purple' : '#340260',
        'light-purple' : '#DDD6FB',
        'grey' : '#E1E7EC',
        'light-grey' : '#FDFDFD',
        '' : '#255C99',
        'light-red': '#FFEDED',
        'green': '#2AC10033',
      },
      spacing: {
        '50' : '50px',
        '100' : '100px',
        '150' : '150px',
        '200' : '200px',
        '10p' : '10%',
        '15p' : '15%',
        '20p' : '20%',
        '75px' : '75px',
        '100vh' : 'calc( 100vh - 20px )',
      },
      fontSize: {
        'sm' : '12px',
        'base' : '15px',
        'lg' : '17px',
        'xl' : '20px',
        '2xl' : '3vw',
        '25px': '25px',
        '30px': '30px',
        '3xl' : '5vw',
        'mxl' : '12vw',
      },
      lineHeight: {
        '6vw' : '6vw',
      },
      textColor: {
        'dark' : '#4F4F4F',
        'purple' : '#1F0954',
        'grey' : '#BDBDBD',
        'grey2' : '#595564',
        'yellow' : '#F0C074',

      }
    },
  },
  plugins: [],
} satisfies Config;
