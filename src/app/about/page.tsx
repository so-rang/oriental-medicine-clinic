import type { Metadata } from "next";

import { LinkButton } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "별채 이야기",
  description:
    "북촌 한옥 별채에서 사상체질을 중심으로 도심 직장인을 진료합니다. 류은서 원장의 진료 철학과 별채 한의원의 시작.",
};

const PHILOSOPHY = [
  {
    title: "체질이 먼저, 증상은 그 다음",
    body: "같은 두통도 태양인과 소음인은 다르게 다스려야 합니다. 별채는 증상보다 먼저 체질의 결을 봅니다.",
  },
  {
    title: "한 박자 느린 진료실",
    body: "초진 70분, 재진도 충분한 시간을 둡니다. 진료실 안의 속도를 늦추는 것이 회복의 시작이라 믿습니다.",
  },
  {
    title: "직장인의 결에 맞춘 동선",
    body: "평일 저녁 8시까지, 토요일 오전까지. 카카오 체크인으로 복용 반응을 매주 가볍게 잇습니다.",
  },
];

const CAREER = [
  "2010 경희대학교 한의학과 졸업",
  "2014 경희대학교 대학원 사상체질의학 박사",
  "2014–2018 광동한방병원 임상과장",
  "2018–2024 강남구 한의원 진료부원장",
  "2025 별채 한의원 개원 — 북촌",
];

const PUBLICATIONS = [
  "「직장인 만성피로의 체질별 접근」 (대한사상체질의학회지)",
  "「소음인 위장 허약의 한약 처방 패턴」 (대한한방내과학회 발표)",
  "「수면 클리닉에서의 사상체질 분류 의의」 (한방신경정신과학회 포스터)",
];

export default function AboutPage() {
  return (
    <div className="bg-hanji">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-paper-line bg-hanji-deep/40 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-myeongjo text-sm tracking-[0.4em] text-moss">
            別 宅 韓 醫 院
          </span>
          <h1 className="mt-6 font-myeongjo text-4xl leading-snug text-ink md:text-6xl">
            본채 옆,
            <br />한 박자 느린 별채.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ink-soft">
            도심에서 본채의 속도로 오래 달렸다면, 별채는 한 번 멈춰 자기
            체질로 돌아오는 곳입니다. 북촌 한옥 골목 안 조용한 서재.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <span className="font-myeongjo text-sm tracking-[0.4em] text-moss">
              診 療 哲 學
            </span>
            <h2 className="mt-4 font-myeongjo text-3xl text-ink md:text-4xl">
              진료의 세 가지 결.
            </h2>
          </div>

          <div className="mt-16 grid gap-px bg-paper-line md:grid-cols-3">
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
      </section>

      {/* Doctor */}
      <section className="border-t border-paper-line bg-hanji-deep/40 py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden border border-paper-line bg-hanji">
            <svg
              viewBox="0 0 200 250"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                <linearGradient id="dr-bg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ece5d3" />
                  <stop offset="100%" stopColor="#c4b896" />
                </linearGradient>
              </defs>
              <rect width="200" height="250" fill="url(#dr-bg)" />
              <circle cx="100" cy="100" r="42" fill="#1a1a1a" opacity="0.18" />
              <path
                d="M40,250 Q40,180 100,180 Q160,180 160,250 Z"
                fill="#1a1a1a"
                opacity="0.22"
              />
              <text
                x="100"
                y="232"
                textAnchor="middle"
                fontFamily="serif"
                fontSize="14"
                fill="#1a1a1a"
                opacity="0.5"
              >
                柳 銀 瑞
              </text>
            </svg>
            <div className="absolute right-4 top-4 ink-seal">柳</div>
          </div>

          <div>
            <span className="font-myeongjo text-sm tracking-[0.4em] text-moss">
              院 長 柳 銀 瑞
            </span>
            <h2 className="mt-4 font-myeongjo text-3xl leading-snug text-ink md:text-5xl">
              체질을 읽는 의사,
              <br />
              류은서 원장.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-ink-soft">
              사상체질을 평생의 공부로 삼아온 한의학 박사. 광동한방병원 임상과장
              시절부터 직장인의 만성피로에 사상체질이 가장 또렷한 해석 도구가
              된다는 것을 임상에서 확인해 왔습니다.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-soft">
              증상을 먼저 듣되, 처방은 항상 체질의 결을 먼저 묻고 시작합니다.
            </p>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <div>
                <h3 className="font-myeongjo text-sm tracking-[0.3em] text-moss">
                  학력·경력
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-ink">
                  {CAREER.map((c) => (
                    <li key={c}>· {c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-myeongjo text-sm tracking-[0.3em] text-moss">
                  연구·발표
                </h3>
                <ul className="mt-4 space-y-2 text-sm text-ink">
                  {PUBLICATIONS.map((p) => (
                    <li key={p}>· {p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-paper-line py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="font-myeongjo text-3xl text-ink md:text-4xl">
            먼저 체질을 가늠해보시겠어요?
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-ink-soft">
            정식 진단 전에, 1분 안에 사상체질의 큰 결을 가볍게 가늠해 볼 수
            있습니다.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/quiz" size="lg">
              1분 체질 알아보기 →
            </LinkButton>
            <LinkButton href="/reservation" variant="outline" size="lg">
              진료 예약하기
            </LinkButton>
          </div>
        </div>
      </section>
    </div>
  );
}
