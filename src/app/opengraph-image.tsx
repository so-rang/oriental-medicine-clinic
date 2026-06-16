import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "별채 한의원 — 추나·교통사고·한약 | 북촌";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #faf8f3 0%, #f1ece0 60%, #dfe5d8 100%)",
          fontFamily: "serif",
          color: "#1f2421",
          position: "relative",
        }}
      >
        {/* Seal — soft sage disc */}
        <div
          style={{
            position: "absolute",
            top: 76,
            right: 80,
            width: 96,
            height: 96,
            background: "#2e4034",
            color: "#faf8f3",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 50,
            borderRadius: 9999,
          }}
        >
          別
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 22, letterSpacing: 8, color: "#8a9a82" }}>
            북촌 · 추나 · 교통사고 · 한약
          </span>
          <span
            style={{
              fontSize: 16,
              letterSpacing: 6,
              color: "#6f6b61",
              marginTop: 8,
            }}
          >
            BYULCHAE KOREAN MEDICINE CLINIC
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{ fontSize: 104, lineHeight: 1.06, fontWeight: 700 }}
          >
            오래 끌어온 통증,
          </span>
          <span
            style={{
              fontSize: 104,
              lineHeight: 1.06,
              fontWeight: 700,
              color: "#2e4034",
            }}
          >
            근본부터 잡습니다.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#6f6b61",
          }}
        >
          <span>추나 · 교통사고 · 한약 · 건강보험 적용</span>
          <span>byulchae.vercel.app</span>
        </div>
      </div>
    ),
    size
  );
}
