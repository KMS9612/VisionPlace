import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Noto_Sans_KR,
  // Black_Han_Sans,
  Pacifico,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "VisionPlace | 당신의 첫 랜딩페이지",
  description: "LandingPage Creation | 1인 기업 대상 랜딩페이지 제작대리",
  keywords: [
    "랜딩페이지",
    "랜딩페이지 제작",
    "홈페이지",
    "홈페이지 제작",
    "개인사업자 홈페이지 제작",
    "개인사업자",
    "랜딩페이지 외주",
    "visionplace",
    "VisionPlace",
    "비전플레이스",
    "전문직 홈페이지 제작",
    "전문직 홈페이지",
    "웹개발",
    "웹개발외주",
  ],
  openGraph: {
    title: "VisionPlace | 당신의 첫 랜딩페이지",
    description: "1인 기업, 전문가, 프리랜서를 위한 맞춤형 랜딩페이지 제작.",
    url: "https://visionplace.vercel.app/", // 도메인 구매시 변경 필요.
    siteName: "VisionPlace",
    images: [
      {
        url: "/main_image.jpg", // public 폴더에 og-image.png 파일을 추가해야 합니다.
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansKr.variable} ${pacifico.variable} antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
