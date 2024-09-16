// pages/api/get-cookie.ts
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { verifyTokenForPage } from '@/utels/jwttoken';

export async function GET() {
  const token = cookies().get("token")?.value || "";
  
  // Verify token
  const payload = verifyTokenForPage(token);

  if (!payload) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 });
  }

  return NextResponse.json({ username: payload.username });
}
