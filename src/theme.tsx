import * as RadioGroup from "@radix-ui/react-radio-group";
import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";

import defaultTheme from "./themes/default.json";
import redTheme from "./themes/red.json";

import classes from "./styles/theme.module.css";

type Props = {
  children: ReactElement;
};

const ThemeContext = createContext<
  | {
      theme: string;
      setTheme: (to: string) => void;
    }
  | undefined
>(undefined);

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    const root = document.documentElement;

    if (theme == "red") {
      Object.entries(redTheme).map(([key, value]) =>
        root.style.setProperty(key, value.toString())
      );
    } else {
      Object.entries(defaultTheme).map(([key, value]) => {
        root.style.setProperty(key, value.toString());
      });
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeForm />
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeForm = () => {
  const context = useContext(ThemeContext);

  return (
    <form className={classes.form}>
      <p>Select theme</p>
      <RadioGroup.Root
        defaultValue={context?.theme}
        aria-label="Theme"
        onValueChange={(value) => context?.setTheme(value)}
        className={classes.radioGroup}
      >
        <div className={classes.radioWrapper}>
          <RadioGroup.Item
            value="default"
            id="radio-default"
            className={classes.radio}
          >
            <RadioGroup.Indicator className={classes.indicator} />
          </RadioGroup.Item>
          <label htmlFor="radio-default">Default</label>
        </div>
        <div className={classes.radioWrapper}>
          <RadioGroup.Item value="red" id="radio-red" className={classes.radio}>
            <RadioGroup.Indicator className={classes.indicator} />
          </RadioGroup.Item>
          <label htmlFor="radio-red">Red</label>
        </div>
      </RadioGroup.Root>
    </form>
  );
};
