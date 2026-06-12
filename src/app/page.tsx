import Link from "next/link";
import { Suspense } from "react";

import { Hero } from "@/components/site/hero";
import { FAQ } from "@/features/faq/data";
import { FaqAccordion } from "@/features/faq/faq-accordion";
import { QuizFlow } from "@/features/quiz/quiz-flow";
import { ReservationForm } from "@/features/reservation/reservation-form";

const TREATMENT_OVERVIEW = [
  {
    id: "diagnosis",
    title: "사상체질 진단",
    chinese: "四 象 體 質 診 斷",
    duration: "70분 / 1–2회",
    seal: "診",
    summary:
      "맥진·설진·문진과 60문항 생활 평가로 네 가지 체질의 결을 가려냅니다.",
    flow: [
      "생활·증상 60문항 문진",
      "맥진 — 손목 세 자리의 깊이",
      "설진 — 혀의 색·결·코팅",
      "체형·기색 사진 기록",
      "사상체질 분류 + 한열·허실 분석",
      "체질 리포트 PDF + 처방 카드",
    ],
    suited: [
      "처음 내원해 진료 방향을 잡고 싶은 분",
      "다른 곳에서 받은 체질 진단이 다르게 나왔던 분",
      "체질에 맞는 식이·운동을 알고 싶은 분",
    ],
  },
  {
    id: "herbal",
    title: "맞춤 한약",
    chinese: "韓 藥 處 方",
    duration: "1개월 단위",
    seal: "藥",
    summary:
      "사상체질 결과를 바탕으로 류은서 원장이 직접 처방하는 탕약·환약·농축액.",
    flow: [
      "체질 결과 + 단기 우선순위 확인",
      "처방 설계 — 군신좌사 구성",
      "GMP 인증 탕전실에서 조제",
      "1개월분 파우치로 수령",
      "주 1회 카카오 체크인",
    ],
    suited: [
      "체질개선을 3개월 이상 길게 보는 분",
      "단기 회복(시험·휴가 전) 1개월 처방을 원하는 분",
      "양약을 줄이거나 함께 운영하려는 분",
    ],
  },
  {
    id: "pharmacopuncture",
    title: "약침",
    chinese: "藥 鍼 療 法",
    duration: "15–20분 / 주 1–2회",
    seal: "鍼",
    summary:
      "한약 정제액을 가느다란 침으로 정확한 경혈에 주입. 빠른 회복을 보조합니다.",
    flow: [
      "통증·피로 부위 진단",
      "체질·증상에 맞는 약침 액 선택",
      "초소형 침으로 경혈에 주입",
      "주 1–2회, 4–8주 효과 점검",
    ],
    suited: [
      "목·어깨·허리 만성통증이 있는 분",
      "두통·턱관절 긴장이 잦은 분",
      "한약과 함께 회복 속도를 끌어올리고 싶은 분",
    ],
  },
  {
    id: "sleep-digestion",
    title: "수면·소화 클리닉",
    chinese: "睡 眠 消 化",
    duration: "8주 패키지",
    seal: "養",
    summary:
      "직장인 만성피로의 두 축. 한약·약침·생활처방을 묶은 통합 프로그램.",
    flow: [
      "초진 — 체질 진단 + 수면·소화 평가",
      "1·2주차 — 맞춤 한약 + 주 1회 약침",
      "3–6주차 — 격주 약침 + 한약 조정",
      "7·8주차 — 생활 루틴 정착 + 재평가",
      "이후 분기별 유지 진료",
    ],
    suited: [
      "야근·회식으로 수면이 깨진 직장인",
      "잘 자도 아침이 무거운 분",
      "위장·소화 리듬이 무너진 분",
    ],
  },
];

const PHILOSOPHY = [
  {
    title: "체질이 먼저, 증상은 그 다음",
    body: "같은 두통도 태양인과 소음인은 다르게 다스립니다. 별채는 증상보다 먼저 체질의 결을 봅니다.",
  },
  {
    title: "한 박자 느린 진료실",
    body: "초진 70분, 재진도 충분한 시간. 진료실 속도를 늦추는 것이 회복의 시작입니다.",
  },
  {
    title: "직장인의 결에 맞춘 동선",
    body: "평일 저녁 8시까지, 토요일 오전까지. 카카오 체크인으로 복용 반응을 매주 가볍게.",
  },
];

const CAREER = [
  "2010 경희대학교 한의학과 졸업",
  "2014 경희대학교 대학원 사상체질의학 박사",
  "2014–2018 광동한방병원 임상과장",
  "2018–2024 강남구 한의원 진료부원장",
  "2025 별채 한의원 개원 — 북촌",
];

const HOURS = [
  { day: "월·화·목·금", time: "10:00 – 20:00" },
  { day: "수요일", time: "10:00 – 14:00 (반진료)" },
  { day: "토요일", time: "10:00 – 16:00" },
  { day: "일요일·공휴일", time: "휴진" },
];

const TRANSPORT = [
  {
    title: "지하철",
    body: "3호선 안국역 2번 출구\n도보 6분, 북촌 한옥마을 방면 골목 안쪽",
  },
  {
    title: "버스",
    body: "안국동·재동초등학교 정류장 하차 후 도보 3분\n간선 109·151·171, 지선 7025",
  },
  {
    title: "주차",
    body: "전용 주차장 없음\n재동·가회동 공영주차장 2시간 지원",
  },
];

export default function Home() {
  return (
    <>
      <span id="top" />
      <Hero />

      {/* ─────────────────────────── ABOUT ─────────────────────────── */}
      <section id="about" className="relative scroll-mt-24 bg-hanji py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <span className="font-myeongjo text-sm tracking-[0.4em] text-moss">
              別 宅
            </span>
            <h2 className="mt-6 font-myeongjo text-3xl leading-snug text-ink md:text-5xl">
              일상에서
              <br />한 걸음 떨어져
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ink-soft">
              본채는 매일의 자리, 별채는 한 박자 쉬는 자리. 별채 한의원은 도심
              직장인의 만성피로와 체질을 위한 조용한 서재입니다.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
              사상체질을 가려내고, 그 결에 맞는 한약과 약침으로 본래의 리듬을
              되찾습니다.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-paper-line bg-hanji-deep">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, #ddd4bd 0%, #c8bca0 60%, #8b7d62 100%)",
                }}
              />
              <svg
                viewBox="0 0 400 500"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden
              >
                <defs>
                  <linearGradient id="roof" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3a2a1b" />
                    <stop offset="100%" stopColor="#1f160e" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,320 Q100,240 200,280 T400,260 L400,500 L0,500 Z"
                  fill="#7a6f56"
                  opacity="0.4"
                />
                <path
                  d="M40,300 Q200,200 360,300 L360,330 L40,330 Z"
                  fill="url(#roof)"
                />
                <rect x="60" y="330" width="280" height="120" fill="#2a1f15" />
                <rect x="100" y="360" width="60" height="90" fill="#0d0905" />
                <rect x="240" y="360" width="60" height="90" fill="#0d0905" />
                <ellipse cx="200" cy="470" rx="20" ry="6" fill="#5a513e" />
                <ellipse cx="170" cy="485" rx="18" ry="5" fill="#5a513e" />
                <ellipse cx="230" cy="488" rx="18" ry="5" fill="#5a513e" />
              </svg>
              <div className="absolute right-4 top-4 ink-seal">別</div>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mx-auto mt-24 max-w-6xl px-6">
          <div className="grid gap-px bg-paper-line md:grid-cols-3">
            {PHILOSOPHY.map((p, i) => (
              <div
                key={p.title}
                className="flex flex-col gap-4 bg-hanji p-8 md:p-10"
              >
                <span className="font-myeongjo text-2xl text-moss/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-myeongjo text-xl text-ink">{p.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Doctor */}
        <div
          id="doctor"
          className="mx-auto mt-32 grid max-w-6xl scroll-mt-24 gap-16 px-6 md:grid-cols-[1fr_1.4fr] md:items-center"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden border border-paper-line bg-hanji-deep/60">
            <svg
              viewBox="0 0 200 250"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                <linearGradient id="avatar-bg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ece5d3" />
                  <stop offset="100%" stopColor="#c4b896" />
                </linearGradient>
              </defs>
              <rect width="200" height="250" fill="url(#avatar-bg)" />
              <circle cx="100" cy="100" r="42" fill="#1a1a1a" opacity="0.18" />
              <path
                d="M40,250 Q40,180 100,180 Q160,180 160,250 Z"
                fill="#1a1a1a"
                opacity="0.22"
              />
              <text
                x="100"
                y="232"
                textAnchor="middle"
                fontFamily="serif"
                fontSize="14"
                fill="#1a1a1a"
                opacity="0.5"
              >
                柳 銀 瑞
              </text>
            </svg>
            <div className="absolute right-4 top-4 ink-seal">柳</div>
          </div>

          <div>
            <span className="font-myeongjo text-sm tracking-[0.4em] text-moss">
              院 長 柳 銀 瑞
            </span>
            <h2 className="mt-4 font-myeongjo text-3xl leading-snug text-ink md:text-4xl">
              체질을 읽는 의사,
              <br />
              류은서 원장.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-ink-soft">
              사상체질을 평생의 공부로 삼아온 한의학 박사. 광동한방병원
              임상과장 시절부터 직장인의 만성피로에 사상체질이 가장 또렷한
              해석 도구가 된다는 것을 임상에서 확인해 왔습니다.
            </p>
            <ul className="mt-8 space-y-2 text-sm text-ink-soft">
              {CAREER.map((c) => (
                <li key={c}>· {c}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── TREATMENTS ─────────────────────────── */}
      <section
        id="treatments"
        className="scroll-mt-24 bg-hanji-deep/40 py-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="font-myeongjo text-sm tracking-[0.4em] text-moss">
              診 療
            </span>
            <h2 className="mt-4 font-myeongjo text-3xl leading-snug text-ink md:text-5xl">
              네 가지로 짚어내는,
              <br />네 가지로 채우는.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
              체질을 먼저 가려내고, 그 결에 맞는 한약·약침·생활처방으로 본래의
              리듬을 되돌립니다.
            </p>
          </div>

          <div className="mt-16 grid gap-px bg-paper-line md:grid-cols-2">
            {TREATMENT_OVERVIEW.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group relative flex flex-col gap-6 bg-hanji p-8 transition-colors hover:bg-hanji-deep/50 md:p-12"
              >
                <div className="flex items-start justify-between">
                  <span className="font-myeongjo text-3xl text-moss">
                    {item.seal}
                  </span>
                  <span className="text-xs tracking-widest text-ink-soft">
                    {item.duration}
                  </span>
                </div>
                <h3 className="font-myeongjo text-2xl text-ink">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {item.summary}
                </p>
                <span className="mt-auto pt-4 text-sm text-moss group-hover:underline">
                  자세히 보기 →
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Detail sections */}
        {TREATMENT_OVERVIEW.map((t, i) => (
          <div
            key={t.id}
            id={t.id}
            className={`scroll-mt-24 ${i === 0 ? "mt-24" : "mt-20"}`}
          >
            <div className="mx-auto max-w-6xl px-6">
              <div className="grid gap-12 md:grid-cols-[2fr_3fr] md:items-start">
                <div>
                  <span className="font-myeongjo text-xs tracking-[0.4em] text-moss">
                    {t.chinese}
                  </span>
                  <h3 className="mt-3 font-myeongjo text-2xl text-ink md:text-3xl">
                    {t.title}
                  </h3>
                  <p className="mt-4 text-xs tracking-widest text-ink-soft">
                    {t.duration}
                  </p>
                  <p className="mt-6 text-base leading-relaxed text-ink-soft">
                    {t.summary}
                  </p>
                  <div className="mt-8">
                    <h4 className="font-myeongjo text-sm tracking-[0.3em] text-moss">
                      이런 분께
                    </h4>
                    <ul className="mt-4 space-y-2 text-sm text-ink">
                      {t.suited.map((s) => (
                        <li key={s}>· {s}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border border-paper-line bg-hanji p-8 md:p-10">
                  <div className="flex items-center justify-between">
                    <h4 className="font-myeongjo text-sm tracking-[0.3em] text-moss">
                      진료 흐름
                    </h4>
                    <span className="ink-seal">{t.seal}</span>
                  </div>
                  <ol className="mt-6 space-y-4">
                    {t.flow.map((step, idx) => (
                      <li
                        key={step}
                        className="grid grid-cols-[36px_1fr] items-baseline gap-3"
                      >
                        <span className="font-myeongjo text-sm text-moss">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm leading-relaxed text-ink">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ─────────────────────────── QUIZ ─────────────────────────── */}
      <section
        id="quiz"
        className="scroll-mt-24 border-y border-paper-line bg-ink py-24 text-hanji"
      >
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="font-myeongjo text-sm tracking-[0.4em] text-moss/80">
            四 象 體 質
          </span>
          <h2 className="mt-4 font-myeongjo text-3xl leading-snug md:text-5xl">
            네 가지 질문이면,
            <br />당신의 체질이 보입니다.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-hanji/70 md:text-base">
            태양·태음·소양·소음. 약 60초의 응답으로 사상체질의 큰 결을
            가려보고, 결과에 맞는 진료를 추천해 드립니다.
          </p>
        </div>
      </section>

      <section className="bg-hanji py-24">
        <div className="px-6">
          <QuizFlow />
        </div>
      </section>

      {/* ─────────────────────────── LOCATION ─────────────────────────── */}
      <section
        id="location"
        className="scroll-mt-24 bg-hanji-deep/40 py-32"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="font-myeongjo text-sm tracking-[0.4em] text-moss">
              位 置
            </span>
            <h2 className="mt-4 font-myeongjo text-3xl leading-snug text-ink md:text-5xl">
              북촌 한옥 골목 안의
              <br />
              조용한 서재.
            </h2>
          </div>

          <div className="mt-16 grid gap-16 md:grid-cols-[1fr_1.4fr] md:items-start">
            <div>
              <p className="font-myeongjo text-2xl leading-snug text-ink">
                서울 종로구
                <br />
                북촌로 11길 14, 별채동
              </p>
              <p className="mt-2 text-sm text-ink-soft">우편번호 03059</p>

              <dl className="mt-10 space-y-3 text-sm">
                {HOURS.map((h) => (
                  <div
                    key={h.day}
                    className="grid grid-cols-[110px_1fr] gap-3"
                  >
                    <dt className="font-myeongjo text-ink-soft">{h.day}</dt>
                    <dd className="text-ink">{h.time}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 space-y-3 text-sm">
                <p>
                  <span className="font-myeongjo text-ink-soft">전화 </span>
                  <span className="text-ink">02-720-0000</span>
                </p>
                <p>
                  <span className="font-myeongjo text-ink-soft">카카오 </span>
                  <span className="text-ink">@별채한의원</span>
                </p>
              </div>
            </div>

            <div className="aspect-[4/3] w-full overflow-hidden border border-paper-line bg-hanji">
              <iframe
                title="별채 한의원 위치"
                src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EB%B6%81%EC%B4%8C%EB%A1%9C%2011%EA%B8%B8&output=embed"
                className="h-full w-full grayscale"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mt-20 grid gap-px bg-paper-line md:grid-cols-3">
            {TRANSPORT.map((t) => (
              <div
                key={t.title}
                className="flex flex-col gap-3 bg-hanji p-8"
              >
                <h3 className="font-myeongjo text-lg text-ink">{t.title}</h3>
                <p className="whitespace-pre-line text-sm leading-relaxed text-ink-soft">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── FAQ ─────────────────────────── */}
      <section id="faq" className="scroll-mt-24 bg-hanji py-32">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <span className="font-myeongjo text-sm tracking-[0.4em] text-moss">
              問 答
            </span>
            <h2 className="mt-4 font-myeongjo text-3xl leading-snug text-ink md:text-5xl">
              자주 묻는 질문.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
              진료실에서 자주 받는 열 가지 질문과 류은서 원장의 답변입니다.
            </p>
          </div>

          <div className="mt-16">
            <FaqAccordion items={FAQ} />
          </div>
        </div>
      </section>

      {/* ─────────────────────────── RESERVATION ─────────────────────────── */}
      <section
        id="reservation"
        className="scroll-mt-24 border-t border-paper-line bg-hanji-deep/40 py-32"
      >
        <div className="mx-auto max-w-2xl px-6">
          <div className="text-center">
            <span className="font-myeongjo text-sm tracking-[0.4em] text-moss">
              診 療 豫 約
            </span>
            <h2 className="mt-6 font-myeongjo text-3xl leading-snug text-ink md:text-5xl">
              먼저 한 박자
              <br />
              쉬어가시겠어요.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-soft">
              예약 요청을 보내주시면 영업일 기준 24시간 이내에 진료실에서
              카카오톡 또는 전화로 일정 확정을 도와드립니다.
            </p>
          </div>

          <div className="mt-16">
            <Suspense
              fallback={<div className="h-32 animate-pulse bg-hanji" />}
            >
              <ReservationForm />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Bottom anchor link */}
      <section className="border-t border-paper-line bg-hanji py-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 text-sm text-ink-soft">
          <Link href="#top" className="hover:text-ink">
            ↑ 맨 위로
          </Link>
          <p className="font-myeongjo">別 宅 韓 醫 院 · BYULCHAE</p>
        </div>
      </section>
    </>
  );
}
