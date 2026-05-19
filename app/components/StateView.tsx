import type { MurmurState } from "@/engine/types";

export default function StateView({ state }: { state: MurmurState }) {
  return (
    <section className="panel stack">
      <div>
        <div className="kicker">Input</div>
        <div>{state.input}</div>
      </div>
      <div>
        <div className="kicker">Insight</div>
        <div>{state.insight}</div>
      </div>
      <div>
        <div className="kicker">Output</div>
        <div>{state.output}</div>
      </div>
      <div>
        <div className="kicker">Raw state</div>
        <pre className="pre">{JSON.stringify(state, null, 2)}</pre>
      </div>
    </section>
  );
}
