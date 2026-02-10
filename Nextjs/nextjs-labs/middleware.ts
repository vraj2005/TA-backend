import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Task 1 → Add default pageNo
  if (url.pathname === "/lab22_DynamicRoute/pagination") {
    return NextResponse.redirect(
      new URL("/lab22_DynamicRoute/pagination/0", request.url)
    );
  }

  // Task 2 & 3 → Auth check
  if (url.pathname.startsWith("/lab24/dashboard")) {
    const tokenCookie = request.cookies.get("token");

    // No token → redirect login
    if (!tokenCookie) {
      return NextResponse.redirect(new URL("/lab24/login", request.url));
    }

    // Parse token expiry (simple simulation)
    const tokenData = JSON.parse(tokenCookie.value);
    const now = Date.now();

    // Expired → issue new token
    if (tokenData.expiry < now) {
      const response = NextResponse.next();

      const newToken = JSON.stringify({
        value: "new-token",
        expiry: now + 60 * 60 * 1000, // 1 hour
      });

      response.cookies.set("token", newToken);

      return response;
    }
  }

  return NextResponse.next();
}
