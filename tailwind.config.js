/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#ba1528",
        primary: "#391616",
        primaryHover: "#7A3131",
        secondary: "#eae1db",
        contrast: "#F0BC68",
      },
    },
  },
  plugins: [],
};
