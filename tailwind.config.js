/* eslint-disable no-undef */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "at-primary": "#f9c61c",
        "at-secondary": "#560DF8",
        "at-dark-bg": "#37333b",
        "at-dark-input": "#1E293B",
        "at-dark-primary": "#10172A",
        "at-dark-secondary": "#1E293B",
      },
      fontFamily: {
        futura: ["Futura", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
  daisyui: {
    themes: false,
  },
}
