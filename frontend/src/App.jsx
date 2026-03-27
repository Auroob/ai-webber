import { useState } from "react";
import { useAnalyzer } from "./hooks/useAnalyzer";
import { SECTIONS } from "./utils/constants";
import SectionSEO from "./components/SectionSEO";
import SectionBrand from "./components/SectionBrand";
import SectionMarketing from "./components/SectionMarketing";
import SectionSocial from "./components/SectionSocial";
import SectionAudience from "./components/SectionAudience";

const SECTION_COMPONENTS = {
  seo: SectionSEO,
  brand: SectionBrand,
  marketing: SectionMarketing,
  social: SectionSocial,
  audience: SectionAudience,
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0a0a14",
    fontFamily: "'Inter', sans-serif",
    color: "#fff",
  },
  grid: {
    position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
    backgroundImage:
      "linear-gradient(rgba(0,229,160,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,160,0.03) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
  },
  container: {
    position: "relative", zIndex: 1,
    maxWidth: "860px", margin: "0 auto",
    padding: "48px 24px 80px",
  },
};

export default function App() {
  const { url, setUrl, loading, result, error, loadingMsg, analyze } = useAnalyzer();
  const [activeTab, setActiveTab] = useState("seo");

  const handleKey = (e) => {
    if (e.key === "Enter" && !loading) analyze();
  };

  const ActiveSection = SECTION_COMPONENTS[activeTab];

  return (
    <div style={styles.page}>
      <div style={styles.grid} />

      <div style={styles.container}>

        {/* ── Header ─────────────────────────────────────── */}
        <header style={{ textAlign: "center", marginBottom: "48px" }}>
          <div style={{
            display: "inline-block",
            background: "#00E5A018", border: "1px solid #00E5A033",
            borderRadius: "999px", padding: "6px 16px",
            fontSize: "12px", color: "#00E5A0",
            letterSpacing: "2px", fontFamily: "'DM Mono', monospace",
            marginBottom: "20px",
          }}>
            AI WEBSITE INTELLIGENCE
          </div>
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(36px, 6vw, 58px)",
            fontWeight: 800, margin: "0 0 12px",
            background: "linear-gradient(135deg, #fff 0%, #00E5A0 60%, #A78BFA 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Website Analyzer
          </h1>
          <p style={{ color: "#555", fontSize: "16px", margin: 0 }}>
            Deep intelligence on any website's digital strategy
          </p>
        </header>

        {/* ── URL Input ──────────────────────────────────── */}
        <div style={{
          background: "#0f0f1e", border: "1px solid #1e1e3a",
          borderRadius: "16px", padding: "24px", marginBottom: "32px",
        }}>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <div style={{
              flex: 1, display: "flex", alignItems: "center", gap: "10px",
              background: "#070710", border: "1px solid #252540",
              borderRadius: "10px", padding: "12px 16px",
            }}>
              <span style={{ color: "#333", fontSize: "14px", fontFamily: "'DM Mono', monospace", userSelect: "none" }}>
                https://
              </span>
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={handleKey}
                placeholder="example.com"
                style={{
                  flex: 1, background: "transparent",
                  border: "none", outline: "none",
                  color: "#fff", fontSize: "15px",
                  fontFamily: "'DM Mono', monospace",
                }}
              />
            </div>
            <button
              onClick={analyze}
              disabled={loading || !url.trim()}
              style={{
                background: loading || !url.trim()
                  ? "#1a1a2e"
                  : "linear-gradient(135deg, #00E5A0, #00b87a)",
                border: "none", borderRadius: "10px",
                padding: "13px 24px",
                color: loading || !url.trim() ? "#333" : "#0a0a14",
                fontWeight: 700, fontSize: "14px",
                cursor: loading || !url.trim() ? "not-allowed" : "pointer",
                whiteSpace: "nowrap", transition: "all 0.2s",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {loading ? "Analyzing..." : "Analyze →"}
            </button>
          </div>
        </div>

        {/* ── Loading ────────────────────────────────────── */}
        {loading && (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            <div style={{
              width: "48px", height: "48px",
              border: "3px solid #1a1a2e", borderTop: "3px solid #00E5A0",
              borderRadius: "50%", animation: "spin 0.8s linear infinite",
              margin: "0 auto 20px",
            }} />
            <p style={{ color: "#00E5A0", fontFamily: "'DM Mono', monospace", fontSize: "13px", letterSpacing: "1px" }}>
              {loadingMsg}
            </p>
          </div>
        )}

        {/* ── Error ──────────────────────────────────────── */}
        {error && !loading && (
          <div style={{
            background: "#FF6B6B18", border: "1px solid #FF6B6B44",
            borderRadius: "12px", padding: "16px",
            color: "#FF6B6B", textAlign: "center", fontSize: "14px",
          }}>
            {error}
          </div>
        )}

        {/* ── Results ────────────────────────────────────── */}
        {result && !loading && (
          <div style={{ animation: "fadeIn 0.5s ease" }}>
            <style>{`
              @keyframes fadeIn { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
            `}</style>

            {/* Company overview card */}
            <div style={{
              background: "linear-gradient(135deg, #0f0f1e, #0d1420)",
              border: "1px solid #1e2a3a", borderRadius: "16px",
              padding: "24px", marginBottom: "24px",
              display: "flex", justifyContent: "space-between",
              alignItems: "flex-start", flexWrap: "wrap", gap: "12px",
            }}>
              <div>
                <div style={{ color: "#444", fontSize: "11px", letterSpacing: "2px", fontFamily: "'DM Mono', monospace", marginBottom: "6px" }}>
                  ANALYZING
                </div>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "24px", fontWeight: 800, margin: "0 0 8px" }}>
                  {result.company}
                </h2>
                <p style={{ color: "#777", fontSize: "14px", margin: 0, maxWidth: "520px", lineHeight: 1.6 }}>
                  {result.overview}
                </p>
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "#00E5A055", textAlign: "right" }}>
                {url}
              </div>
            </div>

            {/* Tab nav */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "20px", flexWrap: "wrap" }}>
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(s.id)}
                  style={{
                    background: activeTab === s.id ? s.color + "22" : "transparent",
                    border: `1px solid ${activeTab === s.id ? s.color + "66" : "#1e1e3a"}`,
                    borderRadius: "8px", padding: "8px 16px",
                    color: activeTab === s.id ? s.color : "#555",
                    cursor: "pointer", fontSize: "13px", fontWeight: 600,
                    transition: "all 0.2s", fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {s.icon} {s.label}
                </button>
              ))}
            </div>

            {/* Active section panel */}
            <div style={{
              background: "#0f0f1e", border: "1px solid #1e1e3a",
              borderRadius: "16px", padding: "28px",
            }}>
              <ActiveSection data={result[activeTab]} />
            </div>
          </div>
        )}

        {/* ── Empty state ────────────────────────────────── */}
        {!loading && !result && !error && (
          <div style={{ textAlign: "center", padding: "40px 0", color: "#2a2a40" }}>
            <div style={{ fontSize: "48px", marginBottom: "12px" }}>🌐</div>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", letterSpacing: "1px" }}>
              Enter any website URL to begin analysis
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
