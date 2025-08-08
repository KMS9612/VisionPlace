import { Button } from "@/components/ui/button";
import { useGradeStore } from "@/src/store/gradeState";
import { Check, Star } from "lucide-react";

export default function GradeSection() {
  const { setSelectedGrade } = useGradeStore();

  const scrollToSection = (sectionId: string, grade: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setSelectedGrade(grade);
    }
  };

  const plans = [
    {
      name: "Basic",
      price: "350,000",
      popular: false,
      description: "시작하는 사업자에게 최적",
      features: [
        "데이터 수집 없는 3섹션 랜딩페이지",
        "템플릿형 디자인",
        "반응형 디자인",
        "기본 SEO 최적화",
        "1개월 무료 유지보수",
      ],
    },
    {
      name: "Standard",
      price: "750,000",
      popular: true,
      description: "가장 인기 있는 선택",
      features: [
        "구글 스프레드시트 연동",
        "구글 애널리틱스 설정",
        "CTA 폼 문의 기능",
        "맞춤형 전문 디자인",
        "고급 SEO 최적화",
        "2개월 무료 유지보수",
      ],
    },
    {
      name: "Premium",
      price: "1,500,000",
      popular: false,
      description: "완전한 솔루션",
      features: [
        "전용 데이터베이스 (Firebase)",
        "전용 관리자 페이지",
        "커스텀 기능 (통계, 자동문자)",
        "7섹션 풀페이지",
        "맞춤형 전문 디자이너 디자인",
        "고급 성능 최적화",
        "2개월 무료 유지보수",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-6">투명한 가격정책</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          사업 규모에 맞는 합리적인 가격으로 전문적인 랜딩페이지를 제작하세요
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-gray-900 rounded-2xl p-8 border-2 transition-all hover:scale-105 ${
              plan.popular ? "border-white shadow-2xl" : "border-gray-700"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-white text-black px-4 py-2 rounded-full flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  <span className="text-sm">인기</span>
                </div>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
              <div className="text-4xl mb-2">
                {plan.price}
                <span className="text-lg text-gray-400">원부터</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <Check className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              onClick={() => scrollToSection("contact", plan.name)}
              className={`w-full rounded-xl py-6 ${
                plan.popular
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}
            >
              {plan.name} 선택하기
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
