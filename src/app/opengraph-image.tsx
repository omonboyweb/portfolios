import { ImageResponse } from "next/og";
import { ENGINEER_PROFILE } from "@/data/portfolioData";

export const alt =
  "Omonbek Xojamurodov — Software Engineer & Frontend Architect";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0a2540",
          backgroundImage:
            "radial-gradient(circle at 85% 18%, rgba(99, 91, 255, 0.45), transparent 45%), radial-gradient(circle at 15% 85%, rgba(0, 212, 255, 0.32), transparent 45%)",
          color: "#ffffff",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top Brand & Operational Pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #635bff, #00d4ff)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                fontWeight: 800,
                color: "#ffffff",
              }}
            >
              OX
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                }}
              >
                {ENGINEER_PROFILE.name}
              </span>
              <span style={{ fontSize: "16px", color: "#00d4ff" }}>
                {ENGINEER_PROFILE.role}
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 20px",
              borderRadius: "999px",
              backgroundColor: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.16)",
              fontSize: "16px",
              color: "#6ee7b7",
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "999px",
                backgroundColor: "#10b981",
              }}
            />
            <span>All systems operational | Lighthouse 99/100</span>
          </div>
        </div>

        {/* Center Hero Value Proposition */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "980px",
          }}
        >
          <div
            style={{
              fontSize: "54px",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            Yuqori yuklamali veb-tizimlar uchun muhandislik arxitekturasi.
          </div>
          <div
            style={{
              fontSize: "22px",
              lineHeight: 1.45,
              color: "#cbd5e1",
              maxWidth: "900px",
            }}
          >
            Next.js 15/16 | React 19 | TypeScript Strict | Feature-Sliced Design
            (FSD) | Multi-Tenant RBAC | TanStack Query
          </div>
        </div>

        {/* Bottom Case Study Metrics & Direct Contact Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.14)",
          }}
        >
          <div style={{ display: "flex", gap: "16px" }}>
            <div
              style={{
                padding: "10px 18px",
                borderRadius: "12px",
                backgroundColor: "rgba(99, 91, 255, 0.25)",
                border: "1px solid rgba(99, 91, 255, 0.5)",
                fontSize: "16px",
                fontWeight: 700,
                color: "#ffffff",
              }}
            >
              Education CRM (7-Role RBAC &amp; FSD)
            </div>
            <div
              style={{
                padding: "10px 18px",
                borderRadius: "12px",
                backgroundColor: "rgba(0, 212, 255, 0.16)",
                border: "1px solid rgba(0, 212, 255, 0.4)",
                fontSize: "16px",
                fontWeight: 700,
                color: "#00d4ff",
              }}
            >
              HalalHub US Marketplace
            </div>
            <div
              style={{
                padding: "10px 18px",
                borderRadius: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.16)",
                fontSize: "16px",
                fontWeight: 700,
                color: "#e2e8f0",
              }}
            >
              Logistics UX &amp; .XLSX Engine
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              fontSize: "17px",
              color: "#94a3b8",
              fontWeight: 600,
            }}
          >
            <span style={{ color: "#00d4ff" }}>eval42.uz</span>
            <span>|</span>
            <span>@the_khojamurodov</span>
            <span>|</span>
            <span style={{ color: "#ffffff" }}>{ENGINEER_PROFILE.phone}</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
