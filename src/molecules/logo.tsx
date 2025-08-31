import Image from "next/image";
import MainTitle from "../atomic/main_title";

type LogoPropsType = {
  isScrolled: boolean;
};

export default function Logo(props: LogoPropsType) {
  return (
    <div
      className={`flex justify-center items-center gap-2 font-bold duration-300 ${
        props.isScrolled ? "" : "text-gray-100"
      }`}
    >
      <Image width={50} height={50} src="/logo.png" alt="vision page logo" />
      <MainTitle className="hidden lg:inline font-pacifico text-3xl md:text-2xl sm:text-sm">
        Vision Page
      </MainTitle>
    </div>
  );
}
