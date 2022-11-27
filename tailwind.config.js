/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: {
        DEFAULT: "#021145",
        blue: colors.blue,
        light: "#00AEEF",
      },
      "side-green": "#002604",
      "side-light": "#005309",
      "dash-white": "#F9F9F9",
      "tx-dark": "#111827",
      "tx-light-dark": "#6B7280",
      "outline-gray": "#E5E7EB",
      gray: colors.gray,
      white: colors.white,
      lavender: "#e9e9ea",
      beige: "#e9fae2",
      black: "#000000",
      neutral: "#D1D5DB",
      accentBlue: "#50C8FC",
      secondary: "#005BD4",
    },
    fontFamily: {
      sans: ["Red Hat Text", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};