import { Label } from "@/components/ui/label";
import { FormFieldProps } from "../type/components/cta/formField.type";
import InputUI from "./formElements/FormInput";
import SelectItemUI from "./formElements/FormSelect";
import TextAreaUI from "./formElements/FormTextArea";

const renderInput = (field: FormFieldProps) => {
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

const FormField = ({ field }: { field: FormFieldProps }) => {
  const labelElement = <Label htmlFor={field.id}>{field.label}</Label>;

  return (
    <div className={`flex flex-col gap-2 w-full`}>
      {labelElement}
      {renderInput(field)}
    </div>
  );
};

export default FormField;
