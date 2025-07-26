import ButtonGroup from "@/src/molecules/buttonGroup";
import Logo from "@/src/molecules/logo";
import Navigation from "@/src/molecules/navigationItem";

export default function HeaderUI() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Logo />
        <Navigation />
        <ButtonGroup />
      </div>
    </header>
  );
}
