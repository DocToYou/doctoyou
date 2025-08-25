// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursivee: ["Playwrite HU" , ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
