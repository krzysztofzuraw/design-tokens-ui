import * as RadioGroup from "@radix-ui/react-radio-group";
import { createContext, ReactElement, useContext, useState } from "react";

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

  // useEffect(() => {
  //   const root = document.documentElement;

  //   if (theme == "red") {
  //     Object.entries(redTheme).map(([key, value]) =>
  //       root.style.setProperty(key, value)
  //     );
  //   } else {
  //     Object.entries(defaultTheme).map(([key, value]) => {
  //       root.style.setProperty(key, value);
  //     });
  //   }
  // }, [theme]);

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
    <form>
      <p>Select theme</p>
      <RadioGroup.Root
        defaultValue={context?.theme}
        aria-label="Theme"
        onValueChange={(value) => context?.setTheme(value)}
      >
        <div>
          <RadioGroup.Item value="default" id="radio-default">
            <RadioGroup.Indicator />
          </RadioGroup.Item>
          <label htmlFor="radio-default">Default</label>
        </div>
        <div>
          <RadioGroup.Item value="red" id="radio-red">
            <RadioGroup.Indicator />
          </RadioGroup.Item>
          <label htmlFor="radio-red">Red</label>
        </div>
      </RadioGroup.Root>
    </form>
  );
};
