import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/components/**/*.{ts,tsx}', './src/app/**/*.{ts,tsx}', './src/utils/constants/*.ts'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#212121',
      white: '#F8F8F8',
      gray: {
        50: '#f7f7f7',
        100: '#ededed',
        200: '#dfdfdf',
        300: '#c8c8c8',
        400: '#b0b0b0',
        500: '#999999',
        600: '#888888',
        700: '#7b7b7b',
        800: '#676767',
        900: '#545454',
        950: '#363636'
      },
      pink: {
        100: '#F2E9F2',
        200: '#EED7E6',
        300: '#E7B8D3',
        400: '#DF9ABF',
        500: '#D87CAC',
        600: '#AA6589',
        700: '#7D4F67'
      },
      blue: {
        100: '#E5E8FB',
        200: '#CCD4FB',
        300: '#A3B3FD',
        400: '#7B92FE',
        500: '#5271FF',
        600: '#465DC7',
        700: '#3A4990'
      },
      green: {
        50: '#f4fbf2',
        100: '#e7f6e2',
        200: '#ceedc5',
        300: '#a7dd98',
        400: '#67bd50',
        500: '#55a93e',
        600: '#428b2e',
        700: '#366d28',
        800: '#2e5724',
        900: '#27481f',
        950: '#11270c'
      },
      yellow: {
        50: '#fffde7',
        100: '#fffbc1',
        200: '#fff286',
        300: '#ffe341',
        400: '#ffce0e',
        500: '#edb201',
        600: '#d08b00',
        700: '#a66202',
        800: '#894c0a',
        900: '#743e0f',
        950: '#442004'
      },
      red: {
        50: '#fdf3f3',
        100: '#fde4e3',
        200: '#fccecc',
        300: '#f8aca9',
        400: '#f27c77',
        500: '#e7534c',
        600: '#d2332c',
        700: '#b22923',
        800: '#932621',
        900: '#7a2622',
        950: '#420f0d'
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      boxShadow: {
        ms: '2px 2px 6px 0px',
        initiativeItem: '0px 2px 6px 0px #B0B0B0'
      },
      screens: {
        '2lg': '1148px'
      }
    }
  },
  plugins: []
}

export default config
