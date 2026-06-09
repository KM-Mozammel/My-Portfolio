import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body = null;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { message: "Request body is missing or invalid JSON" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    message: "Login successful",
    data: body,
  });
}


export async function GET() {
    return NextResponse.json({
        message: "GET request received",
    });
}