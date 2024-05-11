/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'footer-texture': "url('../assets/Footer Back Image-01.png')",
      }),
      colors: {
        'yellow-dark': '#EB9600',
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}
