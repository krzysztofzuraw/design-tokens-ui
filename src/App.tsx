import { Button, Checkbox } from "./components";

function App() {
  return (
    <main>
      <form>
        <Checkbox />
        <label htmlFor="checkbox">Accept terms and conditions.</label>
        <Button variant="primary">Submit</Button>
        <Button variant="secondary">Cancel</Button>
      </form>
    </main>
  );
}

export default App;
