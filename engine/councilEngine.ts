import { experimentalAgent } from "@/agents/council/experimentalAgent";
import { executionAgent } from "@/agents/council/executionAgent";
import { reflectiveCouncilAgent } from "@/agents/council/reflectiveAgent";
import { revenueAgent } from "@/agents/council/revenueAgent";
import { trendAgent } from "@/agents/council/trendAgent";

export async function councilEngine(insight: string, score: number) {
  const votes = await Promise.all([
    trendAgent(insight),
    revenueAgent(insight),
    experimentalAgent(),
    executionAgent(score),
    reflectiveCouncilAgent(insight)
  ]);

  const weightedScore = Number(
    votes.reduce((acc, vote) => {
      const direction = vote.decision === "F1_ACTION" ? 1 : -1;
      return acc + direction * vote.confidence;
    }, 0).toFixed(2)
  );

  return {
    votes,
    weightedScore,
    finalDecision: weightedScore >= 0 ? "F1_ACTION" as const : "F2_WAIT" as const,
  };
}
