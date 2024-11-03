/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors:{
        brand:{
          DEFAULT:"#5c1b86",
          light:"#d7c7e4",
        },
      },
      width:{
        '97': "97%"
      }, 
    },
  },
  plugins: [],
}

