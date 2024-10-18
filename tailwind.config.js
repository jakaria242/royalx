/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1170px",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%": { transform: "translateX(-10px)" },
          "20%, 40%, 60%": { transform: "translateX(10px)" },
          "80%": { transform: "translateX(8px)" },
          "90%": { transform: "translateX(-8px)" },
        },
      },
      animation: {
        shake: "shake 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
