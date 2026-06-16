import Link from "next/link";

const SECTIONS = [
  {
    title: "진료",
    items: [
      { href: "/#diagnosis", label: "사상체질 진단" },
      { href: "/#herbal", label: "맞춤 한약" },
      { href: "/#pharmacopuncture", label: "약침" },
      { href: "/#sleep-digestion", label: "수면·소화 클리닉" },
    ],
  },
  {
    title: "별채",
    items: [
      { href: "/#about", label: "원장 소개" },
      { href: "/#quiz", label: "1분 체질 진단" },
      { href: "/#faq", label: "자주 묻는 질문" },
      { href: "/admin", label: "콘텐츠 관리" },
    ],
  },
  {
    title: "찾아오시는 길",
    items: [
      { href: "/#location", label: "오시는 길" },
      { href: "/#reservation", label: "예약·문의" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-paper-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-moss font-myeongjo text-sm text-hanji">
                別
              </span>
              <span className="font-myeongjo text-lg text-ink">별채 한의원</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-soft">
              체질에 맞춰, 단정하게.
              <br />
              북촌의 모던 한방.
            </p>
            <p className="mt-6 text-xs leading-relaxed text-ink-soft/80">
              서울 종로구 북촌로 11길 14
              <br />
              02-720-0000 · @별채한의원
              <br />
              평일 10:00–20:00 · 토 10:00–16:00
            </p>
          </div>

          {SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-moss">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition-colors hover:text-moss"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="paper-divider mt-14" />

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
