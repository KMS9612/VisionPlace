import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import AllowInfoBox from "@/src/molecules/allowInfoBox";
import CtaForm from "@/src/molecules/ctaForm";
import { useFormButtonStore } from "@/src/store/formButtonState";
import React, { useState, useEffect } from "react";

export default function CtaSection() {
  const { setIsButtonDisable } = useFormButtonStore();
  const [collectionChecked, setCollectionChecked] = useState(false);
  const [serveChecked, setServeChecked] = useState(false);

  const PERSONAL_INFOMATION_VALUES = [
    {
      title: "개인정보 수집 및 이용동의",
      id: "info_collection_check",
      boxInner: {
        title: "[필수] 개인정보 수집 및 이용 동의",
        tableHead: ["대상", "수집목적", "수집기간"],
        tableBody: [
          {
            bTarget: "이름",
            bPurpose: "상담신청자 식별 및 상담진행",
            bDate: "3년",
          },
          {
            bTarget: "상담내용",
            bPurpose: "상담 전 원활한 소통을 위한 사전 준비과정에 사용",
            bDate: "3년",
          },
          {
            bTarget: "전화번호",
            bPurpose: "상담 신청자에게 연락 용도",
            bDate: "3년",
          },
        ],
      },
    },
    {
      title: "개인정보 해외 이전 동의",
      id: "info_serve_check",
      boxInner: {
        title: "[필수] 개인정보 해외 이전 동의",
        tableHead: [
          "이전받는 자",
          "이전되는 국가",
          "이전 개인정보",
          "이전 목적",
          "보유 및 이용기간",
        ],
        tableBody: [
          {
            bTarget: "Google LLC (Firebase)",
            bTargetCountry:
              "미국 등 구글 클라우드 데이터 센터 위치 국가 (서울로 설정)",
            bTargetInfo: "이름, 전화번호, 상담목적",
            bPurpose:
              "페이지 소유자에게 서비스 제공(상담신청자와의 컨택)을 위한 데이터 보관 및 처리",
            bDate: "3년",
          },
        ],
      },
    },
  ];

  useEffect(() => {
    if (collectionChecked && serveChecked) {
      setIsButtonDisable(false);
    } else {
      setIsButtonDisable(true);
    }
  }, [collectionChecked, serveChecked, setIsButtonDisable]);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
          지금 바로 시작하세요
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          무료 상담을 통해 당신의 비즈니스에 맞는 최적의 랜딩페이지 솔루션을
          찾아보세요
        </p>
      </div>
      <CtaForm />
      <div className="flex flex-col justify-center items-center">
        {PERSONAL_INFOMATION_VALUES.map((value) => (
          <p key={value.id} className="justify-between flex items-center gap-2">
            <Checkbox
              id={value.id}
              checked={
                value.id === "info_serve_check"
                  ? serveChecked
                  : collectionChecked
              }
              onCheckedChange={(checked) =>
                value.id === "info_serve_check"
                  ? setServeChecked(!!checked)
                  : setCollectionChecked(!!checked)
              }
            />
            <Label htmlFor={value.id}>{value.title}</Label>
            <AllowInfoBox tableData={value.boxInner} />
          </p>
        ))}
      </div>
    </div>
  );
}
