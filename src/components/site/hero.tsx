"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { LinkButton } from "@/components/ui/button";

const STATS = [
  { value: "70분", label: "초진 정밀 상담" },
  { value: "4유형", label: "사상체질 맞춤" },
  { value: "~20시", label: "평일 저녁 진료" },
];

export function Hero() {
  const prefersReduced = useReducedMotion();
  const ease = [0.22, 0.61, 0.36, 1] as const;

  const rise = (delay: number) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section className="relative overflow-hidden bg-hanji">
      {/* soft sage glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-sage-soft/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-sage-soft/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:py-28 lg:py-32">
        {/* Copy */}
        <div>
          <motion.span {...rise(0)} className="eyebrow inline-block">
            북촌 · 모던 한방
          </motion.span>

          <motion.h1
            {...rise(0.08)}
            className="mt-5 font-myeongjo text-[2.7rem] leading-[1.08] text-ink sm:text-6xl lg:text-[4.5rem]"
          >
            체질에 맞춰,
            <br />
            <span className="text-moss">단정하게.</span>
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-7 max-w-md text-base leading-relaxed text-ink-soft md:text-lg"
          >
            사상체질 진단으로 시작하는 직장인 맞춤 한방. 체질의 결을 먼저
            읽고, 한약과 약침으로 흐트러진 일상의 리듬을 다듬습니다.
          </motion.p>

          <motion.div
            {...rise(0.24)}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <LinkButton href="#quiz" size="lg">
              1분 체질 진단 →
            </LinkButton>
            <LinkButton href="#reservation" variant="outline" size="lg">
              진료 예약
            </LinkButton>
          </motion.div>

          <motion.dl
            {...rise(0.32)}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-paper-line pt-8"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-myeongjo text-2xl text-moss md:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-ink-soft">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Image */}
        <motion.div
          {...(prefersReduced
            ? {}
            : {
                initial: { opacity: 0, scale: 0.96 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.9, delay: 0.1, ease },
              })}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] bg-hanji-deep shadow-[0_40px_80px_-40px_rgba(31,46,37,0.45)]">
            <Image
              src="/images/hero-clinic.jpg"
              alt="햇살이 드는 모던 한방 진료실 — 따뜻한 아이보리 벽과 원목 약장, 딥그린 의자"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          {/* floating constitution badge */}
          <div className="card absolute -bottom-5 left-4 flex items-center gap-3 px-5 py-3.5 md:-left-6">
            <span className="ink-seal !h-9 !w-9 !text-base">體</span>
            <div>
              <p className="text-sm font-semibold text-ink">사상체질 4유형</p>
              <p className="text-xs text-ink-soft">태양 · 태음 · 소양 · 소음</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
