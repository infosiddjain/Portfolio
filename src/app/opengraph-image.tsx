import { ImageResponse } from "next/og";
import { playStoreApps } from "@/data/projects";

export const alt = "Siddharth Jain — React Native & Next.js Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Preview image shown when the site is shared on LinkedIn, WhatsApp, X etc. */
export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0a0a0a", color: "#fff", padding: 72, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 28, letterSpacing: 4, textTransform: "uppercase", color: "#a3a3a3" }}>
          <div style={{ display: "flex", width: 64, height: 64, borderRadius: 999, background: "#c6f432", color: "#0a0a0a", alignItems: "center", justifyContent: "center", fontWeight: 800, letterSpacing: 0 }}>SJ</div>
          <span>infosiddjain</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1, letterSpacing: -3 }}>Siddharth Jain®</div>
          <div style={{ marginTop: 24, fontSize: 44, color: "#c6f432", fontWeight: 700 }}>React Native & Next.js Developer</div>
          <div style={{ marginTop: 16, fontSize: 30, color: "#d4d4d4" }}>{`Apps for health, fitness & sports-tech · ${playStoreApps.length} apps on Google Play`}</div>
        </div>
      </div>
    ),
    size
  );
}
