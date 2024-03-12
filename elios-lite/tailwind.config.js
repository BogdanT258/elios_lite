/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f34c52',
        'secondary': '#292636',
        'header': '#1b0b1b'
      }
    },
  },
  plugins: [],
}