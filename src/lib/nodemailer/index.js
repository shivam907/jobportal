import nodemailer from "nodemailer"
const transporter = nodemailer.createTransport({
  pool: true,
  service: "hotmail",
  port: 2525,
  auth: {
    user: "javascriptmastery@outlook.com",
    pass: process.env.EMAIL_PASSWORD,
  },
  maxConnections: 1,
});

const sendEmail = async (emailContent, sendTo) => {
  const mailOptions = {
    from: "javascriptmastery@outlook.com",
    to: sendTo,
    html: emailContent.body,
    subject: emailContent.subject,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return console.log(error);

    console.log("Email sent: ", info);
  });
};
