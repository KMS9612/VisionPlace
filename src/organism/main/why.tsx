"use client";
import { Target, TrendingUp, Zap, Shield } from "lucide-react";

export default function WhySection() {
  const solutions = [
    {
      icon: Target,
      title: "정확한 니즈 파악",
      description:
        "대표님의 니즈를 정확히 파악하여 개발 정확도를 극대화합니다.",
    },
    {
      icon: TrendingUp,
      title: "데이터 기반 최적화",
      description:
        "실시간 분석을 통해 고객 유입 경로 파악 등의 성과를 파악 및 개선 할 수 있습니다.",
    },
    {
      icon: Zap,
      title: "빠른 로딩 속도",
      description:
        "최적화된 코드와 이미지로 빠른 초기 로딩을 보장하여 이탈률을 최소화합니다.",
    },
    {
      icon: Shield,
      title: "신뢰성 구축",
      description:
        "전문적인 디자인과 안정적인 기능으로 브랜드 신뢰도를 높입니다.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
          고객 전환, 이제 고민 끝
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          단순한 웹사이트가 아닌, 실제로 고객을 끌어들이고 전환시키는 전략적
          랜딩페이지를 제작합니다
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6">
              <solution.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl mb-4 text-gray-900">{solution.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {solution.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
