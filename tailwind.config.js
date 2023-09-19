/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
    
  ],
  theme: {
    extend: {
      boxShadow: {
        'custominner': ' 1px 1px 5px 0.5px rgb(0 0 0 / 0.05)',
      },
      scale: {
        '101': '1.01'
      },
      height: {
        'customHeight': '378px'
      }
    },
  },
  plugins: [],
}