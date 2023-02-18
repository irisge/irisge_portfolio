/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'loading-col': 'auto 1fr auto',
      },
      gridTemplateRows: {
        'loading-row': 'auto 1fr auto',
      },
      colors: {
        dark: '#00071F',
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans'],
        dancing: ['Dancing Script', 'cursive'],
        jost: ['Jost', 'sans'],
      },
      animation: {
        revelation: 'revelation 4s ease-linear',
      },
      keyframes: {
        '0%': { transform: 'scale-0' },
        '50%': { transform: 'scale-50' },
        '100%': { transform: 'scale-100' },
      },
    },
  },
  plugins: [],
};
