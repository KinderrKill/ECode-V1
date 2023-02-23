/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'monospace', 'sans-serif'],
        primary: ['Nunito', 'monospace', 'sans-serif'],
        secondary: ['Poppins', 'monospace', 'sans-serif'],
        painted: ['Finger Paint', 'monospace', 'sans-serif'],
      },
      colors: {
        secondary: '#cc3b45',
      },
    },
  },
  plugins: [],
}
