import classes from "./Button.module.css";

type ButtonProps = {
  children?: React.ReactNode;
  variant: "primary" | "secondary";
};

export const Button = ({ children, variant }: ButtonProps) => {
  return (
    <button className={classes.button} data-variant={variant}>
      {children}
    </button>
  );
};
