/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#22346c",
        secondary: "#95dd57",
        tertiary: "#f6f7ff",
        lightgray: "#6e6e6e",
        lightblack: "#212123"
      }
    },
  },
  plugins: [],
}

