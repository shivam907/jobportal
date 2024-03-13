"use server";
import { cookies } from "next/headers";
import User from "@/lib/models/User.model";
import nodemailer from "nodemailer"
import { connectToDB } from "@/lib/mongoose";
const transporter = nodemailer.createTransport({
  service: "gmail",
  // port: 465,
  secure: true,
  auth: {
    user: "toidverify@gmail.com",
    pass: "tamp jrzy rqdx xzez",
  },
});

 const sendEmail = async (emailContent, sendTo) => {
  const mailOptions = {
    from: "toidverify@gmail.com",
    to: sendTo,
    html: emailContent,
    subject: "Verification",
  };
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return false;
    }
    return true;
  });
};

export async function POST(req) {
  const data = await req.json();
  connectToDB()
    const ifuser= await User.find({email: data.email});
  if(ifuser.length>0){
    return Response.json({ exist: true });
  }
  const otp =Math.floor(Math.random() * 900000) + 100000;
  const res = await sendEmail(`OTP for verification is ${otp}`, data.email);
  return Response.json({ sent: res, otp: otp, exist:false });
}
