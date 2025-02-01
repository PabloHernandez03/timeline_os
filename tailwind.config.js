/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        first: '#083D77', // Yale Blue
        second: '#F95738', // Tomato
        third: '#EBEBD3', // Beige
        fourth: '#F4D35E', // Naples yellow
        fifth: '#EE964B', // Sandy brown
      },
    },
  },
  plugins: [],
}

