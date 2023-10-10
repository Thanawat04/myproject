/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'greenHover' : '#3d847d',
      'pink' : '#f272b5',
      'pinkFocus' : '#eb258d',
      'blueFocus':'#003dc3',
      'blue' : '#4877e1',
      'red' : '#f80000',
      'redFocus': '#b00000'
    },
    fontFamily: {
      rbtM: ['Roboto-Medium', 'sans-serif'],
      rbtB: ['Roboto-Bold', 'sans-serif']
    }
  },
  plugins: [require("daisyui")],
}
