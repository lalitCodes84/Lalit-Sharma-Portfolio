/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          optimusRed: "#B11226",
          optimusOrange: "#D92121",
          optimusWhite: "#D3D3D3",
          optimusGrey: "#A8A9AD",
          optimusBlue: "#0047AB",
          optimusSkyblue: "#4682BF",
        },
        fontFamily: {
          deceptibotsChromium: ["DeceptibotsChromium", "sans-serif"],
          deceptibotsHalftone: ["DeceptibotsHalftone", "sans-serif"],
          megatronCondensed: ["MegatronCondensed", "sans-serif"],
          megatronHollowCondensed: ["MegatronHollowCondensed", "sans-serif"],
          transformers: ["Transformers", "sans-serif"],
        },
        boxShadow: {
          'shadowMain': 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
          'shadowInner':'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
          'bw-gradient-shadow':'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
        },
      },
    },
    plugins: [],
  };