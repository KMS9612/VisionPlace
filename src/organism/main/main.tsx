import HeroSection from "./hero";
import CtaSection from "./cta";
import WhySection from "./why";
import GradeSection from "./grade";
import { ProcessSection } from "./process";
import { ReasonSection } from "./reason";

export default function MainUI() {
  return (
    <main className="">
      <section
        id="hero"
        className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-4 pt-20"
      >
        <HeroSection />
      </section>
      <section id="why" className={`py-20 bg-gray-50`}>
        <WhySection />
      </section>
      <section id="process" className="py-20 bg-black text-white">
        <ProcessSection />
      </section>
      <ReasonSection />
      <section id="grade" className="py-20 bg-black text-white">
        <GradeSection />
      </section>
      <section id="contact" className="py-20 bg-gray-50">
        <CtaSection />
      </section>
    </main>
  );
}
