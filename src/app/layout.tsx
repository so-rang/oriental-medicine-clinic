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
    default: "별채 한의원 — 체질에 맞춰, 단정한 모던 한방",
    template: "%s · 별채 한의원",
  },
  description:
    "북촌의 모던 한방. 사상체질 진단으로 시작하는 직장인 맞춤 한약·약침으로 만성피로와 체질을 다스립니다. 류은서 원장.",
  keywords: [
    "별채 한의원",
    "북촌 한의원",
    "사상체질",
    "체질진단",
    "만성피로 한약",
    "직장인 한의원",
    "약침",
    "수면 클리닉",
  ],
  openGraph: {
    title: "별채 한의원 — 체질에 맞춰, 단정한 모던 한방",
    description:
      "북촌의 모던 한방. 사상체질 진단으로 직장인의 체질을 읽는 곳.",
    url: "https://byulchae.vercel.app",
    siteName: "별채 한의원",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "별채 한의원",
    description: "체질에 맞춰, 단정한 모던 한방",
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
