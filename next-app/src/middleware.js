// This function can be marked `async` if using `await` inside

export async function middleware(request) {
  const currentUser = request.cookies.get("user")?.value;

  if (!currentUser && request.nextUrl.pathname.startsWith("/app")) {
    return Response.redirect(new URL("/sign", request.url));
  }

  if (
    !currentUser &&
    !request.nextUrl.pathname.startsWith("/sign") &&
    request.nextUrl.pathname !== "/"
  ) {
    return Response.redirect(new URL("/sign", request.url));
  }

  if (currentUser && request.nextUrl.pathname.startsWith("/sign")) {
    return Response.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
