import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const privateRoutes = ["/profile", "/notes"];
const authRoutes = ["/sign-in", "/sign-up"];

export async function proxy(request: NextRequest) {
  const { nextUrl } = request;

  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;

  let isAuthenticated = !!accessToken;
  let justRefreshed = false;
  let newCookieHeader: string | null = null;

  if (!isAuthenticated && refreshToken) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/session`,
        {
          method: "GET",
          headers: {
            Cookie: `refreshToken=${refreshToken}`,
          },
        },
      );

      if (response.ok) {
        isAuthenticated = true;
        justRefreshed = true;
        newCookieHeader = response.headers.get("set-cookie");
      }
    } catch (error) {
      console.error("Session refresh failed in proxy:", error);
    }
  }

  const isPrivateRoute = privateRoutes.some((route) =>
    nextUrl.pathname.startsWith(route),
  );
  const isAuthRoute = authRoutes.some((route) =>
    nextUrl.pathname.startsWith(route),
  );

  if (justRefreshed) {
    const targetUrl = isAuthRoute ? new URL("/", request.url) : request.url;
    const response = NextResponse.redirect(targetUrl);

    if (newCookieHeader) {
      response.headers.set("set-cookie", newCookieHeader);
    }
    return response;
  }

  if (isPrivateRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*", "/notes/:path*", "/sign-in", "/sign-up"],
};
