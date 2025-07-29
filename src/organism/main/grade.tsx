import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ListIcon from "@/src/atomic/list_icon";
import Text from "@/src/atomic/text";
import FadeInAnimation from "@/src/service/motion/fade_in";
import { Check } from "lucide-react";
import { X } from "lucide-react";
import { ElementType } from "react";

type GradeListIconType = {
  innerText: string;
  Icon: ElementType;
  iconColor: string;
};

type GradeCardItemsType = {
  title: string;
  desc: string;
  action: string;
  contentList: GradeListIconType[];
  height: string;
};
const GRADE_LIST_ICON: GradeListIconType[][] = [
  [
    { innerText: "데이터 수집", Icon: X, iconColor: "red" },
    { innerText: "3 섹션 페이지", Icon: Check, iconColor: "green" },
    { innerText: "템플릿 형 디자인", Icon: Check, iconColor: "green" },
  ],
  [
    { innerText: "데이터 수집", Icon: Check, iconColor: "green" },
    {
      innerText: "Google Sheet 데이터 수집",
      Icon: Check,
      iconColor: "green",
    },
    { innerText: "5 섹션 페이지", Icon: Check, iconColor: "green" },
    { innerText: "문의신청 기능", Icon: Check, iconColor: "green" },
    {
      innerText: "맞춤형 전문 디자이너의 디자인",
      Icon: Check,
      iconColor: "green",
    },
  ],
  [
    { innerText: "데이터 수집", Icon: Check, iconColor: "green" },
    { innerText: "전용 DB활용(FireBase)", Icon: Check, iconColor: "green" },
    { innerText: "전용 관리자페이지", Icon: Check, iconColor: "green" },
    {
      innerText: "커스텀 기능(통계, 자동문자 등)",
      Icon: Check,
      iconColor: "green",
    },
    { innerText: "7 섹션 페이지", Icon: Check, iconColor: "green" },
    {
      innerText: "맞춤형 전문 디자이너의 디자인",
      Icon: Check,
      iconColor: "green",
    },
  ],
];

const GRADE_CARD_ITEMS: GradeCardItemsType[] = [
  {
    title: "Basic",
    desc: "데이터 수집 없는 기본 페이지",
    action: "350,000 원",
    contentList: GRADE_LIST_ICON[0],
    height: "h-[450px]",
  },
  {
    title: "Standard",
    desc: "VisionPlace의 주력상품",
    action: "750,000 원 부터",
    contentList: GRADE_LIST_ICON[1],
    height: "h-[500px]",
  },
  {
    title: "Premium",
    desc: "데이터 기반 비즈니스 전략 수립",
    action: "1,500,000 원 부터",
    contentList: GRADE_LIST_ICON[2],
    height: "h-[450px]",
  },
];

export default function GradeSection() {
  return (
    <div className="w-full flex justify-center items-center gap-10">
      {/* Grade Card */}
      {GRADE_CARD_ITEMS.map((card) => (
        <FadeInAnimation
          key={card.title}
          initial={{ opacity: 0, y: 500 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <GradeCard card={card} />
        </FadeInAnimation>
      ))}
    </div>
  );
}

function GradeCard(props: { card: GradeCardItemsType }) {
  const { title, desc, action, contentList, height } = props.card;

  return (
    <Card
      className={`${
        title === "Standard" ? "border-green-400" : ""
      } ${height} w-[400px] flex flex-col justify-between`}
    >
      <CardHeader>
        <CardTitle className="">
          <Text variant="subtitle" innerContent={title} />
        </CardTitle>
        <CardDescription>{desc}</CardDescription>
        <CardDescription>
          <Text variant="plain" innerContent={action}></Text>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul>
          {contentList.map((content) => (
            <ListIcon
              key={content.innerText}
              Icon={content.Icon}
              innerText={content.innerText}
              iconColor={content.iconColor}
            />
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col justify-center">
        <Button className="w-[300px]">해당 등급으로 상담하기</Button>
        <Text
          variant="smDesc"
          innerContent="*비용은 상담과정에서 변경될 수 있습니다.*"
        ></Text>
      </CardFooter>
    </Card>
  );
}
