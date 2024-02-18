import { NextResponse } from "next/server";
import { cookies } from "next/headers";
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("asd");
  const encryptedSessionData = cookies().get("session").value;
  console.log("kl",encryptedSessionData)
  const data = encryptedSessionData
    ? JSON.parse(encryptedSessionData)
    : null;
  if (data.loggedIn==false) {
    console.log(data)
    return NextResponse.redirect(new URL("/admin/login", request.url));
  } else {
    console.log(data)
    NextResponse.next()
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/admin/dashboard/:path*",
};
