/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      amber: colors.amber,
      emerald: colors.emerald,
      red: colors.red,
      green: colors.green,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}
