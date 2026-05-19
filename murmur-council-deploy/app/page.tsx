"use client";

import { useState } from "react";
import CouncilPanel from "@/app/components/CouncilPanel";
import MemoryView from "@/app/components/MemoryView";
import ScoreBar from "@/app/components/ScoreBar";
import StateView from "@/app/components/StateView";

const starter = "Should MurMur launch the council dashboard as a live product demo?";

export default function Page() {
  const [input, setInput] = useState(starter);
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const run = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input })
      });
      const json = await res.json();
      setData(json);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="container">
      <section className="hero">
        <div>
          <div className="kicker">MurMur system</div>
          <h1 className="title">Council Dashboard</h1>
          <p className="subtitle">
            A visual multi-agent voting brain. Input enters the loop, the council votes with confidence,
            and the system produces an explainable decision trace.
          </p>
        </div>
      </section>

      <section className="panel" style={{ marginBottom: 18 }}>
        <div className="kicker">Trigger cycle</div>
        <div className="row" style={{ marginTop: 12 }}>
          <input className="input" value={input} onChange={(e) => setInput(e.target.value)} />
          <button className="button" onClick={run} disabled={loading}>
            {loading ? "Running..." : "Run council"}
          </button>
        </div>
      </section>

      {data ? (
        <div className="grid grid-2">
          <div className="grid">
            <ScoreBar score={data.state.council.weightedScore} />
            <CouncilPanel votes={data.state.council.votes} />
          </div>
          <div className="grid">
            <StateView state={data.state} />
            <MemoryView memory={data.memory} />
          </div>
        </div>
      ) : (
        <section className="panel muted">Run the council once to render the live dashboard state.</section>
      )}
    </main>
  );
}
