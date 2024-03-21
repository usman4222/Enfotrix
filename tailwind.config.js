/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'footer-texture': "url('../assets/Footer Back Image-01.png')",
      }),
      colors: {
        'yellow-dark': '#EB9600',
      },
    },
  },
  plugins: [],
}
