import type { Decision } from "@/engine/types";

export async function outputAgent(decision: Decision) {
  return decision === "F1_ACTION" ? "Take action with a constrained test." : "Hold position and gather more signal.";
}
