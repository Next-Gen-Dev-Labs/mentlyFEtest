import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        mentlyBlue: '#1F0954',
        mentlyLighYellow: '#FEE0B1',
        mentlyYellow: '#F0C074',
        mentlyLink: '#2B85FE',
        mentlyGray: '#C2C2C2',
        mentlyGray2: '#828282',
        mentlyBgCard: '#FFFAF2',
      },
      boxShadow: {
        custom: '0px 2px 4px 0px #00000010',
      },
    },
  },
  plugins: [],
} satisfies Config;
