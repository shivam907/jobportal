'use server'
import { cookies } from 'next/headers'
export async function POST(req) {
  const data = await req.json();
  console.log(data);
  if (data.user == "admin" && data.pass == "pass") {
  const encryptedSessionData = { loggedIn: true }
  cookies().set('session', JSON.stringify(encryptedSessionData), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  })
    return Response.json({ loggedIn: true });
  } else {
  const encryptedSessionData = { loggedIn: false }
  cookies().set('session', encryptedSessionData, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7, // One week
    path: '/',
  })
  }
  return Response.json({ loggedIn: false });
}
