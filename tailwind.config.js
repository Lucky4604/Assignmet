/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f8fafb",
          "200": "#f4f4f4",
        },
        background: "#fff",
        gray: {
          "100": "#fcfcfd",
          "200": "#fafafa",
          "300": "rgba(3, 2, 41, 0.7)",
          "400": "rgba(255, 255, 255, 0.8)",
        },
        lavender: {
          "100": "#e8e9ff",
          "200": "#cfcfe6",
        },
        blueviolet: {
          "100": "#7950f2",
          "200": "#7750f1",
        },
        grey: "#a0a3bd",
        "text-color": "#22285e",
        primary: "#9058ff",
        dark: "#212121",
        lightcyan: "#e4fff8",
        mediumseagreen: "#0dad82",
        gainsboro: {
          "100": "#dee0e0",
          "200": "#dbdbdb",
          "300": "#d9d9d9",
        },
        powderblue: "#c9e6de",
        aliceblue: {
          "100": "#e8eff7",
          "200": "#daf1fb",
        },
        lightblue: "#c2d9e0",
        secondary: "#58a4ff",
        black1: "#000",
        thistle: {
          "100": "#e3d5ff",
          "200": "#c9bde6",
        },
        darkslategray: "#373b5c",
        "main-black": "#313145",
        lightgray: "rgba(206, 206, 206, 0.7)",
        "black-100": "#1c1d22",
        "black-50": "#53545d",
      },
      spacing: {},
      fontFamily: {
        urbanist: "Urbanist",
        poppins: "Poppins",
        nunito: "Nunito",
        "paragraph-2-regular": "Inter",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
        "8xs": "5px",
        mini: "15px",
        "481xl": "500px",
      },
    },
    fontSize: {
      lg: "18px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      xl: "20px",
      "2xl-8": "21.8px",
      mid: "17px",
      xs: "12px",
      "9xl": "28px",
      "3xl": "22px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
