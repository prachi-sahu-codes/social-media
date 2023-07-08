/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      cursive: ["Calistoga"],
    },

    screens: {
      sm360: "360px",

      sm390: "390px",

      sm420: "420px",

      sm450: "450px",

      sm500: "500px",

      sm570: "570px",

      sm670: "670px",

      sm: "640px",

      md730: "730px",

      md: "768px",

      md840: "840px",

      md900: "900px",

      md970: "970px",

      lg: "1024px",

      lg1120: "1120px",

      xl: "1280px",

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      height: {
        "4.5rem": "4.5rem",
        "7.5rem": "7.5rem",
        "calc-nav": "calc(100vh - 48px)",
        "calc-img": "calc(100% - 2rem)",
      },

      colors: {
        primary: "#DC2F02",
        secondary: "#c7310b",
        yellow: "#ff9d00",
        black: "#151515",
        blackLightBg: "#222",
        bgWhole: "#f0f4f5",
        svgBg: "#fdf5f2",
        gray: "#818181",
        lightGray: "#cfcfcf",
        mediumGray: "#979797",
        bgColorLoad: "#e2e2e2c4",
        bgModal: "#54545488",
        shadowDark: "#080707",
      },

      spacing: {
        "1.05rem": "1.05rem",
        "1.3rem": "1.3rem",
        "0.15rem": "0.15rem",
        "0.1rem": "0.1rem",
        "30rem": "30rem",
        "32rem": "32rem",
        "36rem": "36rem",
        "calc-content": "calc(100% - 80px)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
