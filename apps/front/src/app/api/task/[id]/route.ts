import { NextResponse } from "next/server";
export async function GET(req:Request, { params }:any) {
  const res = await fetch(`http://localhost:3005/task/${params.id}`);
  const data:TaskWeb = await res.json();
  return NextResponse.json(data, { status: 200 });
}
export async function DELETE(req:Request, { params }:any) {
  const res = await fetch(`http://localhost:3005/task/${params.id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  return NextResponse.json(data, { status: 200 });
}
export async function PUT(req:Request, { params }:any) {
  const body = await req.json();
  const res = await fetch(`http://localhost:3005/task/${params.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data:TaskWeb = await res.json();
  return NextResponse.json(data, { status: 200 });
}
