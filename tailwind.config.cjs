/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Nunito', 'monospace', 'sans-serif'],
        secondary: ['Poppins', 'monospace', 'sans-serif'],
        painted: ['Finger Paint', 'monospace', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
