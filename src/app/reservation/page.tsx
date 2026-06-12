import type { Metadata } from "next";
import { Suspense } from "react";

import { ReservationForm } from "@/features/reservation/reservation-form";

export const metadata: Metadata = {
  title: "진료 예약·문의",
  description:
    "별채 한의원 진료 예약. 평일 10–20시, 토 10–16시. 카카오톡 또는 전화로 일정을 확정해 드립니다.",
};

export default function ReservationPage() {
  return (
    <div className="bg-hanji py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <div className="text-center">
          <span className="font-myeongjo text-sm tracking-[0.4em] text-moss">
            診 療 豫 約
          </span>
          <h1 className="mt-6 font-myeongjo text-4xl leading-snug text-ink md:text-5xl">
            먼저 한 박자
            <br />
            쉬어가시겠어요.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink-soft">
            예약 요청을 보내주시면 영업일 기준 24시간 이내에 진료실에서
            카카오톡 또는 전화로 일정 확정을 도와드립니다.
          </p>
        </div>

        <div className="mt-16">
          <Suspense fallback={<div className="h-32 animate-pulse bg-hanji-deep/40" />}>
            <ReservationForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
