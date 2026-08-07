import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const callbackUrl = new URL("/auth/google/callback?code=demo", request.url);
  return NextResponse.redirect(callbackUrl);
}
