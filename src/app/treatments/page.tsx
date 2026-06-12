import type { Metadata } from "next";
import Link from "next/link";

import { LinkButton } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "진료 안내",
  description:
    "사상체질 진단·맞춤 한약·약침·수면 소화 클리닉. 별채 한의원의 네 가지 시그니처 진료를 안내합니다.",
};

const TREATMENTS = [
  {
    id: "diagnosis",
    number: "01",
    title: "사상체질 진단",
    chinese: "四 象 體 質 診 斷",
    duration: "70분 / 1–2회",
    summary:
      "맥진·설진·문진과 60문항 생활 평가로 네 가지 체질의 결을 가려냅니다.",
    flow: [
      "생활·증상 60문항 문진",
      "맥진(맥파) — 손목 세 자리의 깊이를 짚음",
      "설진(혀) — 색·결·코팅을 확인",
      "체형·기색 사진 기록",
      "사상체질 분류 + 한열·허실 결 분석",
      "체질 리포트 PDF + 처방 카드 발급",
    ],
    suited: [
      "처음 내원해 진료의 방향을 잡고 싶은 분",
      "다른 한의원에서 체질 진단을 받았지만 결과가 다르게 나왔던 분",
      "체질에 맞는 식이·운동·휴식을 알고 싶은 분",
    ],
    seal: "診",
  },
  {
    id: "herbal",
    number: "02",
    title: "맞춤 한약",
    chinese: "韓 藥 處 方",
    duration: "1개월 단위",
    summary:
      "사상체질 결과를 바탕으로 류은서 원장이 직접 처방하는 탕약·환약·농축액.",
    flow: [
      "체질 결과 + 현재 증상의 단기 우선순위 확인",
      "처방 설계 — 군신좌사(君臣佐使) 구성",
      "GMP 인증 탕전실에서 조제",
      "1개월 분 파우치 형태로 수령",
      "주 1회 카카오 체크인 — 복용 반응 모니터링",
    ],
    suited: [
      "체질개선을 3개월 이상 길게 보는 분",
      "단기 회복(예: 면접·시험·휴가 전) 1개월 처방을 원하는 분",
      "양약을 줄이거나 함께 운영하려는 분 (복용 간격 안내)",
    ],
    seal: "藥",
  },
  {
    id: "pharmacopuncture",
    number: "03",
    title: "약침",
    chinese: "藥 鍼 療 法",
    duration: "15–20분 / 주 1–2회",
    summary:
      "한약 정제액을 가느다란 침으로 정확한 경혈에 주입. 빠른 회복을 보조합니다.",
    flow: [
      "통증·피로 부위 진단",
      "체질·증상에 맞는 약침 액 선택",
      "초소형 침으로 경혈에 직접 주입",
      "주 1–2회, 4–8주 단위로 효과를 점검",
    ],
    suited: [
      "목·어깨·허리의 만성통증이 있는 분",
      "두통·턱관절 긴장이 잦은 분",
      "한약과 함께 회복 속도를 끌어올리고 싶은 분",
    ],
    seal: "鍼",
  },
  {
    id: "sleep-digestion",
    number: "04",
    title: "수면·소화 클리닉",
    chinese: "睡 眠 消 化",
    duration: "8주 패키지",
    summary:
      "직장인 만성피로의 두 축. 한약·약침·생활처방을 묶은 통합 프로그램.",
    flow: [
      "초진 — 사상체질 진단 + 수면·소화 패턴 평가",
      "1·2주차 — 맞춤 한약 시작 + 주 1회 약침",
      "3–6주차 — 격주 약침 + 한약 조정",
      "7·8주차 — 생활 루틴 정착 + 재평가",
      "프로그램 종료 후 분기별 유지 진료",
    ],
    suited: [
      "야근·회식으로 수면이 깨진 30대~40대 직장인",
      "잘 자도 아침이 무거운 분",
      "위장·소화 리듬이 무너진 분",
    ],
    seal: "養",
  },
];

export default function TreatmentsPage() {
  return (
    <div className="bg-hanji">
      {/* Hero */}
      <section className="border-b border-paper-line bg-hanji-deep/40 py-24">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <span className="font-myeongjo text-sm tracking-[0.4em] text-moss">
            診 療
          </span>
          <h1 className="mt-6 font-myeongjo text-4xl leading-snug text-ink md:text-6xl">
            네 가지로 짚어내는,
            <br />네 가지로 채우는.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ink-soft">
            별채 한의원의 시그니처 진료는 체질을 먼저 가려내고, 그 결에 맞는
            한약·약침·생활처방으로 본래의 리듬을 되돌리는 데 집중합니다.
          </p>

          <nav className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-ink-soft">
            {TREATMENTS.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="border-b border-transparent transition-colors hover:border-moss hover:text-ink"
              >
                {t.number} · {t.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Sections */}
      {TREATMENTS.map((t, i) => (
        <section
          key={t.id}
          id={t.id}
          className={`scroll-mt-24 py-24 ${i % 2 === 1 ? "bg-hanji-deep/40" : ""}`}
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-16 md:grid-cols-[2fr_3fr] md:items-start">
              <div>
                <div className="flex items-baseline gap-4">
                  <span className="font-myeongjo text-5xl text-moss/40">
                    {t.number}
                  </span>
                  <div>
                    <span className="font-myeongjo text-xs tracking-[0.4em] text-moss">
                      {t.chinese}
                    </span>
                    <h2 className="mt-2 font-myeongjo text-3xl text-ink md:text-4xl">
                      {t.title}
                    </h2>
                  </div>
                </div>

                <p className="mt-8 text-sm tracking-widest text-ink-soft">
                  {t.duration}
                </p>

                <p className="mt-6 text-base leading-relaxed text-ink-soft">
                  {t.summary}
                </p>

                <div className="mt-10">
                  <h3 className="font-myeongjo text-sm tracking-[0.3em] text-moss">
                    이런 분께
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-ink">
                    {t.suited.map((s) => (
                      <li key={s}>· {s}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="border border-paper-line bg-hanji p-8 md:p-12">
                <div className="flex items-center justify-between">
                  <h3 className="font-myeongjo text-sm tracking-[0.3em] text-moss">
                    진료 흐름
                  </h3>
                  <span className="ink-seal">{t.seal}</span>
                </div>

                <ol className="mt-8 space-y-5">
                  {t.flow.map((step, idx) => (
                    <li
                      key={step}
                      className="grid grid-cols-[40px_1fr] items-baseline gap-4"
                    >
                      <span className="font-myeongjo text-base text-moss">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-relaxed text-ink">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>

                <div className="paper-divider mt-10" />

                <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-ink-soft">
                  <Link
                    href="/reservation"
                    className="text-moss underline-offset-4 hover:underline"
                  >
                    이 진료로 예약하기 →
                  </Link>
                  <Link
                    href="/quiz"
                    className="hover:text-ink hover:underline"
                  >
                    체질을 먼저 가늠해보기
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pricing notice */}
      <section className="border-t border-paper-line bg-hanji py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm leading-relaxed text-ink-soft">
            진료 비용은 체질·증상·처방의 결에 따라 달라집니다. 의료광고법에
            따라 표시하지 않으며, 초진 시 예상 비용을 안내해 드립니다.
          </p>
          <LinkButton href="/reservation" className="mt-8">
            진료 예약·문의하기
          </LinkButton>
        </div>
      </section>
    </div>
  );
}
