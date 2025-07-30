import ReviewSection from "./review";
import HeroSection from "./hero";
import CtaSection from "./cta";
import WhySection from "./why";
import GradeSection from "./grade";

export default function MainUI() {
  return (
    <main className="">
      <section
        id="hero"
        className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center px-4 pt-20"
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
        id="about"
        className="w-full flex items-center justify-center h-screen min-h-[calc(100vh-5rem-5rem)] bg-gray-100"
      >
        <ReviewSection />
      </section>
      <section
        id="grade"
        className="w-full flex items-center justify-center h-screen min-h-[calc(100vh-5rem-5rem)] bg-gray-50"
      >
        <GradeSection />
      </section>
      <section
        id="contact"
        className="flex items-center justify-center h-screen min-h-[calc(100vh-5rem-5rem)] bg-gray-50"
      >
        <CtaSection />
      </section>
    </main>
  );
}
