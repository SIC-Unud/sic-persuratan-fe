/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#63A8E7',
        secondary: '#1A365D',
        dark: '#2D3748',
        danger: '#D72638'
      },
      fontFamily: {
        'jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}