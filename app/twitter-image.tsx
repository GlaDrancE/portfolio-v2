import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "linear-gradient(130deg, #040911 0%, #07152c 55%, #062c38 100%)",
          color: "#f5fbff",
          padding: "72px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ color: "#81ecff", fontSize: 30, letterSpacing: 4 }}>GLADCODE //</div>
        <div style={{ fontSize: 78, fontWeight: 800, marginTop: 18, lineHeight: 1.1 }}>
          Ayush Ramteke
        </div>
        <div style={{ fontSize: 33, color: "#b3c4d6", marginTop: 22, maxWidth: 960 }}>
          Full-Stack Developer Portfolio
        </div>
      </div>
    ),
    size,
  );
}
