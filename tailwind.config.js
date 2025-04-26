/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "40px",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
    },
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      fontFamily: {
        syncopate: ['"Syncopate"', "sans-serif"],
        bai: ['"Bai Jamjuree"', "sans-serif"],
        bodoni: ['"Bodoni Moda"', "serif"],
        lbodoni: ['"Libre Bodoni"', "serif"],
      },
    },
  },
  plugins: [],
};
