import { useEffect, useState } from "react";

import { Button, Select, Stack, Text } from "./components";
import { darkTheme, lightTheme } from "./theme";

type Theme = "light" | "dark";

const root = document.documentElement;

function App() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const themeToLoad = theme === "light" ? lightTheme : darkTheme;

    Object.entries(themeToLoad).map(([key, value]) =>
      root.style.setProperty(key, value)
    );
  }, [theme]);

  return (
    <main className="bg-neutral-page-background w-screen h-screen flex justify-center items-center flex-col">
      <Stack as="ul">
        <Stack as="form" direction="row" className="items-center">
          <Text as="span" color="primary" variant="text">
            Select theme
          </Text>
          <Select onChange={(e) => setTheme(e.target.value as Theme)} />
        </Stack>

        <Stack direction="row">
          <Button>Secondary</Button>
          <Button variant="primary">Primary</Button>
        </Stack>
        <Stack>
          <Text variant="heading" color="primary">
            Heading
          </Text>
          <Text variant="label" color="tertiary">
            Label
          </Text>
          <Text variant="text" color="secondary">
            Paragraph
          </Text>
        </Stack>
      </Stack>
    </main>
  );
}

export default App;
