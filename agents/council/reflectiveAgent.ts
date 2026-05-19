import type { Vote } from "@/engine/types";

export async function reflectiveCouncilAgent(insight: string): Promise<Vote> {
  const move = insight.length > 32;
  return {
    agent: "reflective",
    decision: move ? "F1_ACTION" : "F2_WAIT",
    confidence: 0.71,
    reasoning: move ? "There is enough narrative coherence to act." : "Signal is still too thin; reflection suggests waiting."
  };
}
