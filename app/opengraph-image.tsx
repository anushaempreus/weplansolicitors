import { ImageResponse } from "next/og";

export const alt = "WEPlan Solicitors — Wills & Estate Planning Specialists";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #16232d 0%, #0f1a22 60%, #1e2f3a 100%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "#c6a877",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 60, height: 2, background: "#c6a877" }} />
          Wills &amp; Estate Planning
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 96,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            WEPlan Solicitors
          </div>
          <div
            style={{
              color: "#a9a394",
              fontSize: 34,
              marginTop: 24,
              maxWidth: 820,
              lineHeight: 1.35,
            }}
          >
            Kerstin Glomb and team — specialists with 25+ years&apos; experience
            across the ACT, NSW, QLD &amp; VIC.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#c6a877",
            fontSize: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 44,
              height: 44,
              borderRadius: 44,
              border: "2px solid #c6a877",
            }}
          />
          wpsolicitors.au
        </div>
      </div>
    ),
    { ...size }
  );
}
