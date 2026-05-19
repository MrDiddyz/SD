import type { MurmurState } from "@/engine/types";

export default function MemoryView({ memory }: { memory: MurmurState[] }) {
  return (
    <section className="panel">
      <div className="kicker">Recent memory</div>
      <div style={{ marginTop: 10 }}>
        {memory.map((item, index) => (
          <div className="memory-item" key={`${item.input}-${index}`}>
            <div><strong>{item.council.finalDecision}</strong> · {item.output}</div>
            <div className="muted">{item.input}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
