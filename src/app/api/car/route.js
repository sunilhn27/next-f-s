import { NextResponse } from "next/server";

//http://localhost:3000/api/car
export async function GET() {
  return NextResponse.json({ msg: "From GET Car" });
}


export async function POST() {
    return NextResponse.json({ msg: "From POST Car" });
  }
  