import { NextResponse } from "next/server";


//http://localhost:3000/api/news
export async function GET() {
  return NextResponse.json({ msg: "From GET News" });
}


export async function POST() {
    return NextResponse.json({ msg: "From POST News" });
  }
 
  
  
export async function PUT() {
    return NextResponse.json({ msg: "From PUT News" });
  }
 