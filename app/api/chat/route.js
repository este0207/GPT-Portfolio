import { NextResponse } from "next/server";
import { processMessage } from "@/lib/processMessage.js";

export async function POST(req) {
  const { message } = await req.json();
  const reply = await processMessage(message);
  return NextResponse.json({ reply });
}
