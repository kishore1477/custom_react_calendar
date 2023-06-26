 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  // theme: {
  //   colors: {
  //   //  "event":'#fee2e2'
  //   }
  // },
  plugins: [require("@tailwindcss/forms"), require('flowbite/plugin')],
}