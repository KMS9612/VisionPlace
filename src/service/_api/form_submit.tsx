import { FormValueType } from "@/src/molecules/ctaForm";

export const FormSubmitService = async (formValue: FormValueType) => {
  await fetch("/api/form_submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formValue),
  });
};
