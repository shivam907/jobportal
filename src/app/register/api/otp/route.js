"use server";
import { cookies } from "next/headers";
import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "syncu907@gmail.com",
    pass: 'rewo ulfd rhxu mcwp',
  },
});

 const sendEmail = async (emailContent, sendTo) => {
  const mailOptions = {
    from: "syncu907@gmail.com",
    to: sendTo,
    text: emailContent,
    subject: "Verification",
  };
  console.log("hjk")
  transporter.sendMail(mailOptions, (error, info) => {
    if (error){
        console.log(error)
        return false;
    }
    console.log(true)
    return true
  });
};

export async function POST(req) {
  const data = await req.json();
  console.log(data);
  const otp =Math.floor(Math.random() * 900000) + 100000;
  const res = await sendEmail(String(otp), data.email);
  return Response.json({ sent: res, otp: otp });
}
