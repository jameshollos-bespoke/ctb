const colors = require("tailwindcss/colors")

module.exports = {
  purge: {
    enabled: true,
    content: ["dist/index.html"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#DA291C",
        yellow: "#FFCC00",
        lightGrey: "#E7E7E7",
        darkGrey: "#8C8F91",
        navy: "#071822",
        almostBlack: "#050505",
      },
      fontFamily: {
        neue: "neue-kabel",
      },
      width: {
        searchBar: "28.5rem",
        featureTile: "560px",
      },
      fontSize: {
        none: "0",
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1196px',
    },
    fontFamily: {
      sans: ["montserrat"]
    }
    
  },
  variants: {
    width: ["responsive","group-hover", "hover", "focus"],
    scale: ["hover", "group-hover"],
    fill: ["hover", "focus", "group-hover"],
    opacity: ["hover", "group-hover"],
    extend: {},
  },
  plugins: [require('tailwindcss-debug-screens')],
}
