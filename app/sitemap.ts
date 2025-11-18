import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fe-planet.com";

  // 정적 페이지들
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/interview-reviews`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
  ];

  // 동적 면접 후기 페이지들 (실제로는 데이터베이스나 API에서 가져와야 함)
  const interviewReviewIds = [1, 2, 3]; // 샘플 데이터
  const interviewReviewPages = interviewReviewIds.map((id) => ({
    url: `${baseUrl}/interview-reviews/${id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...interviewReviewPages];
}
