/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        givry: {
          50: "#fdf8ed",
          100: "#f5e5c0", // Primary
          200: "#efd498",
          300: "#e6ba63",
          400: "#e0a33f",
          500: "#d88528",
          600: "#bf6520",
          700: "#9f491e",
          800: "#823a1e",
          900: "#6b311c",
          950: "#3d170b",
        },
      },
    },
  },
  plugins: [],
};
