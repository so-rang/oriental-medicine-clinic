"use client";

import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { LinkButton } from "@/components/ui/button";

const STATS = [
  { value: "건강보험", label: "추나요법 적용" },
  { value: "자동차보험", label: "교통사고 후유증" },
  { value: "~20시", label: "평일 야간진료" },
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
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-sage-soft/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-sage-soft/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:py-28 lg:py-32">
        <div>
          <motion.span {...rise(0)} className="eyebrow inline-block">
            북촌 · 추나 · 교통사고 · 한약
          </motion.span>

          <motion.h1
            {...rise(0.08)}
            className="mt-5 break-keep font-myeongjo text-[2.4rem] leading-[1.12] text-ink sm:text-5xl lg:text-[3.7rem]"
          >
            오래 끌어온 통증,
            <br />
            <span className="text-moss">근본부터 잡습니다.</span>
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-7 max-w-md text-base leading-relaxed text-ink-soft md:text-lg"
          >
            허리·목·어깨 통증과 교통사고 후유증을 추나요법·침·약침으로,
            만성피로와 체질은 맞춤 한약으로. 건강보험·자동차보험이
            적용됩니다.
          </motion.p>

          <motion.div
            {...rise(0.24)}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <LinkButton href="#reservation" size="lg">
              진료 예약하기
            </LinkButton>
            <LinkButton href="#treatments" variant="outline" size="lg">
              진료 안내 보기 →
            </LinkButton>
          </motion.div>

          <motion.dl
            {...rise(0.32)}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-paper-line pt-8"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="font-myeongjo text-xl text-moss md:text-2xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-ink-soft">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

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
              alt="한의원 진료실의 원목 한약장 — 따뜻한 햇살이 드는 진료 공간"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>

          <div className="card absolute -bottom-5 left-4 flex items-center gap-3 px-5 py-3.5 md:-left-6">
            <span className="ink-seal !h-9 !w-9 !text-base">醫</span>
            <div>
              <p className="text-sm font-semibold text-ink">건강보험 추나요법</p>
              <p className="text-xs text-ink-soft">허리·목·어깨 · 교통사고</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
