module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: "#282a36", //dark blue-gray
        secondary: "#44475a", //light blue-gray
        accentOne: "#8be9fd", //cyan
        accentTwo: "#50fa7b", //green
        accentThree: "#bd93f9", //purple
        modal: "rgba(0,0,0,0.7)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0, 0.4, 0.6, 1) infinite",
      },
    },
  },
  variants: {},
  plugins: [],
};
