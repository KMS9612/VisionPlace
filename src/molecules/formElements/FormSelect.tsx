import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BaseInputUIPropsType } from "@/src/type/components/cta/formField.type";

export default function SelectItemUI(props: BaseInputUIPropsType) {
  const { id, placeholder, options } = props;
  return (
    <Select>
      <SelectTrigger id={id} name={id} className="w-full">
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
