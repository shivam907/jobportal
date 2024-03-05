import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "cgcassgn@gmail.com",
    pass: 'ekmr kfvk mxjy ifcx',
  },
});

export const sendEmail = async (emailContent, sendTo) => {
  const mailOptions = {
    from: "cgcassgn@gmail.com",
    to: sendTo,
    text: emailContent,
    subject: "Verification",
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error){
        console.log(error)
        return false;
    }
    return true
  });
};
