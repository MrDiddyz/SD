import type { Vote } from "@/engine/types";

export async function revenueAgent(insight: string): Promise<Vote> {
  const move = /share|demand|execute/i.test(insight);
  return {
    agent: "revenue",
    decision: move ? "F1_ACTION" : "F2_WAIT",
    confidence: 0.76,
    reasoning: "Commercial signal increases when the loop points toward demand testing or execution."
  };
}
