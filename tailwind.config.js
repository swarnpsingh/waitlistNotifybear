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
        // Dark hero surfaces (redesign)
        night: {
          DEFAULT: "#0B1220",
          deep: "#070B14",
          soft: "#131D33",
          line: "#1E2A44",
        },
        // Soft off-white body surface (redesign)
        paper: {
          DEFAULT: "#FBFAF6",
          dim: "#F3F1E8",
        },
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
        phone: "0 40px 120px -20px rgba(4, 8, 18, 0.65), 0 0 0 1px rgba(255,255,255,0.06)",
        "card-lift": "0 24px 60px -24px rgba(11, 18, 32, 0.28)",
      },
      keyframes: {
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "drift": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(4%, -6%) scale(1.08)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "float-y": "float-y 6s ease-in-out infinite",
        "drift-slow": "drift 18s ease-in-out infinite",
        "shimmer": "shimmer 6s linear infinite",
        "marquee": "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};
