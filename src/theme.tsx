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
        root.style.setProperty(key, value)
      );
    } else {
      Object.entries(defaultTheme).map(([key, value]) => {
        root.style.setProperty(key, value);
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
    <form className="absolute p-0 font-brand">
      <p>Select theme</p>
      <RadioGroup.Root
        defaultValue={context?.theme}
        aria-label="Theme"
        onValueChange={(value) => context?.setTheme(value)}
        className="flex gap-1"
      >
        <div className="flex items-center gap-1">
          <RadioGroup.Item
            value="default"
            id="radio-default"
            className="border border-neutral-1 rounded-full peer"
          >
            <RadioGroup.Indicator className="flex w-full h-full items-center justify-center relative after:content-[''] after:bg-accent-1 after:w-0 after:h-0 after:rounded-full after:block" />
          </RadioGroup.Item>
          <label
            htmlFor="radio-default"
            className="peer-state-checked:text-accent-1"
          >
            Default
          </label>
        </div>
        <div className="flex items-center gap-1">
          <RadioGroup.Item
            value="red"
            id="radio-red"
            className="border border-neutral-1 rounded-full peer"
          >
            <RadioGroup.Indicator className="flex w-full h-full items-center justify-center relative after:content-['']  after:block after:w-0 after:h-0 after:rounded-full after:bg-accent-1" />
          </RadioGroup.Item>
          <label
            htmlFor="radio-red"
            className="peer-state-checked:text-accent-1"
          >
            Red
          </label>
        </div>
      </RadioGroup.Root>
    </form>
  );
};
