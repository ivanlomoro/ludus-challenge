/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "forum" : ['Forum', 'sans-serif'],
        "outfit": ['Outfit', 'sans-serif']
      },
      height: {
        '1/3': '30vh',
      },
      colors:{
        primary:'#154D49',
      }
    },
  },
  plugins: [],
}

