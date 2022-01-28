module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
        // play: ["Playfair Display", "serif"],
      },
      spacing: {
        '2px': '2px',
      },
    },
  },
  plugins: [],
}
