import { FormValueType } from "@/src/type/components/cta/formField.type";

export const FormSubmitService = async (formValue: FormValueType) => {
  await fetch("/api/form_submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formValue),
  });
};
