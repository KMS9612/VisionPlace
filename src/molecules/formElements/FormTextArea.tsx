import { Textarea } from "@/components/ui/textarea";
import { FormValueType } from "@/src/type/components/cta/formField.type";
import React from "react";

type TextAreaUIProps = {
  id: keyof FormValueType;
  placeholder: string;
};

const TextAreaUI = React.forwardRef<HTMLTextAreaElement, TextAreaUIProps>(
  ({ id, placeholder, ...props }, ref) => {
    return (
      <Textarea
        id={id}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
    );
  }
);

TextAreaUI.displayName = "TextAreaUI";

export default TextAreaUI;