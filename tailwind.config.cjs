/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {},
    spacing: {
      1: "var(--space-1)",
      2: "var(--space-2)",
      3: "var(--space-3)",
      4: "var(--space-4)",
      5: "var(--space-5)",
      6: "var(--space-6)",
      7: "var(--space-7)",
      8: "var(--space-8)",
      9: "var(--space-9)",
      10: "var(--space-10)",
      11: "var(--space-11)",
      12: "var(--space-12)",
      13: "var(--space-13)",
    },
    colors: {
      "neutral-text-primary": "var(--color-neutral-text-primary)",
      "neutral-text-secondary": "var(--color-neutral-text-secondary)",
      "neutral-text-tertiary": "var(--color-neutral-text-tertiary)",
      "neutral-page-background": "var(--color-neutral-page-background)",
      "neutral-element-active-background":
        "var(--color-neutral-element-active-background)",
      "neutral-element-inactive-background":
        "var(--color-neutral-element-inactive-background)",
      "neutral-border-active": "var(--color-neutral-border-active)",
      "neutral-border-inactive": "var(--color-neutral-borer-inactive)",
      "brand-text-primary": "var(--color-brand-text-primary)",
      "brand-element-primary-background":
        "var(--color-brand-element-primary-background)",
      "brand-element-secondary-background":
        "color-var(--color-brand-element-secondary-background)",
    },
    fontFamily: {
      body: "var(--font-family-body)",
    },
    fontSize: {
      1: "var(--font-size-1)",
      2: "var(--font-size-2)",
      3: "var(--font-size-3)",
      4: "var(--font-size-4)",
      5: "var(--font-size-5)",
      6: "var(--font-size-6)",
      7: "var(--font-size-7)",
      8: "var(--font-size-8)",
      9: "var(--font-size-9)",
      10: "var(--font-size-10)",
    },
    borderRadius: {
      1: "var(--border-radius-1)",
      2: "var(--border-radius-2)",
      3: "var(--border-radius-3)",
    },
    lineHeight: {
      heading: "var(--line-height-heading)",
      text: "var(--line-height-text)",
    },
    boxShadow: {
      main: "var(--shadow-main)",
    },
    fontWeight: {
      light: "var(--font-weight-light)",
      regular: "var(--font-weight-regular)",
      medium: "var(--font-weight-medium)",
    },
  },
  plugins: [],
};
