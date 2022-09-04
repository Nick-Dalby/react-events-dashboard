/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'cards': 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      gridTemplateRows: {
        'auto1': 'auto 1fr',
      },
    },
  },
  plugins: [],
}
