/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx, html}",
    "./public/*.html",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#563459',
          200: '#A28F9D',
        },
        secondary: {
          100: '#475841',
          200: '#142009',
        },
        background: '#FFFFFF',

      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  plugins: [],
}
