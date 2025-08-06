"use client";
import * as yup from "yup";
import {
  FormFieldItemType,
  FormValueType,
} from "@/src/type/components/cta/formField.type";
import FormField from "./formField";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSubmitService } from "../service/_api/form_submit";
import { useRef } from "react";

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
  const formRef = useRef<HTMLFormElement>(null);

  const formSchema = yup.object({
    name: yup.string().required("이름을 입력해주세요."),
    messanger: yup.string().required("연락수단을 선택해주세요."),
    grade: yup.string().required("등급을 선택해주세요."),
    purposeDetail: yup.string().required("상세 목적을 입력해주세요."),
  });

  const {
    register,
    handleSubmit,
    control, // control 객체 추가
    formState: { errors },
  } = useForm<FormValueType>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: "",
      messanger: "",
      grade: "",
      purposeDetail: "",
    },
  });

  const onSubmit = async (data: FormValueType) => {
    await FormSubmitService(data);
    formRef.current?.reset();
  };
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <form
        ref={formRef}
        onSubmit={handleSubmit(onSubmit)}
        className={`space-y-6 grid grid-rows-4`}
      >
        {FORM_FIELD_ITEMS.map((field) => (
          <FormField
            key={field.id}
            field={field}
            register={register}
            errors={errors}
            control={control} // control prop 전달
          />
        ))}
        <Button type="submit">무료 상담 신청하기</Button>
      </form>
    </div>
  );
}
