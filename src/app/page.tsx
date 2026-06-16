import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { Hero } from "@/components/site/hero";
import { Reveal } from "@/components/site/reveal";
import { LinkButton } from "@/components/ui/button";
import { FAQ } from "@/features/faq/data";
import { FaqAccordion } from "@/features/faq/faq-accordion";
import { RESULTS, type Constitution } from "@/features/quiz/data";
import { QuizFlow } from "@/features/quiz/quiz-flow";
import { ReservationForm } from "@/features/reservation/reservation-form";

const CONSTITUTION_ORDER: Constitution[] = [
  "taeyang",
  "taeum",
  "soyang",
  "soeum",
];

const TREATMENTS = [
  {
    id: "diagnosis",
    title: "사상체질 진단",
    hanja: "四象體質",
    duration: "70분 · 1–2회",
    image: "/images/tx-diagnosis.jpg",
    alt: "맥진을 위해 손목을 받침에 올린 손 — 차분한 진단 장면",
    summary:
      "맥진·설진·문진과 60문항 생활 평가로 네 가지 체질의 결을 가려냅니다. 결과는 리포트와 처방 카드로.",
    suited: ["처음 내원해 방향을 잡고 싶은 분", "체질에 맞는 식이·운동이 궁금한 분"],
  },
  {
    id: "herbal",
    title: "맞춤 한약",
    hanja: "韓藥處方",
    duration: "1개월 단위",
    image: "/images/tx-herbal.jpg",
    alt: "정갈하게 놓인 한약 파우치와 약재, 호박빛 농축액",
    summary:
      "체질 결과를 바탕으로 류은서 원장이 직접 설계해 GMP 탕전실에서 조제하는 탕약·환약·농축액.",
    suited: ["체질개선을 길게 보는 분", "단기 회복 처방이 필요한 분"],
  },
  {
    id: "pharmacopuncture",
    title: "약침",
    hanja: "藥鍼療法",
    duration: "15–20분 · 주 1–2회",
    image: "/images/tx-pharma.jpg",
    alt: "트레이에 놓인 가는 침과 호박빛 약침 앰플",
    summary:
      "한약 정제액을 가는 침으로 경혈에 정확히 주입해, 통증과 피로의 회복을 부드럽게 보조합니다.",
    suited: ["목·어깨·허리 만성통증이 있는 분", "회복 속도를 끌어올리고 싶은 분"],
  },
  {
    id: "sleep-digestion",
    title: "수면·소화 클리닉",
    hanja: "睡眠消化",
    duration: "8주 패키지",
    image: "/images/tx-sleep.jpg",
    alt: "대추와 약재를 우린 따뜻한 한방차 한 잔",
    summary:
      "직장인 만성피로의 두 축. 한약·약침·생활처방을 묶어 8주 동안 수면과 소화의 리듬을 다듬습니다.",
    suited: ["야근·회식으로 수면이 깨진 분", "잘 자도 아침이 무거운 분"],
  },
];

const PHILOSOPHY = [
  {
    title: "체질이 먼저, 증상은 그 다음",
    body: "같은 두통도 태양인과 소음인은 다르게 다스립니다. 증상보다 먼저 체질의 결을 봅니다.",
  },
  {
    title: "한 박자 느린 진료실",
    body: "초진 70분, 재진도 충분한 시간. 진료실의 속도를 늦추는 것이 회복의 시작입니다.",
  },
  {
    title: "직장인의 결에 맞춘 동선",
    body: "평일 저녁 8시까지, 토요일 오전까지. 카카오 체크인으로 복용 반응을 매주 가볍게.",
  },
];

const CAREER = [
  "경희대학교 한의학과 졸업",
  "경희대학교 대학원 사상체질의학 박사",
  "전) 광동한방병원 임상과장",
  "대한사상체질의학회 정회원",
];

const HOURS = [
  { day: "월·화·목·금", time: "10:00 – 20:00" },
  { day: "수요일", time: "10:00 – 14:00" },
  { day: "토요일", time: "10:00 – 16:00" },
  { day: "일·공휴일", time: "휴진" },
];

const TRANSPORT = [
  { title: "지하철", body: "3호선 안국역 2번 출구 도보 6분" },
  { title: "버스", body: "안국동·재동초교 정류장 도보 3분" },
  { title: "주차", body: "재동·가회동 공영주차장 2시간 지원" },
];

const SYMPTOMS = [
  { ko: "무거운 아침", en: "Fatigue" },
  { ko: "깨지는 수면", en: "Sleep" },
  { ko: "더부룩한 속", en: "Digestion" },
  { ko: "굳은 목·어깨", en: "Tension" },
];

function SectionLabel({ ko, en }: { ko: string; en: string }) {
  return (
    <span className="eyebrow inline-flex items-center gap-2">
      <span className="h-1 w-1 rounded-full bg-sage" />
      {en} · {ko}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <span id="top" />
      <Hero />

      {/* ── 공감 스트립 ───────────────────────────────────── */}
      <section className="border-t border-paper-line bg-white py-10 md:py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xs text-sm leading-relaxed text-ink-soft">
              이런 하루를 반복하고 있다면,
              <br className="hidden md:block" />
              한 번쯤 <span className="text-moss">체질</span>을 들여다볼
              때입니다.
            </p>
            <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-4 md:max-w-2xl">
              {SYMPTOMS.map((s) => (
                <div
                  key={s.en}
                  className="rounded-2xl border border-paper-line bg-hanji px-4 py-4 text-center"
                >
                  <p className="break-keep font-myeongjo text-sm text-ink md:text-base">
                    {s.ko}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 체질 진단 (주인공) ───────────────────────────── */}
      <section
        id="quiz"
        className="scroll-mt-20 border-y border-paper-line bg-white py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14">
            <div>
              <SectionLabel ko="사상체질" en="Constitution" />
              <h2 className="mt-5 font-myeongjo text-3xl leading-tight text-ink md:text-5xl">
                당신의 체질은
                <br />
                어디에 가까울까요
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
                사상체질은 타고난 몸의 결을 넷으로 나눠 봅니다. 결을 알면
                같은 피로도 다르게 풀 수 있어요. 먼저 1분 진단으로 큰 방향을
                가늠해 보세요.
              </p>
            </div>
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[1.5rem] bg-hanji-deep shadow-[0_30px_60px_-40px_rgba(31,46,37,0.4)]">
              <Image
                src="/images/constitution.jpg"
                alt="네 개의 백자 접시에 담긴 사상체질별 약재 — 깔끔한 오버헤드 정물"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          {/* 4 constitutions */}
          <Reveal className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONSTITUTION_ORDER.map((key) => {
              const c = RESULTS[key];
              return (
                <div
                  key={key}
                  className="card flex flex-col gap-3 p-6 transition-transform duration-200 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-myeongjo text-xl text-ink">
                      {c.name}
                    </span>
                    <span className="text-xs tracking-[0.2em] text-sage">
                      {c.hanja}
                    </span>
                  </div>
                  <p className="font-myeongjo text-sm text-moss">
                    {c.tagline}
                  </p>
                  <p className="text-sm leading-relaxed text-ink-soft">
                    {c.description.split(".")[0]}.
                  </p>
                </div>
              );
            })}
          </Reveal>

          {/* Interactive quiz */}
          <Reveal className="card mt-12 px-6 py-12 md:px-16 md:py-16">
            <div className="text-center">
              <h3 className="font-myeongjo text-2xl text-ink md:text-3xl">
                1분 체질 진단
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
                네 가지 질문이면 큰 결이 보입니다. 결과에 맞는 진료까지
                안내해 드려요.
              </p>
            </div>
            <div className="mt-10">
              <QuizFlow />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 분위기 밴드 · 약장 ────────────────────────────── */}
      <section aria-hidden className="relative h-[44vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src="/images/apothecary.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-moss-deep/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-10">
          <p className="font-myeongjo text-xl leading-snug text-hanji drop-shadow-sm md:text-3xl">
            한 사람의 결에 맞춰,
            <br />
            한 첩씩 짓습니다.
          </p>
        </div>
      </section>

      {/* ── 진료 ──────────────────────────────────────────── */}
      <section id="treatments" className="scroll-mt-20 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <SectionLabel ko="진료 안내" en="Treatments" />
            <h2 className="mt-5 font-myeongjo text-3xl leading-tight text-ink md:text-5xl">
              체질을 짚고,
              <br />
              그 결에 맞춰 채웁니다
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {TREATMENTS.map((t, i) => (
              <Reveal
                key={t.id}
                delay={(i % 2) * 0.1}
                className="card group scroll-mt-24 overflow-hidden"
                as="div"
              >
                <article id={t.id} className="scroll-mt-24">
                <div className="relative aspect-[16/10] overflow-hidden bg-hanji-deep">
                  <Image
                    src={t.image}
                    alt={t.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-7 md:p-8">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-myeongjo text-2xl text-ink">
                      {t.title}
                    </h3>
                    <span className="text-xs tracking-[0.2em] text-sage">
                      {t.hanja}
                    </span>
                  </div>
                  <span className="mt-3 inline-block rounded-full bg-sage-soft px-3 py-1 text-xs font-medium text-moss">
                    {t.duration}
                  </span>
                  <p className="mt-5 text-sm leading-relaxed text-ink-soft">
                    {t.summary}
                  </p>
                  <ul className="mt-5 space-y-1.5 border-t border-paper-line pt-5 text-sm text-ink">
                    {t.suited.map((s) => (
                      <li key={s} className="flex gap-2">
                        <span className="text-sage">·</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 분위기 밴드 · 철학 인용 (차) ──────────────────── */}
      <section className="relative w-full overflow-hidden bg-ink">
        <Image
          src="/images/quote-tea.jpg"
          alt="김이 피어오르는 한방차 한 잔"
          fill
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-transparent" />
        <div className="relative mx-auto flex min-h-[60vh] max-w-6xl items-center px-6 py-24">
          <Reveal className="max-w-xl">
            <span className="eyebrow !text-sage">哲學 · 진료 철학</span>
            <p className="mt-6 font-myeongjo text-3xl leading-[1.4] text-hanji md:text-4xl">
              증상을 쫓기 전에,
              <br />
              그 사람의 결을 먼저 읽습니다.
            </p>
            <p className="mt-6 max-w-md leading-relaxed text-hanji/70">
              같은 피로도 체질에 따라 다르게 풀립니다. 별채는 빠른 처방보다
              정확한 해석을 먼저 둡니다.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 원장 · 철학 ───────────────────────────────────── */}
      <section
        id="about"
        className="scroll-mt-20 bg-moss py-20 text-hanji md:py-28"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div
            id="doctor"
            className="grid scroll-mt-24 gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-16"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[1.5rem] bg-moss-deep shadow-2xl">
              <Image
                src="/images/dr-ryu.jpg"
                alt="류은서 원장 — 밝은 모던 한방 진료실에서"
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover"
              />
            </div>

            <div>
              <span className="eyebrow !text-sage">院長 · 류은서 원장</span>
              <h2 className="mt-5 font-myeongjo text-3xl leading-tight md:text-4xl">
                체질을 읽는 의사
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-hanji/80">
                사상체질을 평생의 공부로 삼아온 한의학 박사. 직장인의
                만성피로에 사상체질이 가장 또렷한 해석 도구가 된다는 것을
                임상에서 확인해 왔습니다.
              </p>
              <ul className="mt-7 grid gap-2 text-sm text-hanji/70 sm:grid-cols-2">
                {CAREER.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-sage">·</span>
                    {c}
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-hanji/15 sm:grid-cols-3">
                {PHILOSOPHY.map((p) => (
                  <div key={p.title} className="bg-moss p-6">
                    <h3 className="font-myeongjo text-base text-hanji">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-hanji/70">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 위치 ──────────────────────────────────────────── */}
      <section id="location" className="scroll-mt-20 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <SectionLabel ko="오시는 길" en="Location" />
            <h2 className="mt-5 font-myeongjo text-3xl leading-tight text-ink md:text-5xl">
              북촌 골목 안,
              <br />
              조용한 진료실
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-stretch">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-hanji-deep md:aspect-auto">
              <Image
                src="/images/clinic-exterior.jpg"
                alt="별채 한의원 외관 — 아이보리 벽과 원목 입구, 화분이 놓인 거리"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="card flex flex-col justify-center p-8 md:p-10">
              <p className="font-myeongjo text-2xl leading-snug text-ink">
                서울 종로구
                <br />
                북촌로 11길 14
              </p>
              <p className="mt-2 text-sm text-ink-soft">우편번호 03059</p>

              <dl className="mt-8 space-y-2.5 text-sm">
                {HOURS.map((h) => (
                  <div key={h.day} className="flex justify-between gap-3">
                    <dt className="text-ink-soft">{h.day}</dt>
                    <dd className="font-medium text-ink">{h.time}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-paper-line pt-6">
                {TRANSPORT.map((t) => (
                  <div key={t.title}>
                    <p className="text-xs font-semibold text-moss">
                      {t.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                      {t.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-paper-line pt-6 text-sm">
                <span className="text-ink-soft">
                  전화 <span className="text-ink">02-720-0000</span>
                </span>
                <span className="text-ink-soft">
                  카카오 <span className="text-ink">@별채한의원</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section
        id="faq"
        className="scroll-mt-20 border-y border-paper-line bg-white py-20 md:py-24"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQ.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            }),
          }}
        />
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="text-center">
            <SectionLabel ko="자주 묻는 질문" en="FAQ" />
            <h2 className="mt-5 font-myeongjo text-2xl leading-tight text-ink md:text-4xl">
              궁금한 점을 먼저 짚어드려요
            </h2>
          </Reveal>
          <div className="mt-10">
            <FaqAccordion items={FAQ} />
          </div>
        </div>
      </section>

      {/* ── 클로징 밴드 · 상담 코너 ───────────────────────── */}
      <section className="relative w-full overflow-hidden">
        <Image
          src="/images/nook.jpg"
          alt="따뜻한 햇살이 드는 모던 한방 상담 코너"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/40 to-ink/20" />
        <div className="relative mx-auto flex min-h-[56vh] max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
          <Reveal>
            <span className="eyebrow !text-sage">예약 안내</span>
            <h2 className="mt-5 font-myeongjo text-3xl leading-tight text-hanji md:text-5xl">
              차 한 잔의 거리에서,
              <br />
              체질부터 시작해요
            </h2>
            <p className="mx-auto mt-6 max-w-md leading-relaxed text-hanji/75">
              퇴근길에 들러 천천히 짚어보는 70분. 먼저 1분 진단으로 가볍게
              시작해도 좋습니다.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <LinkButton href="#reservation" size="lg">
                진료 예약하기
              </LinkButton>
              <LinkButton
                href="#quiz"
                variant="outline"
                size="lg"
                className="border-hanji/40 !text-hanji hover:border-hanji hover:!bg-hanji/10"
              >
                1분 체질 진단 →
              </LinkButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 예약 ──────────────────────────────────────────── */}
      <section id="reservation" className="scroll-mt-20 py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-6">
          <Reveal className="text-center">
            <SectionLabel ko="진료 예약" en="Reservation" />
            <h2 className="mt-5 font-myeongjo text-2xl leading-tight text-ink md:text-4xl">
              진료 문의 · 예약
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
              영업일 기준 24시간 이내 카카오톡·전화로 회신드립니다.
            </p>
          </Reveal>

          <div className="card mt-10 p-7 md:p-10">
            <Suspense
              fallback={<div className="h-32 animate-pulse rounded-xl bg-hanji-deep" />}
            >
              <ReservationForm />
            </Suspense>
          </div>

          <div className="mt-10 flex items-center justify-between text-sm text-ink-soft">
            <Link href="#top" className="hover:text-ink">
              ↑ 맨 위로
            </Link>
            <LinkButton href="#quiz" variant="link">
              아직 망설여진다면, 1분 체질 진단 →
            </LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
