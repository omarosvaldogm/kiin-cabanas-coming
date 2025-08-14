/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        caveat: ['Caveat', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primaryTw: '#978667',
        secondaryTw: '#4B514C',
        labelTw: '#EBD7B2',
        textTw: '#333333',
        fondoClaro:'#FAF8F5',
      }
    },
  },
  plugins: [],
}

