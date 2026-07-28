import { NextRequest, NextResponse } from "next/server";
import { logError } from "../../../../library/error-logger";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    await logError({
      type: body.type || "ClientError",
      message: body.message || "Unknown client error",
      path: body.path,
      stack: body.stack,
      extra: body.extra,
      source: "client",
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to log client error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}