import type { Metadata } from "next";

import { LinkButton } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "오시는 길",
  description:
    "서울 종로구 북촌로 11길 14, 별채 한의원. 안국역 2번 출구 도보 6분. 평일 10–20시, 토 10–16시.",
};

const TRANSPORT = [
  {
    title: "지하철",
    body: "3호선 안국역 2번 출구에서 도보 6분.\n북촌 한옥마을 방면 골목 안쪽.",
  },
  {
    title: "버스",
    body: "안국동·재동초등학교 정류장 하차 후 도보 3분.\n간선 109·151·171, 지선 7025.",
  },
  {
    title: "주차",
    body: "전용 주차장이 없습니다.\n인근 공영주차장(재동·가회동) 이용을 권장드리며,\n2시간 주차비를 지원해 드립니다.",
  },
];

const HOURS = [
  { day: "월·화·목·금", time: "10:00 – 20:00" },
  { day: "수요일", time: "10:00 – 14:00 (반진료)" },
  { day: "토요일", time: "10:00 – 16:00" },
  { day: "일요일·공휴일", time: "휴진" },
  { day: "점심 시간", time: "13:00 – 14:00" },
];

export default function LocationPage() {
  return (
    <div className="bg-hanji">
      {/* Hero with hanok alley illustration */}
      <section className="relative h-[60svh] min-h-[480px] overflow-hidden border-b border-paper-line">
        <svg
          viewBox="0 0 1600 900"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <defs>
            <linearGradient id="loc-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e8e0c8" />
              <stop offset="60%" stopColor="#c4b896" />
              <stop offset="100%" stopColor="#a89878" />
            </linearGradient>
          </defs>
          <rect width="1600" height="900" fill="url(#loc-sky)" />
          {/* 좌측 한옥 담장 */}
          <polygon points="0,400 480,360 480,900 0,900" fill="#4a3a26" />
          <polygon points="0,360 480,320 480,400 0,440" fill="#3a2a1b" />
          <polygon points="0,320 480,280 480,320 0,360" fill="#2a1f15" />
          {/* 우측 한옥 담장 */}
          <polygon points="1600,400 1120,360 1120,900 1600,900" fill="#4a3a26" />
          <polygon points="1600,360 1120,320 1120,400 1600,440" fill="#3a2a1b" />
          <polygon points="1600,320 1120,280 1120,320 1600,360" fill="#2a1f15" />
          {/* 골목 바닥 */}
          <polygon points="480,900 1120,900 1000,600 600,600" fill="#9b8d70" />
          <polygon points="480,900 1120,900 960,700 640,700" fill="#b3a583" opacity="0.5" />
          {/* 멀리 한옥 */}
          <path
            d="M600,600 Q800,500 1000,600 L1000,620 L600,620 Z"
            fill="#2a1f15"
          />
          <rect x="680" y="620" width="240" height="120" fill="#1a120a" />
          <rect x="780" y="660" width="60" height="80" fill="#5a4530" />
          {/* 멀리 산 */}
          <path
            d="M0,400 Q400,300 800,360 T1600,340 L1600,400 L0,400 Z"
            fill="#7a6f56"
            opacity="0.3"
          />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-hanji" />
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end px-6 pb-16">
          <span className="font-myeongjo text-sm tracking-[0.4em] text-ink-soft">
            位 置
          </span>
          <h1 className="mt-4 font-myeongjo text-4xl leading-snug text-ink md:text-6xl">
            북촌로 11길,
            <br />
            한옥 골목 안쪽.
          </h1>
        </div>
      </section>

      {/* Address + map */}
      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_1.4fr]">
          <div>
            <span className="font-myeongjo text-sm tracking-[0.3em] text-moss">
              주소
            </span>
            <p className="mt-4 font-myeongjo text-2xl leading-snug text-ink">
              서울 종로구
              <br />
              북촌로 11길 14, 별채동
            </p>
            <p className="mt-2 text-sm text-ink-soft">우편번호 03059</p>

            <div className="mt-10 space-y-6 text-sm">
              <div>
                <h3 className="font-myeongjo text-base text-ink">전화</h3>
                <p className="mt-2 text-ink-soft">02-720-0000</p>
              </div>
              <div>
                <h3 className="font-myeongjo text-base text-ink">카카오톡 채널</h3>
                <p className="mt-2 text-ink-soft">@별채한의원</p>
              </div>
            </div>

            <div className="mt-12">
              <LinkButton href="/reservation">진료 예약하기 →</LinkButton>
            </div>
          </div>

          <div className="aspect-[4/3] w-full overflow-hidden border border-paper-line bg-hanji-deep/40">
            {/* 카카오맵 자리 — 폴백 SVG */}
            <div className="relative h-full w-full">
              <iframe
                title="별채 한의원 위치"
                src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%20%EC%A2%85%EB%A1%9C%EA%B5%AC%20%EB%B6%81%EC%B4%8C%EB%A1%9C%2011%EA%B8%B8&output=embed"
                className="h-full w-full grayscale"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="border-t border-paper-line bg-hanji-deep/40 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <span className="font-myeongjo text-sm tracking-[0.3em] text-moss">
              診 療 時 間
            </span>
            <h2 className="mt-4 font-myeongjo text-3xl text-ink md:text-4xl">
              운영 시간.
            </h2>
          </div>

          <dl className="mt-12 divide-y divide-paper-line border-t border-b border-paper-line">
            {HOURS.map((h) => (
              <div
                key={h.day}
                className="grid grid-cols-[160px_1fr] gap-4 py-5 md:grid-cols-[240px_1fr]"
              >
                <dt className="font-myeongjo text-base text-ink">{h.day}</dt>
                <dd className="text-base text-ink-soft">{h.time}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-sm leading-relaxed text-ink-soft">
            ※ 점심시간 직후 13:30–14:00 사이에는 예약을 받지 않습니다. 진료
            마감 30분 전까지 접수해 주세요.
          </p>
        </div>
      </section>

      {/* Transport */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="font-myeongjo text-sm tracking-[0.3em] text-moss">
              交 通
            </span>
            <h2 className="mt-4 font-myeongjo text-3xl text-ink md:text-4xl">
              오시는 길.
            </h2>
          </div>

          <div className="mt-16 grid gap-px bg-paper-line md:grid-cols-3">
            {TRANSPORT.map((t) => (
              <div
                key={t.title}
                className="flex flex-col gap-4 bg-hanji p-8 md:p-10"
              >
                <h3 className="font-myeongjo text-xl text-ink">{t.title}</h3>
                <p className="whitespace-pre-line text-sm leading-relaxed text-ink-soft">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
