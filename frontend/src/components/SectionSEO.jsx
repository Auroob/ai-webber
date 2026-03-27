import ScoreRing from "./ScoreRing";
import Tag from "./Tag";
const COLOR = "#00E5A0";
export default function SectionSEO({ data }) {
  if (!data) return null;
  return (
    <div>
      <div style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"20px" }}>
        <ScoreRing score={data.score} color={COLOR} />
        <p style={{ color:"#aaa", lineHeight:1.6, margin:0 }}>{data.summary}</p>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px", marginBottom:"20px" }}>
        <div style={{ background:"#00E5A011", border:"1px solid #00E5A033", borderRadius:"10px", padding:"14px" }}>
          <div style={{ color:COLOR, fontWeight:700, fontSize:"12px", marginBottom:"10px", letterSpacing:"1px" }}>✅ STRENGTHS</div>
          {data.strengths.map((s,i) => <div key={i} style={{ color:"#ccc", fontSize:"13px", marginBottom:"6px" }}>• {s}</div>)}
        </div>
        <div style={{ background:"#FF6B6B11", border:"1px solid #FF6B6B33", borderRadius:"10px", padding:"14px" }}>
          <div style={{ color:"#FF6B6B", fontWeight:700, fontSize:"12px", marginBottom:"10px", letterSpacing:"1px" }}>⚠️ WEAKNESSES</div>
          {data.weaknesses.map((w,i) => <div key={i} style={{ color:"#ccc", fontSize:"13px", marginBottom:"6px" }}>• {w}</div>)}
        </div>
      </div>
      <div style={{ marginBottom:"16px" }}>
        <div style={{ color:COLOR, fontWeight:700, fontSize:"12px", marginBottom:"10px", letterSpacing:"1px" }}>💡 RECOMMENDATIONS</div>
        {data.recommendations.map((r,i) => (
          <div key={i} style={{ display:"flex", gap:"8px", marginBottom:"8px" }}>
            <span style={{ color:COLOR, fontFamily:"'DM Mono', monospace", fontSize:"12px", marginTop:"2px" }}>{i+1}.</span>
            <span style={{ color:"#ccc", fontSize:"13px" }}>{r}</span>
          </div>
        ))}
      </div>
      <div>
        <div style={{ color:"#aaa", fontWeight:700, fontSize:"12px", marginBottom:"8px", letterSpacing:"1px" }}>🔑 TARGET KEYWORDS</div>
        {data.keywords.map((k,i) => <Tag key={i} text={k} color={COLOR} />)}
      </div>
    </div>
  );
}
