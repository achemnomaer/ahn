import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  try {
    await new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err, info) {
        if (err) {
          reject(err.message);
        } else {
          resolve("Email sent");
        }
      });
    });
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
