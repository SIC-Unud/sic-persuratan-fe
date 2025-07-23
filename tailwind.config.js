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
<<<<<<< HEAD
        danger: '#D72638',
        kuning: '#FFCA05',
        birumuda: '#63A8E799',
        primarymuda : '#EAF4FF',
=======
        danger: '#D72638'
>>>>>>> 85efa1b34ba7c539d766b2009905203acbee5195
      },
      fontFamily: {
        'jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}