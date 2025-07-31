import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // 크롤링을 원치 않는 경로
    },
    sitemap: "https://visionplace.io/sitemap.xml", // 실제 도메인으로 변경
  };
}
