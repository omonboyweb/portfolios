import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
          background: "linear-gradient(135deg, #0a2540 0%, #635bff 65%, #00d4ff 100%)",
          color: "#ffffff",
          fontSize: "15px",
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
