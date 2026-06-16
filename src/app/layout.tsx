import type { Metadata } from "next";
import { Nanum_Myeongjo } from "next/font/google";
import localFont from "next/font/local";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { SiteJsonLd } from "@/components/site/site-jsonld";

import "./globals.css";

const myeongjo = Nanum_Myeongjo({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
  variable: "--font-myeongjo",
  display: "swap",
});

const pretendard = localFont({
  src: "../../node_modules/pretendard/dist/web/variable/woff2/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://byulchae.vercel.app"),
  title: {
    default: "별채 한의원 — 추나·교통사고·한약 | 북촌",
    template: "%s · 별채 한의원",
  },
  description:
    "북촌 한의원. 척추·관절 통증과 교통사고 후유증은 추나요법·침·약침으로, 다이어트·만성피로는 맞춤 한약으로. 건강보험·자동차보험 적용, 평일 야간진료.",
  keywords: [
    "별채 한의원",
    "북촌 한의원",
    "추나요법",
    "교통사고 한의원",
    "한방 다이어트",
    "허리디스크 한의원",
    "약침",
    "야간진료 한의원",
  ],
  openGraph: {
    title: "별채 한의원 — 추나·교통사고·한약 | 북촌",
    description:
      "척추·관절 통증, 교통사고 후유증, 다이어트·한약. 건강보험·자동차보험 적용, 평일 야간진료.",
    url: "https://byulchae.vercel.app",
    siteName: "별채 한의원",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "별채 한의원",
    description: "추나·교통사고·한약 | 북촌, 건강보험·자동차보험 적용",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${myeongjo.variable} ${pretendard.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <SiteJsonLd />
      </body>
    </html>
  );
}
