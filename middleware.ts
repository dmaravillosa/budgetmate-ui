import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { validateAuthToken } from "@/lib/auth";

const PUBLIC_PATHS = ["/", "/auth/google", "/auth/google/callback"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isPublicPath = PUBLIC_PATHS.some((path) => pathname === path || pathname.startsWith(path + "/"));
  if (isPublicPath) {
    return NextResponse.next();
  }

  const token = request.cookies.get("budgetmate-auth")?.value;
  if (!validateAuthToken(token)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|auth).*)"],
};
