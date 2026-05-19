import type { Vote } from "@/engine/types";
import VoteCard from "./VoteCard";

export default function CouncilPanel({ votes }: { votes: Vote[] }) {
  return (
    <section className="panel">
      <div className="kicker">Council votes</div>
      <div className="vote-grid" style={{ marginTop: 14 }}>
        {votes.map((vote) => (
          <VoteCard key={vote.agent} vote={vote} />
        ))}
      </div>
    </section>
  );
}
