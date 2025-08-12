// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        cursivee: ["Playwrite HU" , ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

