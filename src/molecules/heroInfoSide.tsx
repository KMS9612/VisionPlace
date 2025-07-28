import ButtonGroup from "@/src/molecules/buttonGroup";
import FadeInAnimation from "@/src/service/motion/fade_in";
import { Check, Rocket, MessageCircle } from "lucide-react";
import IconBadge, { IconBadgePropsType } from "../atomic/icon_badge";
import ListIcon, { ListIconPropsType } from "../atomic/list_icon";
import Text, { TextPropsType } from "../atomic/text";

const CHECK_ICON_ITEM: ListIconPropsType[] = [
  { Icon: Check, iconColor: "green", innerText: "편안한 상담" },
  { Icon: Check, iconColor: "green", innerText: "필요사항 가이드" },
  { Icon: Check, iconColor: "green", innerText: "투명한 비용" },
];

const IconBadgeItems: IconBadgePropsType[] = [
  { innerText: "누구나 쉽게 제작", Icon: Rocket },
  { variant: "secondary", innerText: "친절한 상담", Icon: MessageCircle },
];

const INTRODUCE_TEXT_GROUP: TextPropsType[] = [
  {
    key: "title1인사업자",
    variant: "title",
    innerContent: "1인 사업자를 위한 랜딩페이지",
  },
  {
    key: "body고객유입가능성",
    variant: "body",
    innerContent: (
      <>
        <strong className="text-gray-700">고객 유입 가능성 증가</strong>를 위한
        전문적인 랜딩페이지를 빠르고 합리적인 가격으로 제작해드립니다. 반응형
        디자인부터 SEO 최적화까지 모든 것을 한 번에!
      </>
    ),
  },
];
export default function HeroInfoSide() {
  return (
    <FadeInAnimation className="flex flex-col justify-center col-span-3 gap-6 z-10">
      <div className="flex gap-2">
        {IconBadgeItems.map((el) => (
          <IconBadge
            variant={el.variant}
            key={el.innerText}
            innerText={el.innerText}
            Icon={el.Icon}
          />
        ))}
      </div>
      {INTRODUCE_TEXT_GROUP.map((text) => (
        <Text
          key={text.key}
          variant={text.variant}
          innerContent={text.innerContent}
        />
      ))}
      <ButtonGroup />
      <ul className="flex items-center text-sm text-gray-600 font-semibold gap-4">
        {CHECK_ICON_ITEM.map((iconList) => (
          <ListIcon
            key={iconList.innerText}
            Icon={iconList.Icon}
            iconColor={iconList.iconColor}
            innerText={iconList.innerText}
          />
        ))}
      </ul>
    </FadeInAnimation>
  );
}
