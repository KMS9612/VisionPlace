export type BaseInputUIPropsType = {
  id: string;
  placeholder: string;
  options?: { value: string; label: string }[];
};

export type BaseInputUIType = {
  id: string;
  placeholder: string;
};

export interface InputUIType extends BaseInputUIType {
  type: "input";
  htmlFor: string;
  label: string;
}

export interface TextAreaUIType extends BaseInputUIType {
  type: "textarea";
  htmlFor: string;
  label: string;
}

export interface SelectUIType extends BaseInputUIType {
  type: "select";
  options: { value: string; label: string }[];
  htmlFor: string;
  label: string;
}

export type FormFieldProps = InputUIType | TextAreaUIType | SelectUIType;

export type FormFieldItemType = FormFieldProps[][];
