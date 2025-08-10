// import ButtonGroup from "@/src/molecules/buttonGroup";
import HeroInfoSide from "@/src/molecules/heroInfoSide";

export default function HeroSection() {
  // const scrollToSection = (sectionId: string) => {
  //   const element = document.getElementById(sectionId);
  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //   }
  // };
  return (
    <div className="max-w-6xl mx-auto text-center">
      <HeroInfoSide />
    </div>
  );
}

// 디자인 변경 전
// import Image from "next/image";

// import HeroInfoSide from "@/src/molecules/heroInfoSide";

// export default function HeroSection() {
//   return (
//     <div className="h-full container mx-auto grid grid-flow-row grid-cols-6 space-between">
//       <HeroInfoSide />
//       {/* <FadeInAnimation
//         initial={{ opacity: 0, y: -80 }}
//         className="top-0 left-0 absolute w-full h-full flex flex-col items-center justify-center col-span-3 z-1"
//       >
//         <Image
//           quality={50}
//           fill={true}
//           src="/main_image_sec.png"
//           alt="hero-right-side-image"
//         />
//       </FadeInAnimation> */}
//     </div>
//   );
// }
