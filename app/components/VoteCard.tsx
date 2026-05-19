import type { Vote } from "@/engine/types";

export default function VoteCard({ vote }: { vote: Vote }) {
  return (
    <div className="vote-card">
      <div className="kicker">{vote.agent}</div>
      <div className="metric">{vote.decision === "F1_ACTION" ? "🚀 Act" : "⏳ Wait"}</div>
      <div className="muted">Confidence: {vote.confidence.toFixed(2)}</div>
      <p className="muted" style={{ marginBottom: 0 }}>{vote.reasoning}</p>
    </div>
  );
}
