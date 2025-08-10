import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // 크롤링을 원치 않는 경로
    },
    sitemap: "https://visionplace.vercel.app/sitemap.xml", // /sitemap.xml 이전에 도메인 구입 후 실제 도메인으로 변경
  };
}
