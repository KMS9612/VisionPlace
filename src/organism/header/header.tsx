"use client";
import ButtonGroup from "@/src/molecules/buttonGroup";
import Logo from "@/src/molecules/logo";
import Navigation from "@/src/molecules/navigationItem";
import { useEffect, useState } from "react";

export default function HeaderUI() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <Logo isScrolled={isScrolled} />
        <Navigation isScrolled={isScrolled} />
        <ButtonGroup />
      </div>
    </header>
  );
}
