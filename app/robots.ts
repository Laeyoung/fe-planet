import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Yeti", // 네이버 검색 봇
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: "https://fe-planet.com/sitemap.xml",
    host: "https://fe-planet.com",
  };
}
