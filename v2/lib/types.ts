import { ReactNode } from "react";
import { z } from "zod";

// Button
export type ButtonVarientType = "default" | "slide" | "gradientShadow";

export interface ButtonType
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  varient?: ButtonVarientType;
}

// Dock pill
export type PillPosition = {
  left: number;
  width: number;
};

// Contact Form
export const contactFormSchema = z.object({
  email: z.string().email(),
  message: z.string().min(1, "Please enter at least one charactor."),
});

export type TContactFormSchema = z.infer<typeof contactFormSchema>;
