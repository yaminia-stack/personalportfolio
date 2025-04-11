/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0f172a', // Deep navy
          light: '#f8fafc', // Off-white
        },
        accent: {
          blue: '#3b82f6', // Electric blue
          pink: '#ec4899', // Hot pink
          teal: '#0d9488', // Bright teal
          orange: '#f97316', // Sunset orange
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      }
    },
  },
  plugins: [],
} 