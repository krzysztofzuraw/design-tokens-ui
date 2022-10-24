import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useEffect, useState } from "react";

import defaultTheme from "./themes/default.json";
import redTheme from "./themes/red.json";

function App() {
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
    <main>
      <form>
        <Checkbox.Root id="checkbox" className="checkbox center">
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label htmlFor="checkbox">Accept terms and conditions.</label>
      </form>
      <form
        style={{ position: "absolute", top: 0, left: 0, padding: "0.25rem" }}
      >
        <p>Select theme</p>
        <RadioGroup.Root
          defaultValue={theme}
          aria-label="Theme"
          onValueChange={(value) => setTheme(value)}
          style={{ display: "flex", gap: "1rem" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <RadioGroup.Item
              value="default"
              id="radio-default"
              className="radio"
            >
              <RadioGroup.Indicator className="indicator" />
            </RadioGroup.Item>
            <label htmlFor="radio-default">Default</label>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <RadioGroup.Item value="red" id="radio-red" className="radio">
              <RadioGroup.Indicator className="indicator" />
            </RadioGroup.Item>
            <label htmlFor="radio-red">Red</label>
          </div>
        </RadioGroup.Root>
      </form>
    </main>
  );
}

export default App;
