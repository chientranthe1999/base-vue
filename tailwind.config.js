/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // remove unused styles in product build
  theme: {
    extend: {},
  },
  plugins: [],
}

