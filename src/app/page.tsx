import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { Hero } from "@/components/site/hero";
import { Reveal } from "@/components/site/reveal";
import { LinkButton } from "@/components/ui/button";
import { FAQ } from "@/features/faq/data";
import { FaqAccordion } from "@/features/faq/faq-accordion";
import { ReservationForm } from "@/features/reservation/reservation-form";

const BENEFITS = [
  "건강보험 추나요법",
  "자동차보험 교통사고",
  "야간진료 ~20:00",
  "전용 주차 안내",
];

const TREATMENTS = [
  {
    id: "pain",
    title: "척추·관절 통증",
    tag: "건강보험 적용",
    image: "/images/chuna.jpg",
    alt: "환자의 등과 어깨에 추나요법을 시행하는 한의사의 손",
    summary:
      "허리·목 디스크, 척추관협착증, 어깨·무릎 통증을 추나요법과 침·약침으로 단계적으로 바로잡습니다.",
    points: [
      "추나요법 — 건강보험 연 20회 적용",
      "침·약침·한약 병행 치료",
      "허리·목 디스크, 협착증, 오십견",
    ],
  },
  {
    id: "accident",
    title: "교통사고 후유증",
    tag: "자동차보험 100%",
    image: "/images/recovery.jpg",
    alt: "회복 케어를 위한 한의원 진료 베드와 따뜻한 진료실",
    summary:
      "사고 후 남는 목·허리 통증, 두통, 어지럼을 자동차보험으로 본인부담 없이 침·추나·한약으로 관리합니다.",
    points: [
      "자동차보험 적용 — 본인부담 0원",
      "침·추나·약침·한약·물리치료",
      "사고 직후부터 후유증까지",
    ],
  },
  {
    id: "diet",
    title: "한방 다이어트",
    tag: "체질 맞춤",
    image: "/images/tx-herbal.jpg",
    alt: "체질 맞춤 다이어트 한약에 쓰이는 약재",
    summary:
      "체질과 생활습관에 맞춘 다이어트 한약과 1:1 관리로, 무리 없이 빼고 요요를 막는 데 집중합니다.",
    points: [
      "체질별 맞춤 한약 처방",
      "식단·생활 1:1 관리",
      "요요 방지까지 설계",
    ],
  },
  {
    id: "herbal",
    title: "한약·보약",
    tag: "피로·체질·면역",
    image: "/images/tx-sleep.jpg",
    alt: "체질 보약에 쓰이는 대추·약재를 우린 한방차",
    summary:
      "만성피로·기력 저하·소화·수면을 체질에 맞춘 한약으로 다스립니다. GMP 탕전실에서 직접 조제합니다.",
    points: [
      "만성피로·기력 저하·면역",
      "소화·수면 리듬 회복",
      "GMP 탕전 직접 조제",
    ],
  },
];

const INSURANCE = [
  {
    title: "건강보험",
    line: "추나요법",
    desc: "근골격계 질환 추나요법은 연 20회 건강보험이 적용됩니다. 본인부담 약 1~3만원.",
  },
  {
    title: "자동차보험",
    line: "교통사고 후유증",
    desc: "교통사고 한방치료는 자동차보험이 적용되어 본인부담 없이 받으실 수 있습니다.",
  },
  {
    title: "실손보험",
    line: "비급여 청구",
    desc: "약침 등 일부 비급여 항목은 가입 조건에 따라 실손보험 청구가 가능합니다.",
  },
];

const METHODS = [
  { name: "추나요법", desc: "틀어진 척추·관절을 손으로 바로잡는 수기 치료" },
  { name: "침 치료", desc: "경혈을 자극해 통증과 순환을 다스립니다" },
  { name: "약침", desc: "한약 정제액을 경혈에 주입해 회복을 돕습니다" },
  { name: "뜸·부황", desc: "따뜻한 자극과 혈류로 굳은 부위를 풀어줍니다" },
  { name: "한약", desc: "체질·증상에 맞춰 직접 처방, GMP 탕전 조제" },
];

const CAREER = [
  "경희대학교 한의학과 졸업",
  "대한추나의학회 정회원",
  "전) 자동차보험 한방진료 임상",
  "척추·관절 통증 · 한약 클리닉",
];

const HOURS = [
  { day: "월·화·목·금", time: "10:00 – 20:00", note: "야간진료" },
  { day: "수요일", time: "10:00 – 14:00", note: "" },
  { day: "토요일", time: "09:00 – 14:00", note: "" },
  { day: "일·공휴일", time: "휴진", note: "" },
];

const TRANSPORT = [
  { title: "지하철", body: "3호선 안국역 2번 출구 도보 6분" },
  { title: "버스", body: "안국동·재동초교 정류장 도보 3분" },
  { title: "주차", body: "재동·가회동 공영주차장 2시간 지원" },
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

      {/* ── 보험·편의 스트립 ───────────────────────────────── */}
      <section className="border-t border-paper-line bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6">
          {BENEFITS.map((b) => (
            <span
              key={b}
              className="flex items-center gap-2 text-sm font-medium text-ink"
            >
              <span className="text-moss">✓</span>
              {b}
            </span>
          ))}
        </div>
      </section>

      {/* ── 진료안내 (질환·증상별) ─────────────────────────── */}
      <section id="treatments" className="scroll-mt-20 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <SectionLabel ko="진료 안내" en="Treatments" />
            <h2 className="mt-5 font-myeongjo text-3xl leading-tight text-ink md:text-5xl">
              어디가, 어떻게
              <br />
              불편하신가요
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">
              통증·교통사고 후유증부터 다이어트·보약까지. 증상에 맞는 진료를
              먼저 확인해 보세요.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {TREATMENTS.map((t, i) => (
              <Reveal
                key={t.id}
                delay={(i % 2) * 0.1}
                className="card group scroll-mt-24 overflow-hidden"
              >
                <article id={t.id}>
                  <div className="relative aspect-[16/10] overflow-hidden bg-hanji-deep">
                    <Image
                      src={t.image}
                      alt={t.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-hanji/90 px-3 py-1 text-xs font-semibold text-moss backdrop-blur">
                      {t.tag}
                    </span>
                  </div>
                  <div className="p-7 md:p-8">
                    <h3 className="font-myeongjo text-2xl text-ink">
                      {t.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                      {t.summary}
                    </p>
                    <ul className="mt-5 space-y-1.5 border-t border-paper-line pt-5 text-sm text-ink">
                      {t.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="text-sage">·</span>
                          {p}
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

      {/* ── 보험 안내 ──────────────────────────────────────── */}
      <section
        id="insurance"
        className="scroll-mt-20 border-y border-paper-line bg-white py-20 md:py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <SectionLabel ko="보험 안내" en="Insurance" />
            <h2 className="mt-5 font-myeongjo text-3xl leading-tight text-ink md:text-4xl">
              비용 걱정은 덜고,
              <br />
              치료에 집중하세요
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {INSURANCE.map((ins, i) => (
              <Reveal
                key={ins.title}
                delay={i * 0.08}
                className="card flex flex-col gap-2 p-7"
              >
                <span className="text-xs font-semibold tracking-wide text-sage">
                  {ins.line}
                </span>
                <h3 className="font-myeongjo text-2xl text-ink">{ins.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {ins.desc}
                </p>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink-soft/80">
            ※ 본인부담금·적용 범위는 가입 보험과 증상에 따라 다를 수 있어
            내원 시 안내해 드립니다.
          </p>
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
            한 사람의 몸에 맞춰,
            <br />
            한 첩씩 짓습니다.
          </p>
        </div>
      </section>

      {/* ── 치료법 ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <SectionLabel ko="치료법" en="Methods" />
            <h2 className="mt-5 font-myeongjo text-3xl leading-tight text-ink md:text-4xl">
              증상에 맞춰
              <br />
              치료를 조합합니다
            </h2>
          </Reveal>

          <Reveal className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-paper-line bg-paper-line sm:grid-cols-2 lg:grid-cols-5">
            {METHODS.map((m, i) => (
              <div key={m.name} className="flex flex-col gap-2 bg-hanji p-6">
                <span className="font-myeongjo text-sm text-moss">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-myeongjo text-lg text-ink">{m.name}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {m.desc}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── 원장 소개 ──────────────────────────────────────── */}
      <section
        id="about"
        className="scroll-mt-20 bg-moss py-20 text-hanji md:py-28"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:items-center md:gap-16">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[1.5rem] bg-moss-deep shadow-2xl">
              <Image
                src="/images/dr-ryu.jpg"
                alt="류은서 원장"
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover"
              />
            </div>

            <div>
              <span className="eyebrow !text-sage">院長 · 류은서 원장</span>
              <h2 className="mt-5 font-myeongjo text-3xl leading-tight md:text-4xl">
                한 사람을 오래 봅니다
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-hanji/80">
                척추·관절 통증과 교통사고 후유증, 그리고 만성피로까지. 증상만
                잠시 누르기보다, 왜 반복되는지를 함께 찾고 추나·침·한약을
                필요한 만큼만 조합합니다.
              </p>
              <ul className="mt-7 grid gap-2 text-sm text-hanji/70 sm:grid-cols-2">
                {CAREER.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span className="text-sage">·</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 진료 시간 ──────────────────────────────────────── */}
      <section id="info" className="scroll-mt-20 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <SectionLabel ko="진료 시간" en="Hours" />
            <h2 className="mt-5 font-myeongjo text-3xl leading-tight text-ink md:text-4xl">
              퇴근길에도, 토요일에도
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink-soft">
              평일은 저녁 8시까지 야간진료, 토요일은 오전 진료를 합니다. 예약
              후 방문하시면 기다림 없이 진료받으실 수 있습니다.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal className="card p-8 md:p-10">
              <h3 className="font-myeongjo text-xl text-ink">진료 시간</h3>
              <dl className="mt-6 space-y-2.5 text-sm">
                {HOURS.map((h) => (
                  <div key={h.day} className="flex items-center justify-between gap-3">
                    <dt className="text-ink-soft">{h.day}</dt>
                    <dd className="flex items-center gap-2 font-medium text-ink">
                      {h.time}
                      {h.note && (
                        <span className="rounded-full bg-sage-soft px-2 py-0.5 text-[11px] font-semibold text-moss">
                          {h.note}
                        </span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={0.08} className="card flex flex-col justify-center p-8 md:p-10">
              <h3 className="font-myeongjo text-xl text-ink">예약·문의</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                전화나 카카오톡으로 편하게 문의하세요. 교통사고 치료는 사고
                접수번호만 알려주시면 보험 처리를 도와드립니다.
              </p>
              <div className="mt-6 space-y-2 text-sm">
                <p className="text-ink-soft">
                  전화 <span className="font-medium text-ink">02-720-0000</span>
                </p>
                <p className="text-ink-soft">
                  카카오 <span className="font-medium text-ink">@별채한의원</span>
                </p>
              </div>
              <div className="mt-7">
                <LinkButton href="#reservation" size="sm">
                  온라인 예약하기
                </LinkButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 오시는 길 ──────────────────────────────────────── */}
      <section id="location" className="scroll-mt-20 border-t border-paper-line bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl">
            <SectionLabel ko="오시는 길" en="Location" />
            <h2 className="mt-5 font-myeongjo text-3xl leading-tight text-ink md:text-4xl">
              북촌 골목 안,
              <br />
              찾기 쉬운 자리
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 md:items-stretch">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-hanji-deep">
              <Image
                src="/images/clinic-exterior.jpg"
                alt="별채 한의원 외관 — 아이보리 벽과 원목 입구"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="card flex flex-col justify-center p-8 md:p-10">
              <p className="font-myeongjo text-2xl leading-snug text-ink">
                서울 종로구 북촌로 11길 14
              </p>
              <p className="mt-2 text-sm text-ink-soft">우편번호 03059</p>

              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-paper-line pt-6">
                {TRANSPORT.map((t) => (
                  <div key={t.title}>
                    <p className="text-xs font-semibold text-moss">{t.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                      {t.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section id="faq" className="scroll-mt-20 py-20 md:py-24">
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
            <Link href="#treatments" className="text-moss hover:underline">
              진료 안내 다시 보기 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
