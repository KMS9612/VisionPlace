"use client";
import HeaderUI from "@/src/header/header";
import MainUI from "@/src/main/main";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  // 과도한 API통신으로 성능저하 => 추후 Google analytics로 관련 정보 다룰것.
  // fetch("/api/visit_tracker", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ time: new Date() }),
  // });
  // }, []);

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
