import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    if (request.nextUrl.pathname.startsWith("/admin/login")) {
      // const data=adminLogin()
      // console.log(data)
  }
  // const encryptedSessionData = cookies().get("session");

  // const data = encryptedSessionData? jwt.verify(encryptedSessionData.value, 'secret'): false;
  // // const data = encryptedSessionData ? JSON.parse(encryptedSessionData) : 0;
  // if (request.nextUrl.pathname.startsWith("/admin/login")) {
  //   console.log("log in")
  //   console.log(data)
  //   if(data.loggedIn){
  //     return NextResponse.redirect(new URL("/admin/dashboard", request.url));
  //   }
  // }
  // if (request.nextUrl.pathname.startsWith("/admin/dashboard")) {
  //   console.log("dashboard")
  //   if (data.loggedIn == false) {
  //     console.log(data);
  //     return NextResponse.redirect(new URL("/admin/login", request.url));
  //   } else {
  //     console.log(data);
  //     NextResponse.next();
  //   }
  // }
}

// export const config = {
//   matcher: "/admin/dashboard/:path*",
// };
