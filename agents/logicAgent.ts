export async function logicAgent(insight: string) {
  const tokens = insight.split(/\s+/).length;
  return Math.min(10, Math.max(1, Math.round(tokens / 2)));
}
