import { clsx } from "clsx";

type TextProps = {
  children?: React.ReactNode;
  as?: React.ElementType<any>;
  className?: string;
  variant?: "heading" | "label" | "text";
  color?: "primary" | "secondary" | "tertiary";
};

const styles = {
  base: "font-body",
  heading: "text-5 leading-heading",
  label: "text-1 leading-text",
  text: "text-2 leading-text",
  primary: "text-neutral-text-primary",
  secondary: "text-neutral-text-secondary",
  tertiary: "text-neutral-text-tertiary",
};

export const Text = ({
  children,
  variant = "heading",
  color,
  className,
  as: Component = "p",
}: TextProps) => {
  return (
    <Component
      className={clsx(styles.base, styles[variant], styles[color], className)}
    >
      {children}
    </Component>
  );
};
