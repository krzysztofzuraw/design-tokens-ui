import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import classes from "./Checkbox.module.css";

export const Checkbox = () => {
  return (
    <CheckboxPrimitive.Root id="checkbox" className={classes.checkbox}>
      <CheckboxPrimitive.Indicator>
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};
