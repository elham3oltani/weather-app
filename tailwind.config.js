/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: {
    },
    extend: {
      fontFamily: {
        Nunito: ['Nunito', "sans-serif"] ,
        primary: ['Poppins',"sans-serif"],

      },
      backgroundImage:{
         "banner":"url(/src/assets/beach-banner.jpg)"
      },
    },
  },
  plugins: [],
}
