/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans' : ['./fonts/Brandon Grot W02 Bold.woff2']
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/intro.png')",
      }
    },
  },
  plugins: [],
};