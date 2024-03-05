'use server'
import { cookies } from 'next/headers'
import jwt from "jsonwebtoken";
export async function POST(req) {
  const data = await req.json();
  console.log(data);
  if (data.user == "V7xY#pW6Q2s@" && data.pass == "3K$9mP#z8Q@X") {
  const encryptedSessionData = await jwt.sign({ loggedIn: true }, "secret", {expiresIn: "1d"})
  cookies().set('session', encryptedSessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  })
    return Response.json({ loggedIn: true });
  } else {
      const encryptedSessionData = await jwt.sign({ loggedIn: false }, "secret", {expiresIn: "1d"})
  cookies().set('session', encryptedSessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  })
  }
  return Response.json({ loggedIn: false });
}
