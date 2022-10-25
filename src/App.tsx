import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

function App() {
  return (
    <main className="font-brand w-screen h-screen grid place-items-center">
      <form className="flex gap-1 items-center">
        <Checkbox.Root
          id="checkbox"
          className="w-1 h-1 flex items-center justify-center cursor-pointer state-checked:text-accent-1 border border-neutral-1 peer"
        >
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label htmlFor="checkbox" className="peer-state-checked:text-accent-1">
          Accept terms and conditions.
        </label>
      </form>
    </main>
  );
}

export default App;
