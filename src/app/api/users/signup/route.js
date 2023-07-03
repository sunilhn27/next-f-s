import { NextResponse } from "next/server";


//http://localhost:3000/api/users/signup
export async function POST() {
  return NextResponse.json({ msg: "signup" });
}
