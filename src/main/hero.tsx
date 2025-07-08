import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Rocket, MessageCircle } from "lucide-react";
import * as motion from "motion/react-client";
import FadeInAnimation from "../motion/fade_in";

export default function HeroSection() {
  return (
    <div className="container mx-auto grid grid-flow-row grid-cols-6 space-between">
      <FadeInAnimation className="flex flex-col justify-center col-span-3 gap-6">
        <div className="flex gap-2">
          <Badge>
            <Rocket />
            누구나 쉽게 제작
          </Badge>
          <Badge variant={"secondary"}>
            <MessageCircle />
            친절한 상담
          </Badge>
        </div>
        <p className="font-bold text-6xl max-w-[500px] text-glow">
          1인 사업자를 위한 랜딩페이지
        </p>
        <p className="text-gray-500 max-w-[500px] text-xl">
          <strong className="text-gray-700">고객 유입 가능성 증가</strong>를
          위한 전문적인 랜딩페이지를 빠르고 합리적인 가격으로 제작해드립니다.
          반응형 디자인부터 SEO 최적화까지 모든 것을 한 번에!
        </p>
        <div id="buttonWrap" className="flex flex-start gap-2">
          <Button>상담하기</Button>
          <Button variant={"outline"}>포트폴리오</Button>
        </div>
        <ul className="flex items-center text-sm text-gray-600 font-semibold gap-4">
          <li className="flex justify-start items-center">
            <Check color="green" />
            <span>편안한 상담</span>
          </li>
          <li className="flex justify-start items-center">
            <Check color="green" />
            <span>필요사항 가이드</span>
          </li>
          <li className="flex justify-start items-center">
            <Check color="green" />
            <span>제작 외 비용 사전공지</span>
          </li>
        </ul>
      </FadeInAnimation>
      <FadeInAnimation
        initial={{ opacity: 0, x: 80 }}
        className="flex flex-col items-center justify-center col-span-3"
      >
        <img src="/#" alt="hero-right-side-image"></img>
      </FadeInAnimation>
    </div>
  );
}
