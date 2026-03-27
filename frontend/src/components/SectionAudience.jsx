import Tag from "./Tag";
const COLOR = "#60A5FA";
export default function SectionAudience({ data }) {
  if (!data) return null;
  return (
    <div>
      <p style={{ color:"#aaa", lineHeight:1.6, marginBottom:"16px" }}>{data.summary}</p>
      <div style={{ background:"#60A5FA11", border:"1px solid #60A5FA33", borderRadius:"10px", padding:"14px", marginBottom:"16px" }}>
        <div style={{ color:COLOR, fontWeight:700, fontSize:"12px", marginBottom:"8px", letterSpacing:"1px" }}>👤 PRIMARY SEGMENT</div>
        <p style={{ color:"#ddd", fontSize:"13px", margin:0, lineHeight:1.6 }}>{data.primarySegment}</p>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px", marginBottom:"16px" }}>
        <div>
          <div style={{ color:COLOR, fontWeight:700, fontSize:"12px", marginBottom:"10px", letterSpacing:"1px" }}>📊 DEMOGRAPHICS</div>
          {Object.entries(data.demographics).map(([k,v]) => (
            <div key={k} style={{ display:"flex", justifyContent:"space-between", borderBottom:"1px solid #1a1a2e", padding:"6px 0" }}>
              <span style={{ color:"#555", fontSize:"12px", textTransform:"capitalize" }}>{k.replace(/([A-Z])/g," $1")}</span>
              <span style={{ color:"#ccc", fontSize:"12px", textAlign:"right", maxWidth:"58%" }}>{v}</span>
            </div>
          ))}
        </div>
        <div>
          <div style={{ color:COLOR, fontWeight:700, fontSize:"12px", marginBottom:"10px", letterSpacing:"1px" }}>🧠 PSYCHOGRAPHICS</div>
          {data.psychographics.map((t,i) => <Tag key={i} text={t} color={COLOR} />)}
          <div style={{ color:COLOR, fontWeight:700, fontSize:"12px", margin:"14px 0 8px", letterSpacing:"1px" }}>💢 PAIN POINTS</div>
          {data.painPoints.map((p,i) => <div key={i} style={{ color:"#ccc", fontSize:"13px", marginBottom:"5px" }}>• {p}</div>)}
        </div>
      </div>
      <div>
        <div style={{ color:COLOR, fontWeight:700, fontSize:"12px", marginBottom:"10px", letterSpacing:"1px" }}>💰 BUYING MOTIVATIONS</div>
        <div style={{ display:"flex", flexWrap:"wrap", gap:"8px" }}>
          {data.buyingMotivations.map((m,i) => (
            <div key={i} style={{ background:"#60A5FA18", border:"1px solid #60A5FA33", borderRadius:"8px", padding:"8px 14px", color:"#ccc", fontSize:"13px" }}>{m}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
