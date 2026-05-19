import type { Vote } from "@/engine/types";

export async function executionAgent(score: number): Promise<Vote> {
  const move = score >= 5;
  return {
    agent: "execution",
    decision: move ? "F1_ACTION" : "F2_WAIT",
    confidence: 0.88,
    reasoning: move ? "Operational feasibility is acceptable for a first deployment." : "Execution quality is too low; reduce scope first."
  };
}
