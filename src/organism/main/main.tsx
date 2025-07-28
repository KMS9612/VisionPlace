import ReviewSection from "./review";
import HeroSection from "./hero";
import CtaSection from "./cta";
import WhySection from "./why";

export default function MainUI() {
  return (
    <main className="">
      <section
        id="hero"
        className="relative w-full h-screen min-h-[calc(100vh-5rem-5rem)] flex justify-center items-center bg-gray-50"
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
        id="contact"
        className="flex items-center justify-center h-screen min-h-[calc(100vh-5rem-5rem)] bg-gray-50"
      >
        <CtaSection />
      </section>
    </main>
  );
}
