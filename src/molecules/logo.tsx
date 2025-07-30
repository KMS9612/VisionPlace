import Image from "next/image";
import MainTitle from "../atomic/main_title";

type LogoPropsType = {
  isScrolled: boolean;
};

export default function Logo(props: LogoPropsType) {
  return (
    <div
      className={`flex justify-center items-center gap-2 font-bold text-2xl duration-300 ${
        props.isScrolled ? "" : "text-gray-100"
      }`}
    >
      <Image width={50} height={50} src="/logo.png" alt="vision place logo" />
      <MainTitle className="font-pacifico">Vision Place</MainTitle>
    </div>
  );
}
