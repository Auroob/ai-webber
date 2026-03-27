import ScoreRing from "./ScoreRing";
const COLOR = "#FFD93D";
export default function SectionMarketing({ data }) {
  if (!data) return null;
  return (
    <div>
      <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"20px" }}>
        <ScoreRing score={data.score} color={COLOR} />
        <p style={{ color:"#aaa", lineHeight:1.6, margin:0 }}>{data.summary}</p>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px", marginBottom:"16px" }}>
        <div style={{ background:"#FFD93D11", border:"1px solid #FFD93D33", borderRadius:"10px", padding:"14px" }}>
          <div style={{ color:COLOR, fontWeight:700, fontSize:"12px", marginBottom:"10px", letterSpacing:"1px" }}>📌 CURRENT APPROACH</div>
          {data.currentApproach.map((a,i) => <div key={i} style={{ color:"#ccc", fontSize:"13px", marginBottom:"6px" }}>• {a}</div>)}
        </div>
        <div style={{ background:"#00E5A011", border:"1px solid #00E5A033", borderRadius:"10px", padding:"14px" }}>
          <div style={{ color:"#00E5A0", fontWeight:700, fontSize:"12px", marginBottom:"10px", letterSpacing:"1px" }}>🚀 OPPORTUNITIES</div>
          {data.opportunities.map((o,i) => <div key={i} style={{ color:"#ccc", fontSize:"13px", marginBottom:"6px" }}>• {o}</div>)}
        </div>
      </div>
      <div style={{ marginBottom:"14px" }}>
        <div style={{ color:COLOR, fontWeight:700, fontSize:"12px", marginBottom:"6px", letterSpacing:"1px" }}>📝 CONTENT STRATEGY</div>
        <p style={{ color:"#ccc", fontSize:"13px", margin:0, lineHeight:1.6 }}>{data.contentStrategy}</p>
      </div>
      <div>
        <div style={{ color:COLOR, fontWeight:700, fontSize:"12px", marginBottom:"6px", letterSpacing:"1px" }}>📣 CTA EFFECTIVENESS</div>
        <p style={{ color:"#ccc", fontSize:"13px", margin:0, lineHeight:1.6 }}>{data.cta}</p>
      </div>
    </div>
  );
}
