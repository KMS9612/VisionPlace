import FooterUI from "@/src/footer/footer";
import HeaderUI from "@/src/header/header";
import MainUI from "@/src/main/main";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen">
      <HeaderUI />
      <MainUI />
      <FooterUI />
    </div>
  );
}
