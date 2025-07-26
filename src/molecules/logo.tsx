import Image from "next/image";
import MainTitle from "../atomic/main_title";

export default function Logo() {
  return (
    <div className="flex justify-center items-center gap-2 font-bold text-2xl">
      <Image width={50} height={50} src="/logo.png" alt="vision place logo" />
      <MainTitle className="font-pacifico">Vision Place</MainTitle>
    </div>
  );
}
