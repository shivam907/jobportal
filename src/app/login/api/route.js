"use server";
import User from "@/lib/models/User.model";
import { connectToDB } from "@/lib/mongoose";
import bcryptjs from "bcryptjs";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
export async function POST(req) {
  const data = await req.json();
  connectToDB();
  const ifuser = await User.findOne({ email: data.email });
  if (!ifuser) {
    return Response.json({ error: true });
  }
  const validPassword = await bcryptjs.compare(data.password, ifuser.password);
  if (!validPassword) {
    return Response.json({ error: true });
  }
  const tokenData = {
    id: ifuser._id,
    email: ifuser.email,
    name: ifuser.name
  };
  const token = await jwt.sign(tokenData, "secret", { expiresIn: "10d" });
  const response = Response.json({
    error: false,
  });
  cookies().set("login", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return response;
}
