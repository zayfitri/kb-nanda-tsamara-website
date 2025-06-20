// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Pastikan TIDAK ADA blok 'colors' di sini
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Ini boleh tetap ada untuk font
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}