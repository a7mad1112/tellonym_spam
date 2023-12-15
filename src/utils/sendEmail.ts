import nodemailer, { SendMailOptions } from 'nodemailer';

export async function sendEmail(to: string, subject: string, html: any) {
  const { NODELAILER_PASS, NODEMAILER_EMAIL } = process.env;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: NODEMAILER_EMAIL,
      pass: NODELAILER_PASS,
    },
  });

  const mailOptions: SendMailOptions = {
    from: 'Tellonym_Spam',
    to,
    subject,
    html,
  };
  const info = await transporter.sendMail(mailOptions);
  return info;
}
