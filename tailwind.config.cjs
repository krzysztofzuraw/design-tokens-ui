/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {},
    spacing: {
      0: "var(--space-0)",
      1: "var(--space-1)",
      2: "var(--space-2)",
    },
    colors: {
      accent: {
        1: "var(--color-accent-1)",
      },
    },
    fontFamily: {
      brand: "var(--font-brand)",
    },
  },
  plugins: [],
};
