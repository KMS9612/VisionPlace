import { FormFieldItemType } from "@/src/type/components/cta/formField.type";
import FormField from "./formField";

const FORM_FIELD_ITEMS: FormFieldItemType = [
  // first row
  [
    {
      label: "성함",
      placeholder: "성함을 입력해주세요.",
      type: "input",
      htmlFor: "name",
      id: "name",
    },
  ],
  // second row
  [
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
  ],
  // third row
  [
    {
      label: "상세한 상담 목적",
      placeholder: "보다 상세한 상담목적을 입력해주세요",
      type: "textarea",
      htmlFor: "purposeDetail",
      id: "purposeDetail",
    },
  ],
];

export default function CtaForm() {
  return (
    <div className="w-full border-2 rounded-2xl p-12 flex flex-col justify-between items-center gap-10">
      <h2 className="text-4xl font-bold">상담을 신청해보세요!</h2>
      {FORM_FIELD_ITEMS.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`${rowIndex === 1 ? "" : ""} w-full flex`}
        >
          {row.map((field) => (
            <FormField key={field.id} field={field} />
          ))}
        </div>
      ))}
    </div>
  );
}
