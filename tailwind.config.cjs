/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Inter", " sans-serif"],
    },
    screens: {
      md: "425px",
      sm: "370px",
    },
    extend: {
      colors: {
        blue: {
          500: "#4EA8DE",
          900: "#1E6F9F",
        },
        purple: {
          500: "#8284FA",
          900: "#5E60CE",
        },
        gray: {
          100: "#F2F2F2",
          200: "#D9D9D9",
          300: "#808080",
          400: "#333333",
          500: "#262626",
          600: "#1A1A1A",
          700: "#0D0D0D",
        },
        danger: "#E25858",
      },
    },
  },
  plugins: [],
};
