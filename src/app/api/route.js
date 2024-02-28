"use server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken"
export async function GET(req) {
  const data = cookies().get("login");
  if(!data){
    return Response.json({ loggedIn: false });
  }
  console.log(data.value)
  const decodedToken = jwt.verify(data.value, 'secret');
  console.log("iol",decodedToken);
  return Response.json({ loggedIn: true });
}
