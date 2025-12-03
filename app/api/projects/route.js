import { NextResponse } from "next/server";
import projects from "@/data/projects.json";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  const project = projects.find(p => p.id === id);

  if (!project) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json(project);
}
