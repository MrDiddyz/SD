export type Decision = "F1_ACTION" | "F2_WAIT";

export type Vote = {
  agent: string;
  decision: Decision;
  confidence: number;
  reasoning: string;
};

export type MurmurState = {
  input: string;
  emotion: string;
  ideas: string[];
  insight: string;
  score: number;
  council: {
    votes: Vote[];
    weightedScore: number;
    finalDecision: Decision;
  };
  output: string;
};
