/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        text: "#828282",
        mentlyBlue: "#1F0954",
        appLightBlue: "#CEE1FB",
        appWarningBlue: "#086BED",
        appWarningtext: "#777795",
        appDeepTextBlue: "#494A71"
      },
    },
  },
  plugins: [],
}
