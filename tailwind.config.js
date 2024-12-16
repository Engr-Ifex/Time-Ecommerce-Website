/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url(/src/Components/Images/BG.png)",
        'watch':"url(/src/Components/Images/watch.png)",
      },
      fontFamily: {
        body: ['Manrope', 'sans-serif']
      },
      backgroundSize: {
        '150%': '150%',
        '200%': '200%',
      },
    },
  },
  plugins: [],
}

