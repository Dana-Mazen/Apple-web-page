/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      
      colors: {
       vuejs: {
         100 : "#e08079",
         200: "#e08077"
       }
      }
    },
  },
  plugins: [],
}

