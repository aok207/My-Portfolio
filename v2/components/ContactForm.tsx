"use client";
import { useForm } from "react-hook-form";
import { TContactFormSchema, contactFormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./ui/Button";
import { Send } from "lucide-react";
import { contactFormAction } from "@/app/contact/actions";
import toast from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<TContactFormSchema>({ resolver: zodResolver(contactFormSchema) });

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  async function onSubmit(data: TContactFormSchema) {
    if (!recaptchaToken) {
      setError("root", { message: "Please complete the captcha!" });
      return;
    }

    const result = await contactFormAction(data, recaptchaToken);

    if (result.errors) {
      if (result.errors.email) {
        setError("email", { message: result.errors.email[0] });
      }

      if (result.errors.message) {
        setError("message", { message: result.errors.message[0] });
      }

      if (result.errors.root) {
        setError("root", { message: result.errors.root });
      }

      return;
    }

    reset();
    toast.success("Your message has been sent!");
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4"
    >
      {errors.root && (
        <p className="text-sm text-red-600" aria-live="polite" role="status">
          {errors.root.message}
        </p>
      )}

      <div className="flex flex-col gap-2 w-full">
        <input
          placeholder="johndoe@xyz.com"
          {...register("email")}
          className="flex h-10 w-full rounded-md border border-white bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none  focus-visible:border-none focus-visible:ring-2 focus-visible:ring-purple-800 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
        {errors.email && (
          <p className="text-sm text-red-600" aria-live="polite" role="status">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2 w-full">
        <textarea
          placeholder="Send me your message"
          {...register("message")}
          className="flex h-40 w-full rounded-md border border-white bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:border-none focus-visible:ring-2 focus-visible:ring-purple-800 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        ></textarea>
        {errors.message && (
          <p className="text-sm text-red-600" aria-live="polite" role="status">
            {errors.message.message}
          </p>
        )}
      </div>

      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        onChange={(token) => setRecaptchaToken(token)}
        onExpired={() => setRecaptchaToken(null)}
      />

      <Button
        varient="slide"
        disabled={isSubmitting || recaptchaToken === null}
        className="w-full md:w-fit flex gap-2 justify-center items-center"
        type="submit"
      >
        {isSubmitting ? (
          "Sending"
        ) : (
          <>
            Send <Send />
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
