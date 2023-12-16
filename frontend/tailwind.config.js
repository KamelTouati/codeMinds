/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        color1: "#F2F6FF",
        color2: "#FEFEFE",
        color3: "#1E005A",
        color4: "#FFEFE0",
        color5: "#734AE5",
        color6: "#121212",
        color7: "#1B2559",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
