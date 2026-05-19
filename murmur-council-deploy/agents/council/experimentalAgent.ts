import type { Vote } from "@/engine/types";

export async function experimentalAgent(): Promise<Vote> {
  return {
    agent: "experimental",
    decision: "F1_ACTION",
    confidence: 0.64,
    reasoning: "Default bias is toward running a bounded experiment instead of debating in abstraction."
  };
}
