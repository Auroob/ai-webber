import Tag from "./Tag";
const COLOR = "#FF6B6B";
export default function SectionBrand({ data }) {
  if (!data) return null;
  return (
    <div>
      <p style={{ color:"#aaa", lineHeight:1.6, marginBottom:"20px" }}>{data.summary}</p>
      <div style={{ marginBottom:"20px" }}>
        <div style={{ color:COLOR, fontWeight:700, fontSize:"12px", marginBottom:"12px", letterSpacing:"1px" }}>🎨 COLOR PALETTE</div>
        <div style={{ display:"flex", gap:"12px", flexWrap:"wrap" }}>
          {data.palette.map((c,i) => (
            <div key={i} style={{ textAlign:"center" }}>
              <div style={{ width:"60px", height:"60px", borderRadius:"12px", background:c.hex, border:"2px solid #333", marginBottom:"6px" }} />
              <div style={{ color:"#fff", fontSize:"11px", fontFamily:"'DM Mono', monospace" }}>{c.hex}</div>
              <div style={{ color:"#aaa", fontSize:"10px" }}>{c.name}</div>
              <div style={{ color:"#555", fontSize:"10px" }}>{c.role}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"16px", marginBottom:"16px" }}>
        <div>
          <div style={{ color:COLOR, fontWeight:700, fontSize:"12px", marginBottom:"8px", letterSpacing:"1px" }}>✨ BRAND PERSONALITY</div>
          {data.personality.map((t,i) => <Tag key={i} text={t} color={COLOR} />)}
        </div>
        <div>
          <div style={{ color:COLOR, fontWeight:700, fontSize:"12px", marginBottom:"8px", letterSpacing:"1px" }}>📝 TONE OF VOICE</div>
          <p style={{ color:"#ccc", fontSize:"13px", margin:0, lineHeight:1.6 }}>{data.tone}</p>
        </div>
      </div>
      <div>
        <div style={{ color:COLOR, fontWeight:700, fontSize:"12px", marginBottom:"8px", letterSpacing:"1px" }}>🔤 TYPOGRAPHY NOTES</div>
        <p style={{ color:"#ccc", fontSize:"13px", margin:0, lineHeight:1.6 }}>{data.typography}</p>
      </div>
    </div>
  );
}
