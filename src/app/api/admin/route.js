"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken"
export async function GET(req) {
  const data = cookies().get("session");
  if(!data){
    return Response.json({ loggedIn: false });
  }
  const decodedToken = jwt.verify(data.value, 'secret');
  return Response.json({ loggedIn: true });
}
