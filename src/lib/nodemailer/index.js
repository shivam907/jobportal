import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "syncu907@gmail.com",
    pass: 'rewo ulfd rhxu mcwp',
  },
});

export const sendEmail = async (emailContent, sendTo) => {
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
    return true
  });
};
