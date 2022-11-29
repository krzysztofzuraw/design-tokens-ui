import "../src/styles/index.css";
import ThemeDecorator from "./themeDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [ThemeDecorator]
