import type { MurmurState } from "@/engine/types";

const memory: MurmurState[] = [];

export function coreAgent(state: MurmurState) {
  memory.unshift(state);
  return memory.slice(0, 8);
}
