import { NextResponse } from "next/server";
import { runCycle } from "@/engine/runCycle";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const input = typeof body.input === "string" && body.input.trim()
    ? body.input.trim()
    : "Should MurMur ship the council dashboard now?";

  const result = await runCycle(input);
  return NextResponse.json(result);
}
