export async function ideaAgent(emotion: string) {
  switch (emotion) {
    case "uncertainty":
      return ["explore", "ask questions", "observe signals"];
    case "excitement":
      return ["build fast", "share externally", "test demand"];
    case "caution":
      return ["reduce risk", "verify assumptions", "stage rollout"];
    default:
      return ["analyze", "prioritize", "execute cleanly"];
  }
}
