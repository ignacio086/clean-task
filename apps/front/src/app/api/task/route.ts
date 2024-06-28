import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("http://localhost:3005/task");
  const data:TaskWeb[] = await res.json();
  return NextResponse.json(data, { status: 200 });
}

export async function POST(req:Request) {
  const body = await req.json();
  const res = await fetch(`http://localhost:3005/task`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data:TaskWeb = await res.json();
  return NextResponse.json(data, { status: 200 });
}
