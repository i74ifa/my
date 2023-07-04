/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        readix: ["Readex Pro", "sans-serif"],
        ibmPlex: ["IBM Plex Sans Arabic", "sans-serif"],
      },
      colors: {
        main: {
          50: "color(display-p3 0.925 0.937 0.953 / <alpha-value>)",
          100: "color(display-p3 0.851 0.878 0.91 / <alpha-value>)",
          200: "color(display-p3 0.714 0.765 0.827 / <alpha-value>)",
          300: "color(display-p3 0.565 0.643 0.733 / <alpha-value>)",
          400: "color(display-p3 0.427 0.529 0.651 / <alpha-value>)",
          500: "color(display-p3 0.318 0.408 0.522 / <alpha-value>)",
          600: "color(display-p3 0.227 0.294 0.373 / <alpha-value>)",
          700: "color(display-p3 0.08 0.11 0.13 / <alpha-value>)",
          800: "color(display-p3 0.055 0.071 0.09 / <alpha-value>)",
          900: "color(display-p3 0.031 0.039 0.051 / <alpha-value>)",
          950: "color(display-p3 0.016 0.02 0.024 / <alpha-value>)",
        },
        mainBg: "rgba(var(--main-color-bg), <alpha-value>)",
        "footer-main": "rgba(var(--footer-main))",
        "footer-main-tint": "rgba(var(--footer-main-tint))",
        "footer-main-color": "rgba(var(--footer-main-color))",
        dd: "rgb(var(--main), <alpha-value>)",
        mainColor: "var(--main-color)",
        successDark: "var(--success-dark)",
        from: {
          config: {
            500: "yellow",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
