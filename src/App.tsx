import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import classes from "./styles/checkbox.module.css";

function App() {
  return (
    <main>
      <form>
        <Checkbox.Root id="checkbox" className={classes.checkbox}>
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label htmlFor="checkbox">Accept terms and conditions.</label>
      </form>
    </main>
  );
}

export default App;
