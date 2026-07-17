/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Canela"', '"Fraunces"', 'serif'],
        sans: ['"Manrope"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        focus: {
          DEFAULT: "#2F5FD6",
          light: "#5C82E0",
          dark: "#23499E",
        },
        ink: {
          DEFAULT: "#16294F",
          light: "#213A69",
          dark: "#0D1A34",
        },
        bell: {
          DEFAULT: "#F5C518",
          light: "#F8D45A",
          dark: "#D9A80C",
        },
        cream: {
          DEFAULT: "#F8F4EA",
          dark: "#F0E9D8",
        },
      },
      opacity: {
        6: "0.06",
        8: "0.08",
        12: "0.12",
        16: "0.16",
      },
      boxShadow: {
        glow: "0 0 120px 40px rgba(245, 197, 24, 0.18)",
      },
    },
  },
  plugins: [],
};
