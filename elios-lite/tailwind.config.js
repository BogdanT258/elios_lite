/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#003061',
        'secondary': '#16100e',
        'header': '#1b0b1b'
      }
    },
  },
  plugins: [],
}