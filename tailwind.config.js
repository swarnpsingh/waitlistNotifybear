/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
      garamond: ['"EB Garamond"', 'serif'],
      },
      colors: {
        coral: "#FE6D73", // You can name it whatever you like
      },
    },
  },
  plugins: [],
};
