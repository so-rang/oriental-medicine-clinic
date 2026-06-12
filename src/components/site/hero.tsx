"use client";

import { motion, useReducedMotion } from "motion/react";

import { LinkButton } from "@/components/ui/button";

import { HanokGate } from "./hanok-gate";

export function Hero() {
  const prefersReduced = useReducedMotion();
  const baseDelay = prefersReduced ? 0 : 1.6;

  return (
    <section className="relative isolate flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden">
      {/* Background — cinematic video of a hanok gate opening (real Bukchon photo as poster) */}
      {prefersReduced ? (
        <div
          aria-hidden
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/images/courtyard.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ) : (
        <video
          aria-hidden
          autoPlay
          muted
          playsInline
          preload="auto"
          poster="/images/wooden-gate.jpg"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        >
          <source src="/images/hanok-gate-opening.mp4" type="video/mp4" />
        </video>
      )}

      {/* Dark overlay to make the hero text legible */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-black/55"
      />
      {/* Extra radial darken behind the headline */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at center 50%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Hero content — clinic signboard composition */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: baseDelay, ease: "easeOut" }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center"
      >
        {/* Vermilion seal — clinic mark */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center bg-[#b8342a] font-myeongjo text-3xl text-hanji shadow-lg md:h-20 md:w-20 md:text-4xl" style={{ transform: "rotate(-3deg)" }}>
          別
        </div>

        {/* Brand name — primary */}
        <h1 className="font-myeongjo text-5xl leading-[1.1] tracking-[0.05em] text-hanji md:text-7xl">
          별채 한의원
        </h1>
        <p className="mt-3 font-myeongjo text-base tracking-[0.6em] text-hanji/70 md:text-lg">
          別 宅 韓 醫 院
        </p>

        {/* Sub-line — what we do */}
        <div className="mt-8 flex items-center gap-3 text-xs tracking-[0.4em] text-hanji/65 md:text-sm">
          <span className="h-px w-8 bg-hanji/40" />
          <span>사상체질 · 만성피로 · 한약 · 약침</span>
          <span className="h-px w-8 bg-hanji/40" />
        </div>

        {/* Tagline */}
        <p className="mt-10 max-w-xl font-myeongjo text-xl leading-relaxed text-hanji md:text-2xl">
          머무릅니다, 체질에.
        </p>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-hanji/70 md:text-base">
          북촌 한옥 별채에서 시작하는, 직장인의 사상체질 한방 진료.
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

      {/* Doors only for reduced-motion users — replaces video with SVG opening */}
      {prefersReduced && <HanokGate />}

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
