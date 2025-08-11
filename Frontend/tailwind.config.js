// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        cursivee: ["Playwrite HU" , ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}

