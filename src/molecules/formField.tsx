import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  BaseInputUIPropsType,
  FormFieldProps,
} from "../type/components/cta/formField.type";

const TextAreaUI = (props: BaseInputUIPropsType) => {
  const { id, placeholder } = props;
  return <Textarea id={id} placeholder={placeholder} />;
};

const SelectItemUI = (props: BaseInputUIPropsType) => {
  const { id, placeholder, options } = props;
  return (
    <Select>
      <SelectTrigger id={id} className="min-w-[150px] w-[150px] max-w-[200px]">
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
};

const InputUI = (props: BaseInputUIPropsType) => {
  const { id, placeholder } = props;
  return <Input id={id} placeholder={placeholder} />;
};

const FormField = ({ field }: { field: FormFieldProps }) => {
  const labelElement = <Label htmlFor={field.id}>{field.label}</Label>;

  const renderInput = () => {
    switch (field.type) {
      case "input":
        return <InputUI id={field.id} placeholder={field.placeholder} />;
      case "select":
        return (
          <SelectItemUI
            id={field.id}
            placeholder={field.placeholder}
            options={field.options}
          />
        );
      case "textarea":
        return <TextAreaUI id={field.id} placeholder={field.placeholder} />;
    }
  };

  return (
    <div className={`flex flex-col gap-2 w-full`}>
      {labelElement}
      {renderInput()}
    </div>
  );
};

export default FormField;
