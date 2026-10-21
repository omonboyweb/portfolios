import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "40px",
          background: "linear-gradient(135deg, #0a2540 0%, #635bff 65%, #00d4ff 100%)",
          color: "#ffffff",
          fontSize: "76px",
          fontWeight: 800,
          letterSpacing: "-0.04em",
        }}
      >
        OX
      </div>
    ),
    {
      ...size,
    }
  );
}
