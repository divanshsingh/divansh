/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hatton: ['Hatton', 'sans-serif'],
        helvetica: ['Helvetica Neue LT Pro', 'sans-serif'],
        garamond: ['Garamond', 'serif'],
    },
    },
  },
  plugins: [],
};
