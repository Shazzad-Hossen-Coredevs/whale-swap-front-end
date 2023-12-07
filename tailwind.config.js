/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
      },
      colors: {
        primary: "#0094FF"
      },
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}