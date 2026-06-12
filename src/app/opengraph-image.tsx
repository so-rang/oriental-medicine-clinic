import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "별채 한의원 — 한옥 별채에서 체질을 짚다";
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
            "linear-gradient(135deg, #f5f1e8 0%, #ece5d3 60%, #c4b896 100%)",
          fontFamily: "serif",
          color: "#1a1a1a",
          position: "relative",
        }}
      >
        {/* Seal */}
        <div
          style={{
            position: "absolute",
            top: 80,
            right: 80,
            width: 92,
            height: 92,
            background: "#b8342a",
            color: "#f5f1e8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 56,
            transform: "rotate(-3deg)",
            borderRadius: 4,
          }}
        >
          別
        </div>

        {/* Top label */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 24,
              letterSpacing: 12,
              color: "#4a5c3f",
            }}
          >
            別 宅 韓 醫 院
          </span>
          <span
            style={{
              fontSize: 16,
              letterSpacing: 10,
              color: "#6b6b6b",
              marginTop: 6,
            }}
          >
            BYULCHAE KOREAN MEDICINE CLINIC
          </span>
        </div>

        {/* Hero text */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 110,
              lineHeight: 1.1,
              fontWeight: 700,
              color: "#1a1a1a",
            }}
          >
            한옥 별채에서
          </span>
          <span
            style={{
              fontSize: 110,
              lineHeight: 1.1,
              fontWeight: 700,
              color: "#4a5c3f",
            }}
          >
            체질을 짚다.
          </span>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#6b6b6b",
          }}
        >
          <span>북촌로 11길 · 사상체질 한의원</span>
          <span>byulchae.vercel.app</span>
        </div>
      </div>
    ),
    size
  );
}
