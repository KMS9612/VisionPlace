import ContactSection from "./contact";
import HeroSection from "./hero";
import CtaSection from "./cta";
import WhySection from "./why";

export default function MainUI() {
  return (
    <main className="">
      <section
        id="hero"
        className="w-full h-screen min-h-[calc(100vh-5rem-5rem)] flex justify-center items-center bg-gray-50"
      >
        <HeroSection />
      </section>
      <section
        id="home"
        className={`w-full flex flex-col items-center justify-center h-screen min-h-[calc(100vh-5rem-5rem)] bg-gray-50`}
      >
        <WhySection />
      </section>
      <section
        id="contact"
        className="w-full flex items-center justify-center h-screen min-h-[calc(100vh-5rem-5rem)] bg-gray-100"
      >
        <ContactSection />
      </section>
      <section
        id="about"
        className="flex items-center justify-center h-screen min-h-[calc(100vh-5rem-5rem)] bg-gray-50"
      >
        <CtaSection />
      </section>
    </main>
  );
}
