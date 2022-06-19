/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
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
