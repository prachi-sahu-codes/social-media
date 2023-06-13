/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      cursive: ["Calistoga"],
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      md1: "970px",

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

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
        black: "#151515",
        bgWhole: "#f0f4f5",
        svgBg: "#fdf5f2",
        gray: "#818181",
      },
    },
  },
  plugins: [],
};
