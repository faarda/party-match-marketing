import { NextResponse, type NextRequest } from "next/server";

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

// Admin pages hold signup contact details, so they sit behind HTTP Basic auth.
// Any username works; the password is ADMIN_PASSWORD. Without it the pages stay hidden.
export function proxy(request: NextRequest) {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    return new NextResponse("Not found", { status: 404 });
  }

  const header = request.headers.get("authorization") ?? "";
  if (header.startsWith("Basic ")) {
    try {
      const decoded = atob(header.slice(6));
      const supplied = decoded.slice(decoded.indexOf(":") + 1);
      if (safeEqual(supplied, password)) {
        return NextResponse.next();
      }
    } catch {
      // Malformed header; fall through to the challenge.
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Party Match admin"' },
  });
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
