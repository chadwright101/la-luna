"use server";

import nodemailer from "nodemailer";
import { emailTemplate } from "@/_lib/email-template";
import DOMPurify from "isomorphic-dompurify";
import { verifyRecaptchaToken } from "@/_lib/verify-recaptcha";

interface EmailTemplateData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface MailOptions {
  from: string;
  to: string;
  subject: string;
  replyTo: string;
  html: string;
}

export async function sendEmail(
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  const honey = formData.get("honey");
  const recaptchaToken = formData.get("recaptchaToken") as string;

  try {
    if (honey === null) {
      if (!recaptchaToken) {
        return { success: false, error: "reCAPTCHA verification required" };
      }

      const recaptchaResult = await verifyRecaptchaToken(recaptchaToken);
      if (!recaptchaResult.success) {
        return {
          success: false,
          error: recaptchaResult.error || "reCAPTCHA verification failed",
        };
      }
      const name = DOMPurify.sanitize(formData.get("name")?.toString() || "");
      const email = DOMPurify.sanitize(formData.get("email")?.toString() || "");
      const phone = DOMPurify.sanitize(formData.get("phone")?.toString() || "");
      const message = DOMPurify.sanitize(
        formData.get("message")?.toString() || ""
      );

      if (!name.trim() || !email.trim() || !message.trim()) {
        return { success: false, error: "All required fields must be filled" };
      }

      const emailHtmlContent = emailTemplate({
        name,
        email,
        phone,
        message,
      } as EmailTemplateData);

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST as string,
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER as string,
          pass: process.env.SMTP_PASS as string,
        },
        requireTLS: true,
      });

      const mailOptions: MailOptions = {
        from: process.env.SMTP_USER as string,
        to: process.env.SMTP_SEND_TO as string,
        subject: "Website form submission - La Luna Plett",
        replyTo: email,
        html: emailHtmlContent,
      };

      await transporter.sendMail(mailOptions);
      return { success: true };
    } else {
      console.error("Invalid form submission due to non-empty honeypot field");
      return { success: false, error: "Spam detected" };
    }
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to send email" };
  }
}
