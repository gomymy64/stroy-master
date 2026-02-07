/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'trust-blue': '#004A99',
        'construction-orange': '#FF6B00',
        'steel-gray': '#333333',
      },
      borderRadius: {
        'none': '0',
      },
    },
  },
  plugins: [],
}
