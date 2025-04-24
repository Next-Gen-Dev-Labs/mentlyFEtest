import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "white1": "#FDFDFD",
        "purple1" : "#6F01D0",
        "purple2" : "#1F0954",
        "white2" : "#BDBDBD",
        "white3" : "#918C9C",
        "grey1" : "#E1E7EC",
        "blue1" : "#0077FF",
        "blue2" : "#D4E0F3,",
        "grey3" : "#595564",
        "border1" : "#E1E7EC",
        "pink1" : "#F99BAB",
        "orange1" : "#FFB44F",
        "grey2" : "#F9F7FF",
        "pink2" : "#FFEDED",
        "pink3" : "#D83535",
        "pink4" : "#D09696",
        "gray" : "#4F4F4F"
      }
    },
  },
  plugins: [],
};
export default config;
