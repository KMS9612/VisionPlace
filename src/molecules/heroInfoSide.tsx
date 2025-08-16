import ButtonGroup from "@/src/molecules/buttonGroup";
import FadeInAnimation from "@/src/service/motion/fade_in";
// import { Check, Rocket, MessageCircle } from "lucide-react";
// import IconBadge, { IconBadgePropsType } from "../atomic/icon_badge";
// import ListIcon, { ListIconPropsType } from "../atomic/list_icon";
// import Text, { TextPropsType } from "../atomic/text";

// const CHECK_ICON_ITEM: ListIconPropsType[] = [
//   { Icon: Check, iconColor: "green", innerText: "편안한 상담" },
//   { Icon: Check, iconColor: "green", innerText: "필요사항 가이드" },
//   { Icon: Check, iconColor: "green", innerText: "투명한 비용" },
// ];

// const ICON_BADGE_ITEMS: IconBadgePropsType[] = [
//   { innerText: "누구나 쉽게 제작", Icon: Rocket },
//   { variant: "secondary", innerText: "친절한 상담", Icon: MessageCircle },
// ];

// const INTRODUCE_TEXT_GROUP: TextPropsType[] = [
//   {
//     key: "title1인사업자",
//     variant: "title",
//     innerContent: "1인 사업자를 위한 랜딩페이지",
//   },
//   {
//     key: "body고객유입가능성",
//     variant: "body",
//     innerContent: (
//       <>
//         <strong className="text-gray-700">고객 유입 가능성 증가</strong>를 위한
//         전문적인 랜딩페이지를 빠르고 합리적인 가격으로 제작해드립니다. 반응형
//         디자인부터 SEO 최적화까지 모든 것을 한 번에!
//       </>
//     ),
//   },
// ];
export default function HeroInfoSide() {
  return (
    <FadeInAnimation
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="flex flex-col justify-center col-span-3 gap-6 z-10"
    >
      <div className="mb-8">
        <h1 className="text-6xl md:text-7xl lg:text-8xl mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-pacifico">
          VisionPage
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          1인 사업자를 위한 전문적인 랜딩페이지 제작 서비스
        </p>
      </div>

      <div className="mb-12">
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          고객 유입부터 전환까지, 최고 성능의 반응형 랜딩페이지로 당신의
          비즈니스를 성장시키세요
        </p>
      </div>
      <div className="flex justify-center items-center">
        <ButtonGroup />
      </div>
    </FadeInAnimation>
  );
}
