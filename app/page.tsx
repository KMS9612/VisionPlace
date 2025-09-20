"use client";
import "@/src/service/_api/fb";
import HeaderUI from "@/src/organism/header/header";
import MainUI from "@/src/organism/main/main";

export default function Home() {
  return (
    <div className="relative flex flex-col">
      <HeaderUI />
      <MainUI />
      <footer className="h-16 bg-gray-800 text-white flex items-center justify-center">
        <p>Copyright by Kim Min Seung 2025</p>
      </footer>
    </div>
  );
}
