import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "면접 후기 | FE Planet - 프론트엔드 개발자 면접 경험 공유",
  description: "프론트엔드 개발자들의 실제 면접 경험과 후기를 공유합니다. 네이버, 카카오, 토스, 쿠팡 등 주요 IT 기업의 면접 질문, 코딩 테스트, 기술 면접 정보를 확인하세요.",
  keywords: ["면접 후기", "프론트엔드 면접", "개발자 면접", "면접 경험", "IT 면접", "코딩 테스트", "기술 면접", "취업 후기"],
  openGraph: {
    title: "프론트엔드 개발자 면접 후기 | FE Planet",
    description: "프론트엔드 개발자들의 실제 면접 경험과 후기를 공유합니다. 주요 IT 기업의 면접 정보를 확인하세요.",
    type: "website",
    locale: "ko_KR",
    siteName: "FE Planet",
  },
  alternates: {
    canonical: "/interview-reviews",
  },
  other: {
    "naver-site-verification": "",
    "google-site-verification": "",
  },
};

// 샘플 면접 후기 데이터 (추후 API로 대체 가능)
const interviewReviews = [
  {
    id: 1,
    company: "네이버",
    position: "프론트엔드 개발자",
    date: "2024-11",
    rating: 4,
    summary: "React와 TypeScript에 대한 깊이 있는 질문이 많았습니다.",
    tags: ["React", "TypeScript", "알고리즘"],
  },
  {
    id: 2,
    company: "카카오",
    position: "프론트엔드 개발자",
    date: "2024-10",
    rating: 5,
    summary: "실무 중심의 프로젝트 경험에 대해 자세히 물어보셨습니다.",
    tags: ["Vue.js", "성능 최적화", "프로젝트 경험"],
  },
  {
    id: 3,
    company: "토스",
    position: "프론트엔드 개발자",
    date: "2024-09",
    rating: 4,
    summary: "코딩 테스트와 시스템 디자인 문제가 인상적이었습니다.",
    tags: ["JavaScript", "시스템 디자인", "코딩 테스트"],
  },
];

export default function InterviewReviews() {
  // JSON-LD 구조화된 데이터
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "프론트엔드 개발자 면접 후기",
    description: "프론트엔드 개발자들의 실제 면접 경험과 후기 공유",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "홈",
          item: "https://fe-planet.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "면접 후기",
          item: "https://fe-planet.com/interview-reviews",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen p-8 max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            프론트엔드 개발자 면접 후기
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            실제 면접을 경험한 개발자들의 생생한 후기와 팁을 공유합니다.
          </p>
        </div>

        {/* 검색 및 필터 영역 */}
        <div className="mb-8">
          <div className="flex gap-4 flex-wrap">
            <input
              type="text"
              placeholder="기업명 또는 키워드로 검색..."
              className="flex-1 min-w-[300px] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
              <option value="">전체 기업</option>
              <option value="naver">네이버</option>
              <option value="kakao">카카오</option>
              <option value="toss">토스</option>
              <option value="coupang">쿠팡</option>
            </select>
          </div>
        </div>

        {/* 면접 후기 목록 */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {interviewReviews.map((review) => (
            <article
              key={review.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {review.company}
                </h2>
                <div className="flex items-center">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">
                    {review.rating}/5
                  </span>
                </div>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {review.position} · {review.date}
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
                {review.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {review.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={`/interview-reviews/${review.id}`}
                className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
              >
                자세히 보기 →
              </a>
            </article>
          ))}
        </div>

        {/* 후기 작성 안내 */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            면접 후기를 공유해주세요
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            여러분의 경험이 다른 개발자들에게 큰 도움이 됩니다.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            후기 작성하기
          </button>
        </div>

        {/* SEO를 위한 추가 콘텐츠 */}
        <section className="mt-16 prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            면접 후기가 중요한 이유
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                실제 면접 경험 공유
              </h3>
              <p>
                프론트엔드 개발자 면접에서 실제로 나온 질문과 코딩 테스트 문제를
                통해 면접 준비에 도움을 받을 수 있습니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                기업별 면접 정보
              </h3>
              <p>
                네이버, 카카오, 토스, 쿠팡 등 주요 IT 기업의 면접 프로세스와
                분위기를 미리 파악할 수 있습니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                기술 스택별 질문
              </h3>
              <p>
                React, Vue.js, TypeScript 등 기술 스택별로 자주 나오는
                면접 질문을 확인할 수 있습니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                합격 팁과 전략
              </h3>
              <p>
                실제로 합격한 개발자들의 준비 방법과 면접 팁을
                통해 효과적으로 면접을 준비할 수 있습니다.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
