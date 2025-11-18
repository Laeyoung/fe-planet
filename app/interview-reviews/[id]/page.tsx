import type { Metadata } from "next";
import { notFound } from "next/navigation";

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
    content: `
## 지원 과정

네이버 프론트엔드 개발자 포지션에 지원했습니다. 서류 전형 후 코딩 테스트, 1차 기술 면접, 2차 실무 면접, 최종 임원 면접 순으로 진행되었습니다.

## 코딩 테스트

온라인 코딩 테스트로 진행되었으며, 3시간 동안 3-4문제를 풀어야 했습니다. 알고리즘 문제는 백준 골드 수준이었고, 자료구조에 대한 이해가 필요했습니다.

## 1차 기술 면접

### 주요 질문
- React의 Virtual DOM 동작 원리
- TypeScript의 제네릭 활용 경험
- 상태 관리 라이브러리 선택 기준
- 웹 성능 최적화 경험
- HTTP/HTTPS 차이점과 보안

면접관분들이 매우 친절하셨고, 모르는 부분은 솔직하게 말씀드렸습니다. 실무 경험을 바탕으로 구체적으로 답변하는 것이 중요했습니다.

## 2차 실무 면접

프로젝트 경험에 대해 깊이 있게 질문하셨습니다. 특히 어려웠던 문제를 어떻게 해결했는지, 팀원들과 어떻게 협업했는지에 대한 질문이 많았습니다.

## 준비 팁

1. **React 공식 문서**: 기본기가 정말 중요합니다
2. **알고리즘**: 백준, 프로그래머스 꾸준히 풀기
3. **프로젝트 회고**: 본인의 프로젝트를 깊이 있게 설명할 수 있어야 합니다
4. **CS 지식**: 네트워크, 운영체제 기본은 필수

## 면접 분위기

전체적으로 매우 좋았습니다. 압박 면접은 전혀 없었고, 오히려 편안하게 대화하는 분위기였습니다.
    `,
  },
  {
    id: 2,
    company: "카카오",
    position: "프론트엔드 개발자",
    date: "2024-10",
    rating: 5,
    summary: "실무 중심의 프로젝트 경험에 대해 자세히 물어보셨습니다.",
    tags: ["Vue.js", "성능 최적화", "프로젝트 경험"],
    content: `
## 전형 과정

카카오 프론트엔드 개발자 공채에 지원했습니다. 서류 → 코딩 테스트 → 1차 면접 → 2차 면접 순으로 진행되었습니다.

## 코딩 테스트

프로그래머스 플랫폼에서 진행되었으며, 4시간 동안 5문제를 풀었습니다. 난이도는 레벨 2-3 정도였고, JavaScript로 풀었습니다.

## 1차 기술 면접

### 질문 내용
- Vue.js의 반응성 시스템 설명
- 웹 성능 최적화 경험 (구체적인 수치 포함)
- REST API vs GraphQL 비교
- 브라우저 렌더링 과정
- CORS 이슈 해결 경험

프로젝트에서 성능을 개선했던 경험을 구체적인 수치와 함께 설명했더니 좋은 반응을 얻었습니다.

## 2차 실무 면접

팀 문화와 협업 방식에 대한 질문이 많았습니다. 코드 리뷰 경험, Git 브랜치 전략, 애자일 방법론 등에 대해 물어보셨습니다.

## 합격 비결

- 실무 프로젝트에서 측정 가능한 성과를 만들어두기
- 기술 블로그나 오픈소스 기여 활동
- 최신 프론트엔드 트렌드 학습

## 분위기

카카오 특유의 자유로운 분위기가 면접에서도 느껴졌습니다. 수평적인 문화가 인상적이었습니다.
    `,
  },
  {
    id: 3,
    company: "토스",
    position: "프론트엔드 개발자",
    date: "2024-09",
    rating: 4,
    summary: "코딩 테스트와 시스템 디자인 문제가 인상적이었습니다.",
    tags: ["JavaScript", "시스템 디자인", "코딩 테스트"],
    content: `
## 지원 과정

토스 프론트엔드 개발자에 지원했습니다. 토스는 채용 과정이 조금 특이한데, 과제 전형이 있었습니다.

## 과제 전형

실제 서비스와 유사한 기능을 구현하는 과제가 주어졌습니다. 일주일 정도의 기간이 주어졌고, 코드 품질과 사용자 경험을 모두 고려해야 했습니다.

### 과제 평가 기준
- 코드 품질 (가독성, 재사용성)
- 사용자 경험 (UI/UX)
- 성능 최적화
- 테스트 코드 작성

## 1차 기술 면접

과제에 대한 설명과 함께 기술 면접이 진행되었습니다.

### 질문 내용
- 과제에서 특정 기술을 선택한 이유
- JavaScript 비동기 처리 (Promise, async/await)
- 모듈 번들러 (Webpack, Vite) 이해도
- 시스템 디자인: 대용량 트래픽 처리
- 테스트 자동화 경험

시스템 디자인 문제가 특히 어려웠습니다. 화이트보드에 아키텍처를 그리며 설명해야 했습니다.

## 2차 컬쳐핏 면접

토스의 핵심 가치와 문화에 대한 질문이 많았습니다. "고객을 생각하는 제품을 만든 경험", "빠르게 실패하고 배운 경험" 등을 물어보셨습니다.

## 준비 사항

1. **과제 전형 준비**: 깔끔한 코드 작성 연습
2. **시스템 디자인**: Grokking the System Design Interview 추천
3. **토스 기술 블로그**: 회사의 기술 문화 이해하기
4. **테스트 코드**: Jest, Testing Library 학습

## 특이사항

토스는 기술적 역량뿐만 아니라 제품에 대한 관심도 매우 중요하게 봤습니다. 토스 앱을 직접 사용해보고 개선점을 생각해보는 것이 도움이 됩니다.
    `,
  },
];

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const review = interviewReviews.find((r) => r.id === parseInt(params.id));

  if (!review) {
    return {
      title: "면접 후기를 찾을 수 없습니다 | FE Planet",
    };
  }

  return {
    title: `${review.company} ${review.position} 면접 후기 | FE Planet`,
    description: `${review.company} ${review.position} 면접 경험을 공유합니다. ${review.summary}`,
    keywords: [
      `${review.company} 면접`,
      `${review.company} 면접 후기`,
      "프론트엔드 면접",
      ...review.tags,
    ],
    openGraph: {
      title: `${review.company} ${review.position} 면접 후기`,
      description: review.summary,
      type: "article",
      locale: "ko_KR",
      siteName: "FE Planet",
      publishedTime: review.date,
      tags: review.tags,
    },
    alternates: {
      canonical: `/interview-reviews/${review.id}`,
    },
  };
}

export async function generateStaticParams() {
  return interviewReviews.map((review) => ({
    id: review.id.toString(),
  }));
}

export default function InterviewReviewDetail({ params }: PageProps) {
  const review = interviewReviews.find((r) => r.id === parseInt(params.id));

  if (!review) {
    notFound();
  }

  // JSON-LD 구조화된 데이터
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: review.company,
    },
    author: {
      "@type": "Person",
      name: "익명의 개발자",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating,
      bestRating: 5,
    },
    reviewBody: review.summary,
    datePublished: review.date,
    name: `${review.company} ${review.position} 면접 후기`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen p-8 max-w-4xl mx-auto">
        {/* 상단 네비게이션 */}
        <nav className="mb-8">
          <a
            href="/interview-reviews"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← 면접 후기 목록으로
          </a>
        </nav>

        {/* 헤더 */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              {review.company}
            </h1>
            <div className="flex items-center bg-yellow-100 dark:bg-yellow-900/30 px-3 py-1 rounded-full">
              <span className="text-yellow-600 dark:text-yellow-400 text-lg">★</span>
              <span className="ml-1 text-sm font-semibold text-yellow-800 dark:text-yellow-200">
                {review.rating}/5
              </span>
            </div>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
            {review.position}
          </p>

          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span>📅 {review.date}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {review.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* 요약 */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
            💡 한줄 요약
          </h2>
          <p className="text-gray-700 dark:text-gray-300">{review.summary}</p>
        </div>

        {/* 본문 */}
        <article className="prose dark:prose-invert max-w-none">
          <div className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap leading-relaxed">
            {review.content}
          </div>
        </article>

        {/* 공유 및 도움 버튼 */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              👍 도움이 되었어요
            </button>
            <button className="px-6 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              🔗 공유하기
            </button>
          </div>
        </div>

        {/* 관련 후기 */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            다른 면접 후기 보기
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {interviewReviews
              .filter((r) => r.id !== review.id)
              .slice(0, 2)
              .map((relatedReview) => (
                <a
                  key={relatedReview.id}
                  href={`/interview-reviews/${relatedReview.id}`}
                  className="block bg-white dark:bg-gray-800 rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {relatedReview.company}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {relatedReview.position}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-2">
                    {relatedReview.summary}
                  </p>
                </a>
              ))}
          </div>
        </section>
      </main>
    </>
  );
}
