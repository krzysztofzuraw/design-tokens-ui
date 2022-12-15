import { clsx } from "clsx";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  state?: "active" | "inactive";
};

const styles = {
  base: "cursor-pointer shadow-main p-4 border rounded-3",
  primary: "bg-brand-element-primary-background text-brand-text-primary",
  secondary: "bg-neutral-page-background text-neutral-text-secondary",
  active: "border-neutral-element-active-background",
  inactive: "border-neutral-element-inactive-background",
};

export const Button = ({
  children,
  variant = "secondary",
  state = "active",
}: ButtonProps) => {
  return (
    <button className={clsx(styles.base, styles[variant], styles[state])}>
      {children}
    </button>
  );
};
