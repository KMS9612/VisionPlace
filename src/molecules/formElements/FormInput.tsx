import { Input } from "@/components/ui/input";
import { FormValueType } from "@/src/type/components/cta/formField.type";
import React from "react";

type InputUIProps = {
  id: keyof FormValueType;
  placeholder: string;
};

const InputUI = React.forwardRef<HTMLInputElement, InputUIProps>(
  ({ id, placeholder, ...props }, ref) => {
    return (
      <Input
        id={id}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
    );
  }
);

InputUI.displayName = "InputUI";

export default InputUI;