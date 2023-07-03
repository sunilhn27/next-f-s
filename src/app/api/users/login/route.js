import { NextResponse } from "next/server";


//http://localhost:3000/api/users/login
export async function GET() {
  return NextResponse.json({ msg: "From GET login" });
}


export async function POST() {
    return NextResponse.json({ msg: "From POST login" });
  }
  