"use server";
import { cookies } from "next/headers";
import User from "@/lib/models/User.model";
import { connectToDB } from "@/lib/mongoose";
export async function POST(req) {
  const data = await req.json();
  connectToDB();
  console.log(data);
  const ifuser = await User.findOne({ email: data.email });
  if (!ifuser) {
    return Response.json({ error: true });
  }
  const validPassword = await bcryptjs.compare(data.password, ifuser.password);
  if (!validPassword) {
    return NextResponse.json({ error: true });
  }
  return Response.json({ error: false });
  return Response.json({ error: false });
}
