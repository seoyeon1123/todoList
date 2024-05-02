const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/send-email", (req, res) => {
  const emailContent = req.body.content;
  const recipientEmail = req.body.recipient;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "woghks072@gmail.com",
      pass: "lee355400!",
    },
  });

  const mailOptions = {
    from: "woghks072@gmail.com",
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
