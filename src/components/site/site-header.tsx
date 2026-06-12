import Link from "next/link";

import { LinkButton } from "@/components/ui/button";

const NAV = [
  { href: "/#about", label: "소개" },
  { href: "/#treatments", label: "진료" },
  { href: "/#quiz", label: "체질 진단" },
  { href: "/#location", label: "오시는 길" },
  { href: "/#faq", label: "자주 묻는 질문" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-paper-line/60 bg-hanji/85 backdrop-blur supports-[backdrop-filter]:bg-hanji/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/#top" className="flex items-baseline gap-2">
          <span className="font-myeongjo text-2xl text-ink leading-none">
            別宅
          </span>
          <span className="font-myeongjo text-lg text-ink tracking-wider">
            별채
          </span>
          <span className="hidden text-xs uppercase tracking-[0.3em] text-ink-soft md:inline">
            BYULCHAE
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-ink-soft md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <LinkButton href="/#reservation" size="sm" className="text-sm">
          예약하기
        </LinkButton>
      </div>
    </header>
  );
}
