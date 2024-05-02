const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/send-email", (req, res) => {
  const emailContent = req.body.content;
  const recipientEmail = req.body.recipient;

  const transporter = nodemailer.createTransport({
    service: "Naver",
    host: "smtp.naver.com",
    tls: true,
    port: 587,
    auth: {
      user: process.env.NAVER_EMAIL, // 네이버 이메일 주소
      pass: process.env.NAVER_PASSWORD, // 네이버 앱 비밀번호
    },
  });

  const mailOptions = {
    from: process.env.NAVER_EMAIL, // 발신자 이메일
    to: recipientEmail,
    subject: "Email Subject",
    text: emailContent,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Failed to send email.");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email has been sent successfully.");
    }
  });
});

const port = 5501;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
