import type { Vote } from "@/engine/types";

export async function trendAgent(insight: string): Promise<Vote> {
  const move = /build|share|test/i.test(insight);
  return {
    agent: "trend",
    decision: move ? "F1_ACTION" : "F2_WAIT",
    confidence: 0.72,
    reasoning: "Momentum signals favor visible movement when insight implies external validation."
  };
}
