// This function can be marked `async` if using `await` inside

export async function middleware(request) {
  const currentUser = request.cookies.get("user")?.value;

  const validatedUser = await new Promise((resolve) =>
    setTimeout(resolve, 3000)
  );

  console.log(validatedUser);

  console.log("validatedUser", validatedUser);

  if (!currentUser && request.nextUrl.pathname.startsWith("/app")) {
    return Response.redirect(new URL("/sign", request.url));
  }

  if (
    !currentUser &&
    !request.nextUrl.pathname.startsWith("/sign") &&
    request.nextUrl.pathname !== "/" &&
    request.nextUrl.pathname !== "/blog"
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
