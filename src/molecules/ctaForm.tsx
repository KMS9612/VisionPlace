import { FormFieldItemType } from "@/src/type/components/cta/formField.type";
import FormField from "./formField";
import { Button } from "@/components/ui/button";

const FORM_FIELD_ITEMS: FormFieldItemType = [
  // first row
  {
    label: "성함",
    placeholder: "성함을 입력해주세요.",
    type: "input",
    htmlFor: "name",
    id: "name",
  },
  // second row
  {
    label: "연락수단",
    htmlFor: "messanger",
    id: "messanger",
    placeholder: "선호 연락수단을 선택해주세요.",
    type: "select",
    options: [
      { value: "카카오톡", label: "카카오톡" },
      { value: "문자", label: "문자" },
      { value: "전화", label: "전화" },
    ],
  },
  {
    label: "제작등급",
    id: "grade",
    htmlFor: "grade",
    placeholder: "제작 등급을 선택해주세요.",
    type: "select",
    options: [
      { value: "엔트리", label: "엔트리" },
      { value: "스탠다드", label: "스탠다드" },
      { value: "프로", label: "프로" },
    ],
  },

  {
    label: "상세한 상담 목적",
    placeholder: "보다 상세한 상담목적을 입력해주세요",
    type: "textarea",
    htmlFor: "purposeDetail",
    id: "purposeDetail",
  },
];

export default function CtaForm() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <form className={`space-y-6 grid grid-rows-4`}>
        {FORM_FIELD_ITEMS.map((field) => (
          <FormField key={field.id} field={field} />
        ))}
        <Button type="button">무료 상담 신청하기</Button>
      </form>
    </div>
  );
}
