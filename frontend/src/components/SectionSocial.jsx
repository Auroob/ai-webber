import ScoreRing from "./ScoreRing";
const COLOR = "#A78BFA";
const STRENGTH_COLOR = { high:"#00E5A0", medium:"#FFD93D", low:"#FF6B6B" };
export default function SectionSocial({ data }) {
  if (!data) return null;
  return (
    <div>
      <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"20px" }}>
        <ScoreRing score={data.score} color={COLOR} />
        <p style={{ color:"#aaa", lineHeight:1.6, margin:0 }}>{data.summary}</p>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"10px", marginBottom:"20px" }}>
        {data.platforms.map((p,i) => (
          <div key={i} style={{
            background: p.likely ? "#A78BFA11" : "#ffffff06",
            border: `1px solid ${p.likely ? "#A78BFA44" : "#1e1e3a"}`,
            borderRadius:"10px", padding:"12px", opacity: p.likely ? 1 : 0.45,
          }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"6px" }}>
              <span style={{ color: p.likely ? "#fff" : "#555", fontWeight:600, fontSize:"13px" }}>{p.name}</span>
              <span style={{ color: STRENGTH_COLOR[p.strength] || "#aaa", fontSize:"10px", fontWeight:700 }}>{p.strength?.toUpperCase()}</span>
            </div>
            <p style={{ color:"#777", fontSize:"11px", margin:0, lineHeight:1.4 }}>{p.notes}</p>
          </div>
        ))}
      </div>
      <div>
        <div style={{ color:COLOR, fontWeight:700, fontSize:"12px", marginBottom:"10px", letterSpacing:"1px" }}>💡 RECOMMENDATIONS</div>
        {data.recommendations.map((r,i) => (
          <div key={i} style={{ display:"flex", gap:"8px", marginBottom:"8px" }}>
            <span style={{ color:COLOR, fontFamily:"'DM Mono', monospace", fontSize:"12px", marginTop:"2px" }}>{i+1}.</span>
            <span style={{ color:"#ccc", fontSize:"13px" }}>{r}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
