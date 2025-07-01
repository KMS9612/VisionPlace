import { Button } from "@/components/ui/button";
import { Monitor } from "lucide-react";
import Link from "next/link";

export default function HeaderUI() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex justify-center items-center gap-2 font-bold text-2xl">
          <Monitor></Monitor>
          <h2>Vision Place</h2>
        </div>
        <ul className="flex justify-center items-center gap-4">
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        <div id="button-wrap" className="flex gap-2">
          <Button>상담하기</Button>
          <Button variant={"outline"}>포트폴리오</Button>
        </div>
      </nav>
    </header>
  );
}
