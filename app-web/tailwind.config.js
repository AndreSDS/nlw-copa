/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        app: "url('/bg_copa.png')",
      },
      colors: {
        gray: {
          900: "#121214",
          800: "#202024",
          600: "#323238",
          100: "#e1e1e6",
        },
        yellow: {
          500: "#F7DD43",
          700: "#E5CD3D"
        },
        greeny: {
          500: "#00FF00",
        },
      },
    },
  },
  plugins: [],
};
