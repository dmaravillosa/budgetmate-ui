import { NextResponse } from "next/server";
import { createAuthToken } from "@/lib/auth";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error");

  if (code) {
    const token = createAuthToken();
    const response = NextResponse.redirect(new URL("/dashboard", request.url));
    response.cookies.set("budgetmate-auth", token, {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
    });
    return response;
  }

  const failureUrl = new URL("/", request.url);
  failureUrl.searchParams.set("authError", error ?? "missing_code");
  return NextResponse.redirect(failureUrl);
}
