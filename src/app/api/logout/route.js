"use server";
import { cookies } from "next/headers";
export async function GET() {
cookies().delete("login")
console.log("logout")
  return Response.json({
    loggedOut: true,
  });
}
