'use server'
import { cookies } from 'next/headers'
import User from '@/lib/models/User.model';
import { connectToDB } from "@/lib/mongoose";
export async function POST(req) {
  const data = await req.json();
  connectToDB()
  console.log(data);
  const ifuser= await User.find({email: data.email});
  if(ifuser.length>0){
    return Response.json({ exist: true });
  }
  const user=new User(data);
  await user.save()
  return Response.json({ exist: false });
}
