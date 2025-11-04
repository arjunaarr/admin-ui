/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'specialRed2': '#b83016',
        'primary': '#007AFF',
        'special-green': '#4CAF50',
        'gray-01': '#333333',
        'gray-03': '#828282',
        'gray-05': '#E0E0E0',
        'special-mainBg': '#F5F5F5'
      }
    }
  },
  plugins: [],
}