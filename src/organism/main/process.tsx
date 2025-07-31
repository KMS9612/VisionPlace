import {
  MessageSquare,
  Users,
  FileText,
  Palette,
  Eye,
  Code,
  CheckCircle,
} from "lucide-react";

function StepCard() {
  const steps = [
    {
      icon: MessageSquare,
      title: "상담 신청",
      description: "간단한 폼 작성으로 상담을 신청해주세요",
    },
    {
      icon: Users,
      title: "상담",
      description: "프로젝트 요구사항과 목표를 상세히 논의합니다",
    },
    {
      icon: FileText,
      title: "필요사항 전달",
      description: "개발 전 구체적인 기능과 디자인 요소를 정리합니다",
    },
    {
      icon: Palette,
      title: "디자인 시작",
      description: "브랜드에 맞는 전문적인 디자인을 제작합니다",
    },
    {
      icon: Eye,
      title: "1차 검수",
      description: "디자인 시안을 검토하고 피드백을 반영합니다",
    },
    {
      icon: Code,
      title: "개발 착수",
      description: "확정된 디자인을 바탕으로 개발을 진행합니다",
    },
    {
      icon: CheckCircle,
      title: "랜딩페이지 완료",
      description: "최종 테스트를 거쳐 완성된 랜딩페이지를 전달합니다",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {steps.map((step, index) => (
        <div key={step.title} className="relative">
          <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4">
                <step.icon className="w-6 h-6 text-black" />
              </div>
              <div className="text-sm text-gray-400">STEP {index + 1}</div>
            </div>
            <h3 className="text-lg mb-3">{step.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
          {index < steps.length - 1 && (
            <div className="hidden xl:block absolute top-1/2 right-0 w-6 h-0.5 bg-gray-700 transform translate-x-3 -translate-y-0.5" />
          )}
        </div>
      ))}
    </div>
  );
}

export function ProcessSection() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl mb-6">체계적인 제작 프로세스</h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          상담부터 완료까지, 투명하고 체계적인 프로세스로 고품질 랜딩페이지를
          제작합니다
        </p>
      </div>
      <StepCard />
    </div>
  );
}
