import Link from "next/link";

const SECTIONS = [
  {
    title: "진료",
    items: [
      { href: "/#pain", label: "척추·관절 통증" },
      { href: "/#accident", label: "교통사고 후유증" },
      { href: "/#diet", label: "한방 다이어트" },
      { href: "/#herbal", label: "한약·보약" },
    ],
  },
  {
    title: "안내",
    items: [
      { href: "/#insurance", label: "보험 안내" },
      { href: "/#about", label: "원장 소개" },
      { href: "/#info", label: "진료비·진료시간" },
      { href: "/#faq", label: "자주 묻는 질문" },
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
              추나·교통사고·한약,
              <br />
              북촌의 동네 한의원.
            </p>
            <p className="mt-6 text-xs leading-relaxed text-ink-soft/80">
              서울 종로구 북촌로 11길 14
              <br />
              02-720-0000 · @별채한의원
              <br />
              평일 10:00–20:00 · 토 09:00–14:00
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
