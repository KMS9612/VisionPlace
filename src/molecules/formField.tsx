import { Label } from "@/components/ui/label";
import {
  FormFieldItem,
  FormValueType,
} from "../type/components/cta/formField.type";
import InputUI from "./formElements/FormInput";
import SelectItemUI from "./formElements/FormSelect";
import TextAreaUI from "./formElements/FormTextArea";
import {
  FieldErrors,
  UseFormRegister,
  Control,
  Controller,
} from "react-hook-form";

type FormFieldProps = {
  field: FormFieldItem;
  register: UseFormRegister<FormValueType>;
  errors: FieldErrors<FormValueType>;
  control: Control<FormValueType>;
};

const renderInput = (
  field: FormFieldItem,
  register: UseFormRegister<FormValueType>,
  control: Control<FormValueType>
) => {
  switch (field.type) {
    case "input":
      return (
        <InputUI
          id={field.id}
          placeholder={field.placeholder}
          {...register(field.id)}
        />
      );
    case "textarea":
      return (
        <TextAreaUI
          id={field.id}
          placeholder={field.placeholder}
          {...register(field.id)}
        />
      );
    case "select":
      return (
        <Controller
          control={control}
          name={field.id}
          render={({ field: controllerField }) => (
            <SelectItemUI
              id={field.id}
              placeholder={field.placeholder}
              options={field.options}
              onValueChange={controllerField.onChange}
              value={controllerField.value}
              ref={controllerField.ref}
            />
          )}
        />
      );
  }
};

const FormField = ({ field, register, errors, control }: FormFieldProps) => {
  const labelElement = <Label htmlFor={field.id}>{field.label}</Label>;
  const error = errors[field.id];
  const errorElement = error?.message && String(error.message);

  return (
    <div className={`flex flex-col gap-2 w-full`}>
      {labelElement}
      {renderInput(field, register, control)}
      <p className="text-red-500 text-xs h-0 p-0 m-0">{errorElement}</p>
    </div>
  );
};

export default FormField;
