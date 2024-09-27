import express from "express";
import emailValidator from "email-validator";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const isValidEmail = (email) => {
  return emailValidator.validate(email);
};

// Route for handling the form submission
app.post("/api/submit-form", async (req, res) => {
  const formData = req.body;

  if (formData.email === "" || formData.message === "") {
    return res.status(400).json({ error: "Please fill in all the fields." });
  }

  // Check the reCAPTCHA
  const recaptchaResponse = formData["g-recaptcha-response"];
  const recaptchaSecretKey = process.env.RECAPTCHA_SECRET_KEY;
  const recaptchaVerificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptchaResponse}`;

  try {
    const recaptchaVerificationResult = await axios.post(
      recaptchaVerificationUrl
    );
    const isCaptchaValid = recaptchaVerificationResult.data.success;

    if (isCaptchaValid) {
      // Check if email structure is valid
      if (!isValidEmail(formData.email)) {
        return res.status(401).json({ error: "Invalid Email Address!" });
      }

      console.log(process.env.GMAIL_PASSWORD);

      const mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "aungookhant.business@gmail.com",
          pass: process.env.GMAIL_PASSWORD,
        },
      });

      const respondMailDetails = {
        from: "aungookhant.business@gmail.com",
        to: formData.email,
        subject: `Thank You for Contacting me`,
        text: `Dear ${formData.name},

        Thank you for reaching out! I appreciate your interest and would like to inform you that I have received your message. I will review it as soon as possible.
        
        Here are the details of your submission:
        - Name: ${formData.name}
        - Email: ${formData.email}
        - Message: ${formData.message}
        
        Please note that this is an automated confirmation email, and I will get back to you shortly.
        
        If you have any urgent inquiries, you can reach me at aungookhant007@gmail.com or my facebook: https://www.facebook.com/aungookhant.aung.
        
        Thank you again for contacting me!
        
        Best regards,
        Aung Oo Khant`,
      };

      // Send the respond mail
      mailTransporter.sendMail(respondMailDetails, (err, data) => {
        if (err) {
          console.log(err);
          return res
            .status(401)
            .json({ message: "Something went wrong. Please try again later." });
        }

        // Notify mail details
        const notifyMailDetails = {
          from: "aungookhant.business@gmail.com",
          to: "aungookhant007@gmail.com",
          subject: `A new customer or an employer!`,
          text: `Yo! ${formData.name} with the e-mail ${formData.email} sumitted the form, and he said the following:
        
        ${formData.message}`,
        };

        mailTransporter.sendMail(notifyMailDetails, (err, data) => {
          if (err) {
            return res.status(401).json({
              message: "Something went wrong. Please try again later.",
            });
          } else {
            return res.status(200).json({
              message:
                "Form submitted successfully. Please Check your email inbox",
            });
          }
        });
      });
    } else {
      console.error("reCAPTCHA verification failed");
      res.status(400).json({ error: "reCAPTCHA verification failed" });
    }
  } catch (error) {
    console.error("Error verifying reCAPTCHA:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
