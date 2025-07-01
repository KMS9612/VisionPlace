import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function HomeSection() {
  return (
    <section
      id="home"
      className="w-full flex items-center justify-center min-h-[calc(100vh-5rem-5rem)] bg-gray-50"
    >
      <div
        id="home_wrap"
        className="container mx-auto grid grid-rows-6 grid-flow-col"
      >
        <h1 className="font-bold text-4xl row-span-1">
          왜 랜딩페이지가 필요한가요?
        </h1>
        <div className="flex justify-center items-center row-span-5">
          <Card>
            <CardHeader>
              <CardTitle>텍스트카드 제목</CardTitle>
              <CardDescription>텍스트카드 제목</CardDescription>
            </CardHeader>
            <CardContent>
              <p>원하는 본문 작성</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
