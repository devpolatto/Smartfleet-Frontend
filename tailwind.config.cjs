const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, './src/**/*.{js,ts,jsx,tsx'),
    "./src/*{.html, js}",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/view/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'background-primary': '#F2F5FE',
        'sidenav': '#0D1520',
        'header': '#121927'
      }
    },
  },
  plugins: [],
}
