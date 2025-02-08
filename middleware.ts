import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const password = request.cookies.get("password")?.value;

  // Skip middleware for login page to avoid redirect loop
  if (request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.next();
  }

  // If no password cookie is present, redirect to login page
  if (!password) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
