'use server'
import { cookies } from 'next/headers'
import User from '@/lib/models/User.model';
import { connectToDB } from "@/lib/mongoose";
export async function POST(req) {
  const data = await req.json();
  connectToDB()
  console.log(data);
  const user=new User(data);
  await user.save()
  return Response.json({ loggedIn: false });
}
