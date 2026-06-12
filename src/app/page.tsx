import Link from "next/link";

import { Hero } from "@/components/site/hero";
import { LinkButton } from "@/components/ui/button";

const TREATMENTS = [
  {
    href: "/treatments#diagnosis",
    title: "사상체질 진단",
    duration: "70분",
    description:
      "맥진·설진·문진과 60문항 생활 평가로 네 가지 체질을 가려내는 첫 걸음.",
    seal: "診",
  },
  {
    href: "/treatments#herbal",
    title: "맞춤 한약",
    duration: "1개월 단위",
    description:
      "체질 결과를 바탕으로 원장이 직접 처방하는 탕약·환약·농축액.",
    seal: "藥",
  },
  {
    href: "/treatments#pharmacopuncture",
    title: "약침",
    duration: "15–20분",
    description:
      "한약 정제액을 가느다란 침으로 경혈에 주입. 만성통증·피로에 빠른 회복.",
    seal: "鍼",
  },
  {
    href: "/treatments#sleep-digestion",
    title: "수면·소화 클리닉",
    duration: "8주 패키지",
    description:
      "직장인 만성피로의 두 축. 한약·약침·생활처방의 통합 프로그램.",
    seal: "養",
  },
];

const FAQ_PREVIEW = [
  {
    q: "한약 복용 중 커피, 마셔도 되나요?",
    a: "체질과 처방에 따라 다릅니다. 보통은 복용 1시간 전후로 피하시는 정도면 충분합니다.",
  },
  {
    q: "직장인 만성피로, 체질개선은 얼마나 걸리나요?",
    a: "처음 1개월은 체질 회복기, 그 뒤 2–3개월에 걸쳐 기능을 다시 세웁니다.",
  },
  {
    q: "사상체질은 평생 바뀌지 않나요?",
    a: "타고난 체질은 바뀌지 않습니다. 다만 같은 체질 안에서도 컨디션은 매번 다릅니다.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* 2. 별채 콘셉트 */}
      <section className="relative bg-hanji py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <span className="font-myeongjo text-sm tracking-[0.4em] text-moss">
              別 宅
            </span>
            <h2 className="mt-6 font-myeongjo text-3xl leading-snug text-ink md:text-5xl">
              일상에서
              <br />한 걸음 떨어져
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ink-soft">
              본채는 매일의 자리, 별채는 한 박자 쉬는 자리. 별채 한의원은 도심
              직장인의 만성피로와 체질을 위한 조용한 서재입니다.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink-soft">
              사상체질을 가려내고, 그 결에 맞는 한약과 약침으로 본래의 리듬을
              되찾습니다.
            </p>
            <div className="mt-10">
              <LinkButton href="/about" variant="link">
                별채의 진료 철학 →
              </LinkButton>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-paper-line bg-hanji-deep">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, #ddd4bd 0%, #c8bca0 60%, #8b7d62 100%)",
                }}
              />
              <svg
                viewBox="0 0 400 500"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden
              >
                <defs>
                  <linearGradient id="roof" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3a2a1b" />
                    <stop offset="100%" stopColor="#1f160e" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,320 Q100,240 200,280 T400,260 L400,500 L0,500 Z"
                  fill="#7a6f56"
                  opacity="0.4"
                />
                <path
                  d="M40,300 Q200,200 360,300 L360,330 L40,330 Z"
                  fill="url(#roof)"
                />
                <rect x="60" y="330" width="280" height="120" fill="#2a1f15" />
                <rect x="100" y="360" width="60" height="90" fill="#0d0905" />
                <rect x="240" y="360" width="60" height="90" fill="#0d0905" />
                <ellipse cx="200" cy="470" rx="20" ry="6" fill="#5a513e" />
                <ellipse cx="170" cy="485" rx="18" ry="5" fill="#5a513e" />
                <ellipse cx="230" cy="488" rx="18" ry="5" fill="#5a513e" />
              </svg>
              <div className="absolute right-4 top-4 ink-seal">別</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 시그니처 진료 4 */}
      <section className="bg-hanji-deep/40 py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between gap-8">
            <div>
              <span className="font-myeongjo text-sm tracking-[0.4em] text-moss">
                診 療
              </span>
              <h2 className="mt-4 font-myeongjo text-3xl leading-snug text-ink md:text-4xl">
                네 가지로 짚어내는,
                <br />네 가지로 채우는.
              </h2>
            </div>
            <LinkButton
              href="/treatments"
              variant="link"
              className="hidden md:inline-flex"
            >
              진료 전체 보기 →
            </LinkButton>
          </div>

          <div className="mt-16 grid gap-px bg-paper-line md:grid-cols-2">
            {TREATMENTS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex flex-col gap-6 bg-hanji p-8 transition-colors hover:bg-hanji-deep/50 md:p-12"
              >
                <div className="flex items-start justify-between">
                  <span className="font-myeongjo text-3xl text-moss">
                    {item.seal}
                  </span>
                  <span className="text-xs tracking-widest text-ink-soft">
                    {item.duration}
                  </span>
                </div>
                <h3 className="font-myeongjo text-2xl text-ink">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
                <div className="mt-auto pt-4">
                  <span className="text-sm text-moss group-hover:underline">
                    자세히 →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 1분 체질 진단 배너 */}
      <section className="relative overflow-hidden bg-ink py-24 text-hanji">
        <div
          aria-hidden
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(rgba(245,241,232,0.6) 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 text-center md:flex-row md:items-end md:justify-between md:text-left">
          <div>
            <span className="font-myeongjo text-sm tracking-[0.4em] text-moss/80">
              四 象 體 質
            </span>
            <h2 className="mt-4 font-myeongjo text-3xl leading-snug md:text-4xl">
              네 가지 질문이면,
              <br />당신의 체질이 보입니다.
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-hanji/70 md:text-base">
              태양·태음·소양·소음. 약 60초의 응답으로 사상체질의 큰 결을
              가려보고, 결과에 맞는 진료를 추천해 드립니다.
            </p>
          </div>
          <LinkButton
            href="/quiz"
            size="lg"
            className="shrink-0 bg-hanji text-ink hover:bg-hanji-deep"
          >
            1분 체질 알아보기 →
          </LinkButton>
        </div>
      </section>

      {/* 5. 류은서 원장 프리뷰 */}
      <section className="bg-hanji py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden border border-paper-line bg-hanji-deep/60">
            <svg
              viewBox="0 0 200 250"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                <linearGradient id="avatar-bg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ece5d3" />
                  <stop offset="100%" stopColor="#c4b896" />
                </linearGradient>
              </defs>
              <rect width="200" height="250" fill="url(#avatar-bg)" />
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
              院 長
            </span>
            <h2 className="mt-4 font-myeongjo text-3xl leading-snug text-ink md:text-4xl">
              체질을 읽는 의사,
              <br />
              류은서 원장.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-ink-soft">
              사상체질을 평생의 공부로 삼아온 한의학 박사. 같은 증상도 체질에
              따라 다르게 풀어야 한다는 믿음으로, 직장인 만성피로의 결을 한
              사람씩 다르게 짚어 나갑니다.
            </p>
            <ul className="mt-8 space-y-2 text-sm text-ink-soft">
              <li>· 경희대학교 한의학과 졸업</li>
              <li>· 경희대학교 대학원 사상체질의학 박사</li>
              <li>· 전) 광동한방병원 임상과장</li>
              <li>· 대한사상체질의학회 정회원</li>
            </ul>
            <div className="mt-10">
              <LinkButton href="/about" variant="link">
                별채와 원장 이야기 →
              </LinkButton>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 위치·시간 */}
      <section className="bg-hanji-deep/40 py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <div>
              <span className="font-myeongjo text-sm tracking-[0.4em] text-moss">
                位 置
              </span>
              <h2 className="mt-4 font-myeongjo text-3xl leading-snug text-ink md:text-4xl">
                북촌 한옥 골목 안의
                <br />
                조용한 서재.
              </h2>
              <p className="mt-8 text-base leading-relaxed text-ink-soft">
                안국역 2번 출구에서 도보 6분. 북촌로 11길 안쪽 한옥 별채.
                <br />
                돌담길을 따라 걸어 들어오면 녹은 대문이 마중합니다.
              </p>

              <dl className="mt-10 space-y-4 text-sm">
                <div className="grid grid-cols-[80px_1fr] gap-2">
                  <dt className="font-myeongjo text-ink-soft">주소</dt>
                  <dd className="text-ink">
                    서울 종로구 북촌로 11길 14, 별채동
                  </dd>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-2">
                  <dt className="font-myeongjo text-ink-soft">평일</dt>
                  <dd className="text-ink">10:00 – 20:00</dd>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-2">
                  <dt className="font-myeongjo text-ink-soft">토요일</dt>
                  <dd className="text-ink">10:00 – 16:00</dd>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-2">
                  <dt className="font-myeongjo text-ink-soft">휴진</dt>
                  <dd className="text-ink">일요일 · 공휴일</dd>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-2">
                  <dt className="font-myeongjo text-ink-soft">전화</dt>
                  <dd className="text-ink">02-720-0000</dd>
                </div>
              </dl>

              <div className="mt-10">
                <LinkButton href="/location" variant="link">
                  오시는 길 자세히 →
                </LinkButton>
              </div>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden border border-paper-line bg-hanji">
              <svg
                viewBox="0 0 400 500"
                className="absolute inset-0 h-full w-full"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden
              >
                <defs>
                  <linearGradient id="alley-sky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#e8e0c8" />
                    <stop offset="100%" stopColor="#c4b896" />
                  </linearGradient>
                </defs>
                <rect width="400" height="500" fill="url(#alley-sky)" />
                <polygon points="0,200 120,180 120,500 0,500" fill="#4a3a26" />
                <polygon points="0,180 120,160 120,200 0,220" fill="#3a2a1b" />
                <polygon
                  points="400,200 280,180 280,500 400,500"
                  fill="#4a3a26"
                />
                <polygon
                  points="400,180 280,160 280,200 400,220"
                  fill="#3a2a1b"
                />
                <polygon
                  points="120,500 280,500 250,300 150,300"
                  fill="#9b8d70"
                />
                <polygon
                  points="120,500 280,500 240,350 160,350"
                  fill="#b3a583"
                  opacity="0.5"
                />
                <path
                  d="M150,300 Q200,260 250,300 L250,310 L150,310 Z"
                  fill="#2a1f15"
                />
                <rect x="170" y="310" width="60" height="40" fill="#1a120a" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ 프리뷰 */}
      <section className="bg-hanji py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-end justify-between gap-8">
            <div>
              <span className="font-myeongjo text-sm tracking-[0.4em] text-moss">
                問 答
              </span>
              <h2 className="mt-4 font-myeongjo text-3xl leading-snug text-ink md:text-4xl">
                자주 묻는 질문.
              </h2>
            </div>
            <LinkButton href="/faq" variant="link">
              전체 보기 →
            </LinkButton>
          </div>

          <ul className="mt-12 divide-y divide-paper-line border-t border-b border-paper-line">
            {FAQ_PREVIEW.map((item) => (
              <li key={item.q} className="py-8">
                <h3 className="font-myeongjo text-xl text-ink">
                  Q. {item.q}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {item.a}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. 예약 CTA */}
      <section className="bg-moss py-24 text-hanji">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 text-center">
          <span className="font-myeongjo text-sm tracking-[0.4em] text-hanji/70">
            別 宅 韓 醫 院
          </span>
          <h2 className="font-myeongjo text-3xl leading-snug md:text-5xl">
            매일 아침,
            <br />
            몸이 가볍지 않다면.
          </h2>
          <p className="max-w-lg text-base leading-relaxed text-hanji/80">
            첫 방문은 사상체질 진단부터. 평일 10시부터 저녁 8시까지, 토요일
            오전까지 진료합니다.
          </p>
          <LinkButton
            href="/reservation"
            size="lg"
            className="bg-hanji text-ink hover:bg-hanji-deep"
          >
            진료 예약하기 →
          </LinkButton>
        </div>
      </section>
    </>
  );
}
