import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

function App() {
  return (
    <main className="font-brand">
      <form>
        <Checkbox.Root id="checkbox">
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
