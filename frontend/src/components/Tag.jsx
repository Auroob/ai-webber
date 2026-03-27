export default function Tag({ text, color }) {
  return (
    <span style={{
      background: color + "18", border: `1px solid ${color}44`, color,
      padding: "3px 10px", borderRadius: "999px", fontSize: "12px",
      fontFamily: "'DM Mono', monospace", display: "inline-block", margin: "3px 3px 3px 0",
    }}>{text}</span>
  );
}
