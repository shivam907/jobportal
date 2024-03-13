"use server";
import { cookies } from "next/headers";
export async function GET() {
cookies().delete("login");
  return Response.json({
    loggedOut: true,
  });
}
