'use server'
import { cookies } from 'next/headers'
import User from '@/lib/models/User.model';
import { connectToDB } from "@/lib/mongoose";
import bcryptjs from "bcryptjs";
export async function POST(req) {
  const data = await req.json();
  connectToDB()
  console.log(data);
  const ifuser= await User.find({email: data.email});
  if(ifuser.length>0){
    return Response.json({ exist: true });
  }
    const hashedPassword = await bcryptjs.hash(data.password, 8)
  const user=new User({
    email: data.email,
    name: data.name,
    college: data.college,
    password: hashedPassword,
  });
  await user.save()
  return Response.json({ exist: false });
}
