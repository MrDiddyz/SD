export async function emotionAgent(input: string) {
  const lower = input.toLowerCase();
  if (/[?]/.test(input) || lower.includes("unsure") || lower.includes("vet ikke")) return "uncertainty";
  if (/[!]/.test(input) || lower.includes("go") || lower.includes("build")) return "excitement";
  if (lower.includes("risk") || lower.includes("danger")) return "caution";
  return "neutral";
}
