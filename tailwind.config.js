/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      'pink-pastel': {
        light: '#FFEBEF',
        DEFAULT: '#FFD1DC',
        dark: '#FF7092'
      },
      blue: {
        50: '#e8f6ff',
        100: '#d5eeff',
        200: '#b3deff',
        300: '#85c5ff',
        400: '#569dff',
        500: '#2f76ff',
        600: '#0c47ff',
        700: '#003cff',
        800: '#0638cd',
        900: '#10379f',
        950: '#0a1e5c'
      },
      'blue-nepal': '#91bbc5',
      'blue-pattens': '#D2E4FF',
      gray: {
        200: '#D5DAE1'
      },
      red: {
        50: '#fff0f0',
        100: '#ffdddd',
        200: '#ffc1c1',
        300: '#ff9797',
        400: '#ff5b5b',
        500: '#ff2828',
        600: '#fa0a0a',
        700: '#d30202',
        800: '#ae0606',
        900: '#8f0d0d',
        950: '#4f0000'
      }
    },
    boxShadow: {
      card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
    },
    extend: {}
  },
  plugins: []
};
