export type FormValueType = {
  name: string;
  messanger: string;
  grade: string;
  purposeDetail: string;
};

// 모든 필드의 기본 타입
type BaseField = {
  label: string;
  id: keyof FormValueType; // id를 FormValueType의 키로 제한하여 타입 안정성 확보
  htmlFor: string;
  placeholder: string;
};

// 각 입력 유형에 대한 구체적인 타입
type InputField = BaseField & {
  type: "input";
};

type TextareaField = BaseField & {
  type: "textarea";
};

type SelectField = BaseField & {
  type: "select";
  options: { value: string; label: string }[];
};

// 모든 폼 필드 타입을 포함하는 유니온 타입
export type FormFieldItem = InputField | TextareaField | SelectField;

// 폼 필드 아이템 배열 타입
export type FormFieldItemType = FormFieldItem[];