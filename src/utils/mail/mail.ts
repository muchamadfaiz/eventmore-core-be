import nodemailer, { Transporter } from "nodemailer";
import ejs from "ejs";
import path from "path";
import {
  EMAIL_SMTP_HOST,
  EMAIL_SMTP_PASS,
  EMAIL_SMTP_PORT,
  EMAIL_SMTP_SECURE,
  EMAIL_SMTP_SERVICE_NAME,
  EMAIL_SMTP_USER,
} from "../env";

const transporter: Transporter = nodemailer.createTransport({
  service: EMAIL_SMTP_SERVICE_NAME,
  host: EMAIL_SMTP_HOST,
  port: EMAIL_SMTP_PORT,
  secure: EMAIL_SMTP_SECURE,
  auth: {
    user: EMAIL_SMTP_USER,
    pass: EMAIL_SMTP_PASS,
  },
  requireTLS: true,
});

type TSendMail = {
  from: string;
  to: string;
  subject: string;
  html: string;
};

export const sendmail = async ({ ...mailParams }: TSendMail) => {
  const result = await transporter.sendMail({
    ...mailParams,
  });

  return result;
};

export const renderMailHtml = async (template: string, data: any): Promise<string> => {
  const templatePath = path.join(__dirname, "..", "templates", template);
  const content = await ejs.renderFile(templatePath, data);
  return content as string;
};
