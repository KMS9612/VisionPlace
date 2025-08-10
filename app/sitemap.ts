import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://visionplace.vercel.app";
  return [
    {
      url: baseUrl, // 실제 도메인으로 변경
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    // 동적 경로가 있다면 여기에 추가
  ];
}
