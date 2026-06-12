"use client";

import { motion, useReducedMotion } from "motion/react";

import { LinkButton } from "@/components/ui/button";

import { HanokGate } from "./hanok-gate";

export function Hero() {
  const prefersReduced = useReducedMotion();
  const baseDelay = prefersReduced ? 0 : 1.6;

  return (
    <section className="relative isolate flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden">
      {/* Background — real Bukchon hanok courtyard (seen through the opening gate) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url(/images/courtyard.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark overlay to make the hero text legible and feel like a recessed space */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,20,15,0.65) 0%, rgba(15,20,15,0.45) 40%, rgba(15,20,15,0.7) 100%)",
        }}
      />

      {/* Hero content (behind the gate) */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: baseDelay, ease: "easeOut" }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        <span className="text-xs uppercase tracking-[0.5em] text-hanji/60">
          BYULCHAE · 別宅 韓醫院
        </span>
        <h1 className="mt-6 font-myeongjo text-4xl leading-[1.25] text-hanji md:text-6xl md:leading-[1.2]">
          머무릅니다,
          <br />
          체질에.
        </h1>
        <p className="mt-8 max-w-xl text-sm leading-relaxed text-hanji/75 md:text-base">
          일상에서 한 걸음 떨어진 한옥 별채.
          <br />
          도심 직장인을 위한 사상체질 한의원.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <LinkButton
            href="#reservation"
            className="bg-hanji text-ink hover:bg-hanji-deep"
          >
            진료 예약하기
          </LinkButton>
          <LinkButton
            href="#quiz"
            variant="outline"
            className="border-hanji/40 text-hanji hover:border-hanji hover:bg-hanji/10"
          >
            1분 체질 알아보기 →
          </LinkButton>
        </div>
      </motion.div>

      {/* The doors — open after delay */}
      <HanokGate />

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: baseDelay + 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <div className="font-myeongjo text-xs tracking-[0.4em] text-hanji/50">
          SCROLL
        </div>
        <div className="mx-auto mt-2 h-8 w-px bg-hanji/30" />
      </motion.div>
    </section>
  );
}
