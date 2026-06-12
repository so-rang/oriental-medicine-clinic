import Link from "next/link";

const SECTIONS = [
  {
    title: "진료",
    items: [
      { href: "/treatments#diagnosis", label: "사상체질 진단" },
      { href: "/treatments#herbal", label: "맞춤 한약" },
      { href: "/treatments#pharmacopuncture", label: "약침" },
      { href: "/treatments#sleep-digestion", label: "수면·소화 클리닉" },
    ],
  },
  {
    title: "별채",
    items: [
      { href: "/about", label: "소개" },
      { href: "/quiz", label: "1분 체질 진단" },
      { href: "/faq", label: "자주 묻는 질문" },
      { href: "/admin", label: "콘텐츠 관리" },
    ],
  },
  {
    title: "찾아오시는 길",
    items: [
      { href: "/location", label: "오시는 길" },
      { href: "/reservation", label: "예약·문의" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-paper-line bg-hanji-deep/40">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-myeongjo text-2xl text-ink">別宅</span>
              <span className="font-myeongjo text-base text-ink-soft">
                별채 한의원
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              일상에서 한 걸음 떨어진
              <br />
              한옥 별채에서 체질을 짚다.
            </p>
            <p className="mt-6 text-xs leading-relaxed text-ink-soft/80">
              서울 종로구 북촌로 11길 14
              <br />
              02-720-0000
              <br />
              평일 10:00–20:00 · 토 10:00–16:00
              <br />
              일·공휴일 휴진
            </p>
          </div>

          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="font-myeongjo text-base text-ink">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-ink-soft">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="paper-divider mt-12" />

        <div className="mt-8 flex flex-col gap-2 text-xs text-ink-soft/70 md:flex-row md:justify-between">
          <p>
            대표원장 류은서 · 사업자등록번호 123-45-67890 · 의료광고 심의번호
            2026-BC-0001
          </p>
          <p>© 2026 BYULCHAE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
