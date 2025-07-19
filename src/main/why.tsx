"use client";
import React, { ReactElement } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import FadeInAnimation from "../motion/fade_in";
import WhySectionItem from "../components/whySectionItem";
import { HardDrive, MessageCircleQuestionMark, Users } from "lucide-react";
import { WhySectionItemValueType } from "../type/main/whySection/sectionItemValue";

export default function WhySection() {
  const WhySectionItemValue: WhySectionItemValueType[] = [
    {
      titleIcon: (
        <span className="flex gap-2">
          <Users />
          <MessageCircleQuestionMark />
        </span>
      ),
      title: "Conversion",
      desc: "잠재고객의 전환(Conversion)!",
      content:
        "잠재고객은 인터넷 검색, 지인소개, 오프라인 전단 홍보물을 통해 직접고객으로 전환됩니다. 하지만 그 잠재고객들이 검색,소개,전단을 통해 최종적으로 어디로 가야할까요? 저는 그 목적지가 사업자의 랜딩페이지라고 생각합니다.",
      direction: "right",
    },
    {
      titleIcon: <MessageCircleQuestionMark />,
      title: "Credibility",
      desc: "고객의 신뢰를 얻는 신뢰도(Credibility)!",
      content: `온라인에서 고객이 우리 비즈니스를 처음 만나는 순간은 대부분 랜딩페이지입니다. 제대로 된
        랜딩페이지가 없다면, 고객은 우리 서비스의 존재 자체를 의심하거나 전문성을 낮게 평가할 수 있습니다. 잘
        만들어진 랜딩페이지는 고객에게 '이 비즈니스는 믿을 만하다'는 강력한 첫인상을 심어주며, 24시간 쉬지 않고 우리 회사를 홍보하고 신뢰를 쌓아가는 최고의
        영업사원이 됩니다.`,
      direction: "left",
    },
    {
      titleIcon: <HardDrive />,
      title: "Data",
      desc: "지피지기면 백전백승! ",
      content:
        "단순히 전화상담 신청이 아닌 어떤 고객이 주로 대표님의 서비스를 이용하는지 수집된 데이터를 확인하며 알 수 있습니다.",
      direction: "right",
    },
  ];
  return (
    <div
      id="home_wrap"
      className="container mx-auto flex-1 grid grid-rows-12 grid-flow-col"
    >
      <FadeInAnimation
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="row-span-2 text-glow flex flex-col justify-center items-center"
      >
        <h1 className="font-semibold text-2xl">
          <strong className="text-4xl">왜?</strong> 랜딩페이지를 제작하려고
          하시나요?
        </h1>
        <p>VisionPlace는 랜딩페이지 제작의 목적에 집중합니다.</p>
      </FadeInAnimation>
      <div className="w-full h-full justify-center items-start row-span-10 flex flex-col flex-end oveflow-scroll px-60">
        {WhySectionItemValue.map((el) => {
          return (
            <WhySectionItem
              key={el.title}
              titleIcon={el.titleIcon}
              title={el.title}
              desc={el.desc}
              content={el.content}
              direction={el.direction}
            ></WhySectionItem>
          );
        })}
      </div>
    </div>
  );
}
