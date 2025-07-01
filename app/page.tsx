import HeroSection from "@/src/main/hero";
import HomeSection from "@/src/main/home";
import AboutSection from "@/src/main/about";
import ContactSection from "@/src/main/contact";
import HeaderUI from "@/src/header/header";
import MainUI from "@/src/main/main";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center">
        <HeaderUI />
      </header>
      <MainUI />
      <footer className="h-16 bg-gray-800 text-white flex items-center justify-center">
        <p>Copyright by Kim Min Seung 2025</p>
      </footer>
    </div>
  );
}
