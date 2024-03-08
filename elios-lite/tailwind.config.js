/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3d3d3d',
        'secondary': '#00b1ae',
        'header': '#1b0b1b'
      }
    },
  },
  plugins: [],
}