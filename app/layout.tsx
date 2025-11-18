import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "FE Planet - 프론트엔드 개발자 면접 후기 및 커뮤니티",
    template: "%s | FE Planet",
  },
  description: "프론트엔드 개발자들의 면접 후기, 기술 면접 질문, 코딩 테스트 정보를 공유하는 커뮤니티입니다. 네이버, 카카오, 토스 등 주요 IT 기업의 면접 경험을 확인하세요.",
  keywords: ["면접 후기", "프론트엔드", "개발자 면접", "기술 면접", "코딩 테스트", "IT 취업", "면접 질문", "개발자 커뮤니티"],
  authors: [{ name: "FE Planet" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://fe-planet.com",
    siteName: "FE Planet",
    title: "FE Planet - 프론트엔드 개발자 면접 후기 커뮤니티",
    description: "프론트엔드 개발자들의 면접 후기와 기술 정보를 공유하는 커뮤니티",
  },
  twitter: {
    card: "summary_large_image",
    title: "FE Planet - 프론트엔드 개발자 면접 후기",
    description: "프론트엔드 개발자들의 면접 후기와 기술 정보 공유",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "",
    other: {
      "naver-site-verification": "",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
