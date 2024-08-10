// src/app/api/contact/route.js

import nodemailer from 'nodemailer';

export async function POST(req, res) {  
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
  }

  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  let mailOptions = {
    from: `"Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.RECIPIENT_EMAIL,
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: 'Form submitted and email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Error sending email.' }), { status: 500 });
  }
}
