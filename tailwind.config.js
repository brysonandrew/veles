/** @type {import('tailwindcss').Config} */
const { join } = require("path");
const SPACING = require("./tailwind.config-spacing.js");
const COLORS = require("./tailwind.config-colors.json");
const FONT_SIZE = require("./tailwind.config-font-size.js");

module.exports = {
  content: [
    join(__dirname, "./src/**/*.ts"),
    join(__dirname, "./src/**/*.tsx"),
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    minWidth: {
      "6/12": "50%",
      "8/12": "75%",
    },
    maxWidth: {
      "6/12": "50%",
      "8/12": "75%",
    },
    colors: COLORS,
    fontSize: FONT_SIZE,
    extend: {
      spacing: SPACING,
      boxShadow: {
        red: `0 0 1px 1px ${COLORS.red}, 0 0 1px 2px ${COLORS.red}`,
        green: `0 0 1px 1px ${COLORS.green}, 0 0 1px 2px ${COLORS.green}`,
        "red-sm": `0 0 1px 1px ${COLORS.red}`,
        "green-sm": `0 0 1px 1px ${COLORS.green}`,
        yellow: `0 0 1px 1px ${COLORS.white}, 0 0 1px 2px ${COLORS.yellow}`,
        "yellow-sm": `0 0 1px 1px ${COLORS.yellow}`,
        white: `0 0 1px 1px ${COLORS.white}, 0 0 1px 2px ${COLORS.white}`,
        "white-sm": `0 0 1px 1px ${COLORS.white}`,
        gray: `0 0 1px 1px ${COLORS.gray}, 0 0 1px 2px ${COLORS.white}`,
        "gray-sm": `0 0 1px 1px ${COLORS.gray}`,
        "light-sm": `0 0 4px 1px rgba(255,255,255,0.2)`,
        black: `0 0 1px 1px ${COLORS.white}, 0 0 1px 2px ${COLORS.black}`,
        "black-sm": `0 0 1px 1px ${COLORS.black}`,
      },
    },
  },
};
