import AboutSection from "./about";
import ContactSection from "./contact";
import HeroSection from "./hero";
import HomeSection from "./home";

export default function MainUI() {
  return (
    <main className="container mx-auto flex-1 flex flex-col justify-center items-center">
      <HeroSection />
      <HomeSection />
      <ContactSection />
      <AboutSection />
    </main>
  );
}
