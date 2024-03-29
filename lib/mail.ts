import nodemailer from "nodemailer";
import Handlebars from "handlebars";
import { activationTemplate } from "./emailTemplates/activation";
import { resetPasswordTemplate } from "./emailTemplates/resetPassword";
export async function sendMail({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_SERVER_USER, // generated ethereal user
      pass: process.env.EMAIL_SERVER_PASSWORD, // generated ethereal password
    },
  });
  try {
    const testResult = await transporter.verify();
  } catch (e) {
    console.log(e);
  }
  try {
    const sendMailResult = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html: body,
    });
  } catch (e) {
    console.log(e);
  }
}
//beefree.io
export function compileActivationTemplate(name: string, url: string) {
  const template = Handlebars.compile(activationTemplate);
  const htmlBody = template({ name, url });
  return htmlBody;
}

export function compileRestPassTemplate(name: string, url: string) {
  const template = Handlebars.compile(resetPasswordTemplate);
  const htmlBody = template({ name, url });
  return htmlBody;
}
