const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter']
      }
    },
  },
  darkMode: "class",
  plugins: [nextui({addCommonColors: true,}),require('@headlessui/tailwindcss'), require('@tailwindcss/forms')],
}