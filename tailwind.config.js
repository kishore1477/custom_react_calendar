 /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // theme: {
  //   colors: {
  //   //  "event":'#fee2e2'
  //   }
  // },
  plugins: [require("@tailwindcss/forms")],
}