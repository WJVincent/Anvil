module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      jetbrains: ["JetBrains Mono", "mono"],
    },
    option: {
      backgroundColor: "rgba(68, 71, 90, 0)",
    },
    extend: {
      colors: {
        main: "#282a36", //dark blue-gray
        secondary: "#44475a", //light blue-gray
        accentOne: "#8be9fd", //cyan
        accentTwo: "#50fa7b", //green
        accentThree: "#bd93f9", //purple
        accentFour: "#ff5555", //red
        secondTransparent: "rgba(68, 71, 90, 0)",
        secondTransparent2: "rgba(68, 71, 90, 0.4)",
        secondTransparent3: "rgba(68, 71, 90, 0.8)",
        mainTransparent: "rgb(40,42,54, 0.7)",
        modal: "rgba(0,0,0,0.7)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0, 0.4, 0.6, 1) infinite",
      },
      outline: {
        green: ["1px solid #50fa7b", "1px"],
        teal: ["1px solid #8be9fd", "1px"],
      },
      gridTemplateRows: {
        9: "repeat(11, minmax(0, 1fr))",
      },
    },
  },
  variants: {},
  plugins: [],
};
