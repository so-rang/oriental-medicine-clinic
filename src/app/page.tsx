import Image from "next/image";
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
              <Image
                src="/images/byulchae-interior.jpg"
                alt="별채 한의원 내부 — 한옥 서까래와 격자 창살, 모던한 흰 의자가 어우러진 진료 공간"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
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
            <Image
              src="/images/consultation-room.png"
              alt="별채 한의원 진료실 — 류은서 원장이 진맥을 보는 한옥 공간"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(245,241,232,0.05) 0%, rgba(15,20,15,0.15) 100%)",
              }}
            />
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

      {/* Cinematic transition cut */}
      <section
        aria-hidden
        className="relative h-[40svh] min-h-[280px] w-full overflow-hidden"
      >
        <Image
          src="/images/hero-gate.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--color-hanji-deep) 0%, rgba(15,20,15,0.4) 30%, rgba(15,20,15,0.7) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <p className="font-myeongjo text-2xl leading-relaxed text-hanji md:text-3xl">
            “ 같은 증상도, 다른 체질로. ”
          </p>
        </div>
      </section>

      {/* ─────────────────────────── QUIZ ─────────────────────────── */}
      <section
        id="quiz"
        className="scroll-mt-24 bg-ink py-24 text-hanji"
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
      <section id="location" className="scroll-mt-24">
        {/* Full-width hanok alley header */}
        <div className="relative h-[50svh] min-h-[400px] w-full overflow-hidden">
          <Image
            src="/images/alley.jpg"
            alt="블루아워의 북촌 한옥 마을 골목"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,20,15,0.35) 0%, rgba(15,20,15,0.15) 50%, var(--color-hanji-deep) 100%)",
            }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-hanji">
            <span className="font-myeongjo text-sm tracking-[0.4em] text-hanji/80">
              位 置
            </span>
            <h2 className="mt-4 font-myeongjo text-3xl leading-snug md:text-5xl">
              북촌 한옥 골목 안의
              <br />
              조용한 서재.
            </h2>
          </div>
        </div>

        <div className="bg-hanji-deep/40 py-24">
          <div className="mx-auto max-w-6xl px-6">

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
        </div>
      </section>

      {/* ─────────────────────────── FAQ ─────────────────────────── */}
      <section id="faq" className="scroll-mt-24 bg-hanji py-20">
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
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <span className="font-myeongjo text-xs tracking-[0.4em] text-moss">
              問 答
            </span>
            <h2 className="mt-3 font-myeongjo text-2xl leading-snug text-ink md:text-3xl">
              자주 묻는 질문.
            </h2>
          </div>

          <div className="mt-10">
            <FaqAccordion items={FAQ} />
          </div>
        </div>
      </section>

      {/* ─────────────────────────── RESERVATION ─────────────────────────── */}
      <section
        id="reservation"
        className="scroll-mt-24 border-t border-paper-line bg-hanji-deep/40 py-16"
      >
        <div className="mx-auto max-w-2xl px-6">
          <div className="text-center">
            <span className="font-myeongjo text-xs tracking-[0.4em] text-moss">
              診 療 豫 約
            </span>
            <h2 className="mt-3 font-myeongjo text-2xl leading-snug text-ink md:text-3xl">
              진료 문의.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
              영업일 24시간 이내 카카오톡·전화로 일정 확정을 도와드립니다.
            </p>
          </div>

          <div className="mt-8">
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
