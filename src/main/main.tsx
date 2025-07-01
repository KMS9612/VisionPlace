import HeroSection from "./hero";

export default function MainUI() {
  return (
    <main className="container flex-1 flex flex-col justify-center items-center">
      <HeroSection />
      <section
        id="home"
        className="flex items-center justify-center min-h-[calc(100vh-5rem-5rem)] bg-white"
      >
        <h1>Home</h1>
      </section>
      <section
        id="about"
        className="flex items-center justify-center min-h-[calc(100vh-5rem-5rem)] bg-gray-50"
      >
        <h1>About</h1>
      </section>
      <section
        id="contact"
        className="flex items-center justify-center min-h-[calc(100vh-5rem-5rem)] bg-gray-100"
      >
        <h1>Contact</h1>
      </section>
    </main>
  );
}
