import type { Metadata } from "next";

import { LinkButton } from "@/components/ui/button";
import { FAQ } from "@/features/faq/data";
import { FaqAccordion } from "@/features/faq/faq-accordion";

export const metadata: Metadata = {
  title: "자주 묻는 질문",
  description:
    "한약·침·약침·사상체질·직장인 만성피로·예약·보험까지. 별채 한의원에서 자주 받는 열 가지 질문에 대한 류은서 원장의 답변.",
};

const FAQ_JSON_LD = {
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
};

const CATEGORIES = ["한약", "침·약침", "체질", "직장인", "안전"];

export default function FaqPage() {
  return (
    <div className="bg-hanji">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />

      <section className="border-b border-paper-line bg-hanji-deep/40 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="font-myeongjo text-sm tracking-[0.4em] text-moss">
            問 答
          </span>
          <h1 className="mt-6 font-myeongjo text-4xl leading-snug text-ink md:text-5xl">
            자주 묻는 질문.
          </h1>
          <p className="mt-8 text-base leading-relaxed text-ink-soft">
            진료실에서 자주 받는 열 가지 질문과 류은서 원장의 답변입니다.
            여기에 없는 질문은 카카오톡 채널 또는 진료 예약 시 알려주세요.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-2 text-xs">
            {CATEGORIES.map((c) => (
              <span
                key={c}
                className="border border-paper-line bg-hanji px-3 py-1 text-ink-soft"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <FaqAccordion items={FAQ} />
        </div>
      </section>

      <section className="border-t border-paper-line py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="font-myeongjo text-2xl text-ink md:text-3xl">
            여기 없는 질문이 있다면.
          </h2>
          <p className="text-base leading-relaxed text-ink-soft">
            예약 양식의 ‘증상·요청 사항’ 칸에 적어주시면 첫 진료 때 함께
            답변드립니다.
          </p>
          <LinkButton href="/reservation">예약 시 질문 남기기 →</LinkButton>
        </div>
      </section>
    </div>
  );
}
