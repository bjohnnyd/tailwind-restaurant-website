module.exports = {
  content: ["./*.html"],
  theme: {
    // breakpoints for screens
    screens: {
      sm: "480px",
      md: "760px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        meat: "url('/static/images/meat.png')",
      },
      colors: {
        greyBackground: "#FCEEE1",
        yellowTheme: "#FFF46B",
        greenTheme: "#EE6B5E",
        strongRed: "#F07363",
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228 39%, 23%)",
        darkGrayishBlue: "hsl(227 12%, 61%)",
        veryDarkBlue: "hsl(223 12%, 13%)",
        veryPaleRed: "hsl(13 100%, 96%)",
        veryLightGray: "hsl(0 0%, 98%)",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
