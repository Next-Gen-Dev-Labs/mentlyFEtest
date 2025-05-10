module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
      './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
            gray: {
              50: '#F3F3F3',
              100: '#F4F4F4',
              150: '#404040',
              200: '#F2F2F2',
              300: '#D8D8D8',
              400: '#C8C8C8',
              500: '#BDBDBD',
              600: '#A5A5A5',
              700: '#707991',
              800: '#595564',
              900: '#4F4F4F',
              901: '#D7D7D7',
              902: '#374557',
              903: '#E1E7EC',
              904: '#7D8DA6',
              dark: '#4D4D4D',
            },
            blue: {
              50: '#F9F7FF',
              100: '#E3ECF9',
              200: '#D4E0F3',
              300: '#ABBEE0',
              400: '#8196B5',
              500: '#62B2FD',
              600: '#0077FF',
              700: '#1C0AE1',
              800: '#0214BD38', // custom alpha
              801: '#F4F5FA', 
            },
            purple: {
              50: '#F1EEFF',
              100: '#DDD6FB',
              200: '#DDCEEE',
              300: '#A4A5B8',
              400: '#A195C0',
              500: '#9985A7',
              600: '#8B72FC',
              700: '#6F01D0',
              800: '#53547B',
              900: '#1F0954',
              lightAlpha30: '#6F01D04D',
              lightAlpha11: '#6F01D01C',
            },
            green: {
              100: '#E8FDFB',
              200: '#D4F3D4',
              300: '#9BDFC4',
              400: '#A1BDBA',
              500: '#58948E',
              600: '#2AC10033',
              700: '#1F8B01',
              800: '#186648',
              900: '#008000',
              901: '#07C500',
            },
            red: {
              100: '#FFEDED',
              200: '#F99BAB',
              300: '#D09696',
              400: '#FF3E3E',
              500: '#D83535',
            },
            yellow: {
              100: '#F0C074',
              200: '#FFB44F',
            },
            black: {
              100: '#000000',
              200: '#00000033', // 20% opacity
              300: '#00000080', // 50% opacity
            },
            white: {
              DEFAULT: '#FFFFFF',
              alpha12: '#FFFFFF1F', // low-opacity white
              blur: "#E3D7FF29"
            },
            neutral: {
              100: '#EFEFF8',
              200: '#D0D5DD',
              300: '#DBDBDB',
              400: '#AAAAAA',
              500: '#9D92A6',
              600: '#918C9C',
              700: '#A3A3A3',
              800: '#C2C2C2',
              900: '#B0B0B0',
            },
            violet: {
              100: '#F3ECF9',
              200: '#E0DDFF',
              300: '#E7DDFF4D',
              400: '#9F97F7',
            },
            pink: {
              100: '#F99BAB',
            },
            amber: {
              100: '#FFB44F',
            },
            indigo: {
              100: '#011627',
              200: '#340260',
            },
            custom: {
              snow: '#FDFDFD',
              charcoal: '#222529',
              concrete: '#6C6C6C',
              mist: '#A5A5A5',
            },
          },
          fontFamily: {
            "Chivo": "Chivo",
            "Poppins": "Poppins",
            "OpenSans": "Open Sans",
          }
      },
    },
    plugins: [
        require('tailwindcss-animated')
    ],
  }
  