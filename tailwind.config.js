/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**"
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",

      "2xln": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xln: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lgn: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      mdn: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      smn: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
