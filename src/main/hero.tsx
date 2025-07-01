import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full grid grid-flow-row grid-cols-6 min-h-[calc(100vh-5rem-5rem)] bg-white space-between"
    >
      <div
        id="hero-left-side"
        className="flex flex-col justify-center col-span-4 gap-6"
      >
        <p className="font-bold text-6xl max-w-[500px]">
          1인 사업자를 위한 전문 랜딩페이지 제작
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
      </div>
      <div
        id="hero-right-side"
        className="flex flex-col items-center justify-center col-span-2"
      >
        <img src="/#" alt="hero-right-side-image"></img>
      </div>
    </section>
  );
}
