/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0f172a',
      },
      screens: {
        xsm: '425px',
      },
      aspectRatio: {
        '2/3': '2 / 3',
        '3/4': '3 / 4',
      },
    },
  },
  plugins: [],
}
