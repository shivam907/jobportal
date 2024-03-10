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
  console.log("hjk")
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return false;
    }
    console.log(true);
    return true;
  });
};

export async function POST(req) {
  const data = await req.json();
  connectToDB()
    const ifuser= await User.find({email: data.email});
  if(ifuser.length>0){
    console.log(ifuser)
    return Response.json({ exist: true });
  }
  console.log(data);
  const otp =Math.floor(Math.random() * 900000) + 100000;
  const res = await sendEmail(`OTP for verification is ${otp}`, data.email);
  return Response.json({ sent: res, otp: otp, exist:false });
}
