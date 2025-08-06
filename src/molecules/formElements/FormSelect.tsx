import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormValueType } from "@/src/type/components/cta/formField.type";
import React from "react";

type SelectItemUIProps = {
  id: keyof FormValueType;
  placeholder: string;
  options: { value: string; label: string }[];
  onValueChange: (value: string) => void;
  value: string;
};

const SelectItemUI = React.forwardRef<HTMLButtonElement, SelectItemUIProps>(
  ({ id, placeholder, options, onValueChange, value }, ref) => {
    return (
      <Select onValueChange={onValueChange} value={value}>
        <SelectTrigger id={id} ref={ref} className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options?.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  }
);

SelectItemUI.displayName = "SelectItemUI";

export default SelectItemUI;
