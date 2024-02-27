'use server'
import { cookies } from 'next/headers'
export async function POST(req) {
  const data = await req.json();
  console.log(data);
  return Response.json({ loggedIn: false });
}
