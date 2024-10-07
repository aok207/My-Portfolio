"use server";
import { TContactFormSchema, contactFormSchema } from "@/lib/types";
import nodemailer from "nodemailer";

async function verifyRecaptcha(token: string): Promise<boolean> {
  const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
  const recaptchaVerificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${token}`;

  try {
    const res = await fetch(recaptchaVerificationUrl, { method: "POST" });
    const result = await res.json();

    return result.success;
  } catch (err) {
    console.log(err);
    return false;
  }
}

export async function contactFormAction(
  data: TContactFormSchema,
  recaptchaToken: string
): Promise<{
  errors: { root?: string; email?: string[]; message?: string[] } | undefined;
}> {
  // Validate input
  const validation = contactFormSchema.safeParse(data);

  if (!validation.success) {
    return {
      errors: { ...validation.error.flatten().fieldErrors, root: undefined },
    };
  }

  if (!recaptchaToken) {
    return {
      errors: {
        email: undefined,
        message: undefined,
        root: "Please complete the reCAPTCHA!",
      },
    };
  }

  // Check the reCAPTCHA
  if (!(await verifyRecaptcha(recaptchaToken))) {
    return {
      errors: {
        email: undefined,
        message: undefined,
        root: "Invalid captcha! Please try again!",
      },
    };
  }

  // send email
  const mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "aungookhant.business@gmail.com",
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  // Send confirmation email to user
  const respondMailDetails = {
    from: "aungookhant.business@gmail.com",
    to: validation.data.email,
    subject: `Thank You for Contacting me`,
    text: `Hey,

    Thank you for reaching out! I appreciate your interest and would like to inform you that I have received your message. I will review it as soon as possible.

    Here are the details of your message:
    - Email: ${validation.data.email}
    - Message: ${validation.data.message}

    Please note that this is an automated confirmation email, and I will get back to you shortly.

    If you have any urgent inquiries, you can reach me at aungookhant007@gmail.com or my facebook: https://www.facebook.com/aungookhant.aung.

    Thank you again for contacting me!

    Best regards,
    Aung Oo Khant`,
  };

  let error = false;

  // Send the respond mail
  mailTransporter.sendMail(respondMailDetails, (err) => {
    if (err) {
      console.log(
        `There was an error while sending email to ${validation.data.email}: ${err}`
      );
      error = true;
      return;
    }

    // Notify mail details
    const notifyMailDetails = {
      from: "aungookhant.business@gmail.com",
      to: "aungookhant007@gmail.com",
      subject: `A new customer or an employer!`,
      text: `Yo! someone with the e-mail ${validation.data.email} sumitted the form, and he said the following:

    ${validation.data.message}`,
    };

    mailTransporter.sendMail(notifyMailDetails, (err) => {
      if (err) {
        console.log(
          `There was an error while sending email to aungookhant007@gmail.com: ${err}`
        );

        return;
      }
    });
  });

  if (error) {
    return {
      errors: {
        email: undefined,
        message: undefined,
        root: "There was an error while sending the email! Please try again later!",
      },
    };
  }

  return {
    errors: undefined,
  };
}
