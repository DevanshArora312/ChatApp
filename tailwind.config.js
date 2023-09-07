/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      colors: {
        primaryLight : `#FFFFFF`,
        secondaryLight: `#D8E7F1`,
        primaryBlack : `#000000`,
        secondaryBlack : `#242424`,
        sapphire  : `#3598DB`,
        graphite  : `#C5D3DC`,
        grass : `#41D9CE`
      }
    },
  },
  plugins: [],
}

