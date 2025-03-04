import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, tel, message } = await request.json();

  console.log('Received data:', { name, email, tel, message });

  const emailService = process.env.EMAIL_SERVICE;
  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_PASSWORD;
  const recipient = process.env.RECIPIENT_EMAIL;

  if (!emailService || !emailUser || !emailPassword || !recipient) {
    console.error('Missing email configuration');
    return NextResponse.json({ error: "Email configuration is missing" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    service: emailService,
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
  });

  const mailOptions = {
    from: emailUser,
    to:  recipient,
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nTel: ${tel}\nMessage: ${message}`,
    html: `<h3> ${name}</h3><h4>${email}</h4><p>${tel}</p><p>${message}</p>`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
  } 
  catch (error) {
    console.error("Error sending email:", error.message);
    console.error("Error details:", error);
  }
  return NextResponse.json({ success: true }, { status: 200 }) ||  NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
}
