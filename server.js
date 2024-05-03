const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(5501, () => {
  console.log("The server started on port 5501");
});

app.post("/send-email", (req, res) => {
  console.log("request came");
  const emailContent = req.body.content;
  const recipientEmail = req.body.recipient;

  const transporter = nodemailer.createTransport({
    service: "Naver",
    host: "smtp.naver.com",
    port: 587,
    secure: false,
    auth: {
      user: "lsy_0906@naver.com",
      pass: "M7RNR89DEVYP",
    },
  });

  const mailOptions = {
    from: '"Sender’s name" <lsy_0906@naver.com>',
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
