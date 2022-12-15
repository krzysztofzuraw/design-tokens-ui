import { modularScale } from "polished";

const createScale = (ratio: number, base: number) => (steps: number) =>
  `${modularScale(steps, base, ratio)}rem`;

const fontSizeScale = createScale(1.2, 0.75);

export const darkTheme = {
  "--space-1": "0.0625rem",
  "--space-2": "0.125rem",
  "--space-3": "0.25rem",
  "--space-4": "0.5rem",
  "--space-5": "0.75rem",
  "--space-6": "1rem",
  "--space-7": "1.25rem",
  "--space-8": "1.5rem",
  "--space-9": "2rem",
  "--space-10": "2.5rem",
  "--space-11": "3rem",
  "--space-12": "4rem",
  "--space-13": "5rem",

  "--color-neutral-text-primary": "hsla(0, 0%, 100%, 1)",
  "--color-neutral-text-secondary": "hsla(211, 13%, 66%, 1)",
  "--color-neutral-text-tertiary": "hsla(211, 13%, 66%, 1)",
  "--color-neutral-page-background": "hsla(211, 42%, 16%, 1)",
  "--color-neutral-element-active-Background": "hsla(211, 42%, 16%, 1)",
  "--color-neutral-element-inactivebackground": "hsla(210, 25%, 26%, 1)",
  "--color-neutral-border-active": "hsla(210, 25%, 26%, 1)",
  "--color-neutral-border-inactive": "hsla(210, 25%, 26%, 1)",
  "--color-brand-text-primary": "hsla(215, 88%, 69%, 1)",
  "--color-brand-element-primary-background": "hsla(215, 100%, 51%, 0.12)",
  "--color-brand-element-secondary-background": "hsla(215, 100%, 51%, 0.12)",

  "--font-size-1": fontSizeScale(0),
  "--font-size-2": fontSizeScale(1),
  "--font-size-3": fontSizeScale(2),
  "--font-size-4": fontSizeScale(3),
  "--font-size-5": fontSizeScale(4),
  "--font-size-6": fontSizeScale(5),
  "--font-size-7": fontSizeScale(6),
  "--font-size-8": fontSizeScale(7),
  "--font-size-9": fontSizeScale(8),
  "--font-size-10": fontSizeScale(9),

  "--border-radius-1": "2px",
  "--border-radius-2": "4px",
  "--border-radius-3": "6px",

  "--font-family-body": "Rubik, sans-serif",

  "--line-height-heading": "1.2",
  "--line-height-text": "1.5",

  "--shadow-main": "0px 1px 1px 0px hsla(211, 42%, 16%, 0.12)",

  "--font-weight-light": "370",
  "--font-weight-regular": "400",
  "--font-weight-medium": "470",
};
