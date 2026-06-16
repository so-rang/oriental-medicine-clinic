import Link from "next/link";

import { LinkButton } from "@/components/ui/button";

const NAV = [
  { href: "/#quiz", label: "체질 진단" },
  { href: "/#treatments", label: "진료" },
  { href: "/#about", label: "원장 소개" },
  { href: "/#location", label: "오시는 길" },
  { href: "/#faq", label: "자주 묻는 질문" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-paper-line/70 bg-hanji/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/#top" className="group flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-moss font-myeongjo text-sm text-hanji">
            別
          </span>
          <span className="font-myeongjo text-lg leading-none text-ink">
            별채 한의원
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-ink-soft md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-moss"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <LinkButton href="/#reservation" size="sm">
          예약하기
        </LinkButton>
      </div>
    </header>
  );
}
