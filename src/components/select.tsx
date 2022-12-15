type SelectProps = {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = ({ onChange }: SelectProps) => {
  return (
    <>
      <select
        name="theme"
        id="theme"
        onChange={onChange}
        className="cursor-pointer border bg-neutral-page-background text-neutral-text-primary border-neutral-element-active-background p-3"
        defaultValue="light"
      >
        <option value="light">Default Light</option>
        <option value="dark">Default Dark</option>
      </select>
    </>
  );
};
