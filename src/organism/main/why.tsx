"use client";
// import React from "react";
// import { HardDrive, MessageCircleQuestionMark, Users } from "lucide-react";
// import { WhySectionItemValueType } from "@/src/type/main/whySection/sectionItemValue";
// import FadeInAnimation from "@/src/service/motion/fade_in";
// import MainTitle from "@/src/atomic/main_title";
// import WhySectionItem from "@/src/components/whySectionItem";

// export default function WhySection() {
//   const WhySectionItemValue: WhySectionItemValueType[] = [
//     {
//       titleIcon: (
//         <span className="flex gap-2">
//           <Users />
//         </span>
//       ),
//       title: "Conversion",
//       desc: "잠재고객의 전환(Conversion)!",
//       content:
//         "잠재고객은 인터넷 검색, 지인소개, 오프라인 전단 홍보물을 통해 직접고객으로 전환됩니다. 하지만 그 잠재고객들이 검색,소개,전단을 통해 최종적으로 어디로 가야할까요? 저는 그 목적지가 사업자의 랜딩페이지라고 생각합니다.",
//       direction: "right",
//     },
//     {
//       titleIcon: <MessageCircleQuestionMark />,
//       title: "Credibility",
//       desc: "고객의 신뢰를 얻는 신뢰도(Credibility)!",
//       content: `온라인에서 고객이 우리 비즈니스를 처음 만나는 순간은 대부분 랜딩페이지입니다. 제대로 된
//         랜딩페이지가 없다면, 고객은 우리 서비스의 존재 자체를 의심하거나 전문성을 낮게 평가할 수 있습니다. 잘
//         만들어진 랜딩페이지는 고객에게 '이 비즈니스는 믿을 만하다'는 강력한 첫인상을 심어주며, 24시간 쉬지 않고 우리 회사를 홍보하고 신뢰를 쌓아가는 최고의
//         영업사원이 됩니다.`,
//       direction: "left",
//     },
//     {
//       titleIcon: <HardDrive />,
//       title: "Data",
//       desc: "지피지기면 백전백승! ",
//       content:
//         "단순히 전화상담 신청이 아닌 어떤 고객이 주로 대표님의 서비스를 이용하는지 수집된 데이터를 확인하며 알 수 있습니다.",
//       direction: "right",
//     },
//   ];
//   return (
//     <div
//       id="home_wrap"
//       className="container mx-auto flex-1 grid grid-rows-12 grid-flow-col"
//     >
//       <FadeInAnimation
//         initial={{ opacity: 0, y: -80 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         className="row-span-2 text-glow flex flex-col justify-center items-center"
//       >
//         <strong className="text-4xl font-semibold">왜?</strong>
//         <MainTitle>랜딩페이지를 제작하려고 하시나요?</MainTitle>

//         <p>VisionPlace는 랜딩페이지 제작의 목적에 집중합니다.</p>
//       </FadeInAnimation>
//       <div className="w-full h-full justify-center items-start row-span-10 flex flex-col flex-end oveflow-scroll px-60">
//         {WhySectionItemValue.map((el) => {
//           return (
//             <WhySectionItem
//               key={el.title}
//               titleIcon={el.titleIcon}
//               title={el.title}
//               desc={el.desc}
//               content={el.content}
//               direction={el.direction}
//             ></WhySectionItem>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
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
