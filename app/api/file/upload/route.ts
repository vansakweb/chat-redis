import { put } from "@vercel/blob";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const blob = await put("articles/blob001.txt", "Hello World!", {
    access: "private",
  });

  return NextResponse.json({ blob });
}
