/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
     backdropBlur:{
      'dashboardImg': "url('task1\src\Assets\AboutusImg\Vector.png')"
     }
    },
  },
  plugins: [],
}

