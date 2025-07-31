import CtaForm from "@/src/molecules/ctaForm";
import React from "react";

export default function CtaSection() {
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
    </div>
  );
}
