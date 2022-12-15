import { clsx } from "clsx";

type StackProps = {
  children?: React.ReactNode;
  as?: React.ElementType<any>;
  className?: string;
  space?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  direction?: "column" | "row";
};

const styles = {
  column: "flex-col",
  row: "flex-row",
  0: "gap-1",
  1: "gap-2",
  2: "gap-3",
  3: "gap-4",
  4: "gap-5",
  5: "gap-6",
  6: "gap-7",
  7: "gap-8",
  8: "gap-9",
  9: "gap-10",
  10: "gap-11",
};

export const Stack = ({
  children,
  className,
  space = 4,
  direction = "column",
  as: Component = "div",
}: StackProps) => {
  return (
    <Component
      className={clsx("flex", styles[space], styles[direction], className)}
    >
      {children}
    </Component>
  );
};
