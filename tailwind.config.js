/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {

      'patternbg': "url('/images/pattern-bg.svg')",
      'patternquote': "url('/images/pattern-quotes.svg')",
      'patterncurve': "url('/images/pattern-curve.svg')",
      'tanya': "url('/images/image-tanya.jpg')",
      'john': "url('/images/image-john.jpg')",
     
    },

  

    extend: {},
  },
  plugins: [],
}