import { NextResponse, type NextRequest } from "next/server";

function safeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

// Hardcoded so the admin page works without extra env setup.
// ADMIN_PASSWORD overrides it if set.
const DEFAULT_ADMIN_PASSWORD = "ZbubnO3cCD0KhQbtL2BD";

// Admin pages hold signup contact details, so they sit behind HTTP Basic auth.
// Any username works.
export function proxy(request: NextRequest) {
  const password = process.env.ADMIN_PASSWORD || DEFAULT_ADMIN_PASSWORD;

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
