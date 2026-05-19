import { coreAgent } from "@/agents/coreAgent";
import { emotionAgent } from "@/agents/emotionAgent";
import { ideaAgent } from "@/agents/ideaAgent";
import { logicAgent } from "@/agents/logicAgent";
import { outputAgent } from "@/agents/outputAgent";
import { reflectAgent } from "@/agents/reflectAgent";
import { councilEngine } from "@/engine/councilEngine";
import type { MurmurState } from "@/engine/types";

export async function runCycle(input: string) {
  const emotion = await emotionAgent(input);
  const ideas = await ideaAgent(emotion);
  const insight = await reflectAgent(ideas);
  const score = await logicAgent(insight);
  const council = await councilEngine(insight, score);
  const output = await outputAgent(council.finalDecision);

  const state: MurmurState = {
    input,
    emotion,
    ideas,
    insight,
    score,
    council,
    output,
  };

  const memory = coreAgent(state);

  return { state, memory };
}
