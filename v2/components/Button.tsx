import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type VarientType =
  | "default"
  | "slide"
  | "dotExpend"
  | "gradientShadow"
  | "hoverShadow";

interface ButtonType extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  varient?: VarientType;
}

const Button = ({
  className = "",
  children,
  varient = "default",
  ...props
}: ButtonType) => {
  const varientClasses = new Map<VarientType, string>([
    [
      "default",
      "rounded-md px-3 py-2 text-white bg-indigo-500 hover:bg-indigo-700",
    ],
    [
      "hoverShadow",
      "rounded-none px-3 py-2 text-white bg-black dark:text-black dark:bg-white",
    ],
    [
      "gradientShadow",
      "px-3 py-2 group relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 duration-300 hover:scale-110 text-white active:scale-100",
    ],
    [
      "slide",
      `px-3 py-2 rounded-lg overflow-hidden bg-transparent text-purple-800 dark:text-purple-400 border transition-colors duration-[1s] border-purple-800 dark:border-purple-400 relative
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[0%]
        before:translate-y-[200%] before:scale-[2.5]
        before:rounded-[100%] before:bg-purple-800 dark:before:bg-purple-400
        before:transition-transform before:duration-1000
        before:content-['']

        hover:scale-105 hover:text-neutral-50 dark:hover:text-neutral-900
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`,
    ],
  ]);

  return (
    <button
      className={cn(
        className,
        varientClasses.get(varient),
        "transition-all duration-150 w-fit"
      )}
      {...props}
    >
      {children}

      {varient === "gradientShadow" && (
        <div className="pointer-events-none absolute -inset-4 z-0 transform-gpu rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 opacity-30 blur-xl transition-all duration-300 group-hover:opacity-60 group-active:opacity-30" />
      )}
    </button>
  );
};

export default Button;
