export default function ScoreBar({ score }: { score: number }) {
  const width = Math.min(100, Math.max(8, Math.abs(score) * 20));

  return (
    <section className="panel">
      <div className="kicker">Weighted decision score</div>
      <div className="row" style={{ justifyContent: "space-between", margin: "10px 0 12px" }}>
        <strong>{score >= 0 ? "F1_ACTION" : "F2_WAIT"}</strong>
        <span className="muted">{score.toFixed(2)}</span>
      </div>
      <div className="score-track">
        <div className="score-fill" style={{ width: `${width}%` }} />
      </div>
    </section>
  );
}
