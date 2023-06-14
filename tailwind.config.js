/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      cursive: ["Calistoga"],
    },
    screens: {
      sm360: "360px",

      sm570: "570px",

      sm: "640px",

      md: "768px",

      md840: "840px",

      md970: "970px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      height: {
        "calc-nav": "calc(100vh - 48px)",
        "calc-img": "calc(100% - 2rem)",
      },
      colors: {
        primary: "#DC2F02",
        secondary: "#FFD100",
        black: "#151515",
        bgWhole: "#f0f4f5",
        svgBg: "#fdf5f2",
        gray: "#818181",
        lightGray: "#cfcfcf",
        bgColorLoad: "#e2e2e2c4",
      },
    },
  },
  plugins: [],
};
