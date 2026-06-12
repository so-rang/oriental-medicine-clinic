import type { Metadata } from "next";
import Link from "next/link";

import { FAQ } from "@/features/faq/data";

export const metadata: Metadata = {
  title: "콘텐츠 관리 (목업)",
  description: "별채 한의원의 AEO/GEO 점수와 FAQ를 관리하는 목업 대시보드.",
  robots: { index: false, follow: false },
};

const SCORE = 91;
const SCORE_DELTA = +8;
const HISTORY = [62, 68, 71, 74, 80, 83, 85, 89, 87, 91];

const KEYWORDS = [
  { term: "사상체질", trend: +5, rank: 2 },
  { term: "북촌 한의원", trend: +12, rank: 1 },
  { term: "직장인 만성피로", trend: +3, rank: 4 },
  { term: "체질개선 한약", trend: +2, rank: 3 },
  { term: "수면 클리닉 한의원", trend: -1, rank: 6 },
  { term: "약침 효과", trend: +7, rank: 5 },
  { term: "한약 복용 커피", trend: +9, rank: 1 },
];

const AI_KEYWORDS_COUNT = 23;

const FAQ_DRAFT = [
  { question: "체질개선 한약 가격은 어느 정도인가요?", status: "초안" },
  { question: "외국인도 진료받을 수 있나요?", status: "검토 대기" },
];

const CONTENT_CARDS = [
  { id: "homepage-hero", label: "랜딩 — Hero 카피", updated: "2시간 전" },
  { id: "treatments-diagnosis", label: "진료 — 사상체질 진단", updated: "어제" },
  { id: "doctor-bio", label: "원장 소개", updated: "3일 전" },
  { id: "philosophy", label: "진료 철학", updated: "1주 전" },
];

export default function AdminPage() {
  const max = Math.max(...HISTORY);
  const min = Math.min(...HISTORY);
  const range = max - min || 1;
  const points = HISTORY.map(
    (v, i) =>
      `${(i / (HISTORY.length - 1)) * 100},${100 - ((v - min) / range) * 100}`
  ).join(" ");

  return (
    <div className="bg-hanji-deep/20">
      {/* Admin top bar */}
      <div className="border-b border-paper-line bg-hanji">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="ink-seal text-base">別</span>
            <div>
              <p className="font-myeongjo text-sm text-ink">
                별채 한의원 콘텐츠 관리
              </p>
              <p className="text-xs text-ink-soft">demo · read-only mockup</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-ink-soft">
            <span>류은서 원장</span>
            <Link href="/" className="hover:text-ink">
              사이트로 돌아가기 →
            </Link>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Top row — score */}
        <div className="grid gap-6 lg:grid-cols-[2fr_1.4fr]">
          {/* AEO Score */}
          <section className="border border-paper-line bg-hanji p-8 md:p-10">
            <div className="flex items-baseline justify-between">
              <div>
                <p className="font-myeongjo text-xs tracking-[0.4em] text-moss">
                  AEO SCORE
                </p>
                <p className="mt-2 text-xs text-ink-soft">
                  AI 답변·검색 노출 종합 지수 · 주간 갱신
                </p>
              </div>
              <span className="rounded-full bg-moss/10 px-3 py-1 text-xs text-moss">
                ↗ +{SCORE_DELTA} 이번 주
              </span>
            </div>

            <div className="mt-8 flex items-end gap-8">
              <p className="font-myeongjo text-7xl leading-none text-ink md:text-8xl">
                {SCORE}
              </p>
              <p className="pb-2 font-myeongjo text-base text-ink-soft">/ 100</p>
            </div>

            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="mt-8 h-32 w-full"
            >
              <defs>
                <linearGradient id="trend" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4a5c3f" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#4a5c3f" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polyline
                points={points}
                fill="none"
                stroke="#4a5c3f"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
              <polygon
                points={`0,100 ${points} 100,100`}
                fill="url(#trend)"
              />
              {HISTORY.map((v, i) => (
                <circle
                  key={i}
                  cx={(i / (HISTORY.length - 1)) * 100}
                  cy={100 - ((v - min) / range) * 100}
                  r="0.8"
                  fill="#1a1a1a"
                />
              ))}
            </svg>

            <div className="mt-4 grid grid-cols-3 gap-4 text-xs text-ink-soft">
              <div>
                <p>10주 전 최저</p>
                <p className="font-myeongjo text-base text-ink">{min}</p>
              </div>
              <div>
                <p>주간 평균 +3</p>
                <p className="font-myeongjo text-base text-ink">
                  안정적 상승
                </p>
              </div>
              <div>
                <p>이번 주 최고</p>
                <p className="font-myeongjo text-base text-ink">{max}</p>
              </div>
            </div>
          </section>

          {/* Right column */}
          <div className="grid gap-6">
            <section className="border border-paper-line bg-hanji p-6 md:p-8">
              <p className="font-myeongjo text-xs tracking-[0.4em] text-moss">
                AI 노출 키워드
              </p>
              <p className="mt-3 flex items-baseline gap-2">
                <span className="font-myeongjo text-5xl text-ink">
                  {AI_KEYWORDS_COUNT}
                </span>
                <span className="text-sm text-ink-soft">개</span>
              </p>
              <p className="mt-3 text-xs text-ink-soft">
                ChatGPT·Perplexity·Gemini 답변에 별채 한의원 콘텐츠가 인용된
                키워드 수입니다.
              </p>
              <button className="mt-6 w-full border border-ink/30 px-4 py-2 text-xs text-ink hover:border-ink">
                AI 답변 재최적화 시뮬레이션 →
              </button>
            </section>

            <section className="border border-paper-line bg-ink p-6 text-hanji md:p-8">
              <p className="font-myeongjo text-xs tracking-[0.4em] text-moss/80">
                다음 액션
              </p>
              <p className="mt-3 font-myeongjo text-lg leading-relaxed">
                FAQ에 ‘체질개선 한약 가격’ 답변을 추가하면 예상 점수 <span className="text-moss">+3</span>.
              </p>
              <button className="mt-6 w-full bg-hanji px-4 py-2 font-myeongjo text-xs text-ink">
                지금 작성 →
              </button>
            </section>
          </div>
        </div>

        {/* Keywords table */}
        <section className="mt-10 border border-paper-line bg-hanji">
          <div className="flex items-baseline justify-between border-b border-paper-line p-6 md:p-8">
            <div>
              <p className="font-myeongjo text-xs tracking-[0.4em] text-moss">
                챔피언 키워드
              </p>
              <h2 className="mt-2 font-myeongjo text-2xl text-ink">
                이번 주의 결
              </h2>
            </div>
            <button className="text-xs text-ink-soft hover:text-ink">
              + 키워드 추적 추가
            </button>
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-paper-line bg-hanji-deep/20 text-xs text-ink-soft">
                <th className="px-6 py-3 text-left font-normal">키워드</th>
                <th className="px-6 py-3 text-left font-normal">AI 답변 순위</th>
                <th className="px-6 py-3 text-left font-normal">주간 변화</th>
                <th className="px-6 py-3 text-right font-normal">콘텐츠</th>
              </tr>
            </thead>
            <tbody>
              {KEYWORDS.map((k) => (
                <tr key={k.term} className="border-b border-paper-line">
                  <td className="px-6 py-4 font-myeongjo text-ink">
                    {k.term}
                  </td>
                  <td className="px-6 py-4 text-ink-soft">{k.rank}위</td>
                  <td
                    className={`px-6 py-4 ${
                      k.trend >= 0 ? "text-moss" : "text-vermilion"
                    }`}
                  >
                    {k.trend > 0 ? "↗" : "↘"} {Math.abs(k.trend)}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-xs text-ink-soft hover:text-ink hover:underline">
                      답변 보기
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* FAQ editor + content cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <section className="border border-paper-line bg-hanji">
            <div className="flex items-baseline justify-between border-b border-paper-line p-6">
              <p className="font-myeongjo text-base text-ink">FAQ 편집</p>
              <button className="text-xs text-moss hover:underline">
                + 새 질문
              </button>
            </div>
            <ul className="divide-y divide-paper-line">
              {FAQ.slice(0, 5).map((item) => (
                <li
                  key={item.question}
                  className="flex items-start justify-between gap-4 px-6 py-4 hover:bg-hanji-deep/20"
                >
                  <div>
                    <p className="font-myeongjo text-sm text-ink">
                      {item.question}
                    </p>
                    <p className="mt-1 text-xs text-ink-soft">
                      {item.category} · 게시 중
                    </p>
                  </div>
                  <button className="text-xs text-ink-soft hover:text-ink">
                    편집
                  </button>
                </li>
              ))}
              {FAQ_DRAFT.map((item) => (
                <li
                  key={item.question}
                  className="flex items-start justify-between gap-4 bg-moss/5 px-6 py-4"
                >
                  <div>
                    <p className="font-myeongjo text-sm text-ink">
                      {item.question}
                    </p>
                    <p className="mt-1 text-xs text-moss">
                      AI 추천 · {item.status}
                    </p>
                  </div>
                  <button className="text-xs text-moss hover:underline">
                    답변 작성 →
                  </button>
                </li>
              ))}
            </ul>
          </section>

          <section className="border border-paper-line bg-hanji">
            <div className="flex items-baseline justify-between border-b border-paper-line p-6">
              <p className="font-myeongjo text-base text-ink">콘텐츠 매니저</p>
              <button className="text-xs text-ink-soft hover:text-ink">
                필터
              </button>
            </div>
            <ul className="divide-y divide-paper-line">
              {CONTENT_CARDS.map((c) => (
                <li
                  key={c.id}
                  className="flex items-start justify-between gap-4 px-6 py-4 hover:bg-hanji-deep/20"
                >
                  <div>
                    <p className="font-myeongjo text-sm text-ink">{c.label}</p>
                    <p className="mt-1 text-xs text-ink-soft">
                      마지막 수정 · {c.updated}
                    </p>
                  </div>
                  <button className="text-xs text-ink-soft hover:text-ink">
                    열기
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
