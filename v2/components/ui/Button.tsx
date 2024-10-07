import { ButtonType, ButtonVarientType } from "@/lib/types";
import { cn } from "@/lib/utils";
import React from "react";

const Button = ({
  className = "",
  children,
  varient = "default",
  ...props
}: ButtonType) => {
  const varientClasses = new Map<ButtonVarientType, string>([
    [
      "default",
      "rounded-md px-3 py-2 text-white bg-indigo-500 enabled:hover:bg-indigo-700",
    ],
    [
      "gradientShadow",
      "px-3 py-2 group relative z-10 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 duration-300 enabled:hover:scale-110 text-white enabled:active:scale-100",
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

        enabled:hover:scale-105 enabled:hover:text-neutral-50 enabled:dark:hover:text-neutral-900
        enabled:hover:before:translate-x-[0%]
        enabled:hover:before:translate-y-[0%]
        enabled:active:scale-95`,
    ],
  ]);

  return (
    <button
      className={cn(
        varientClasses.get(varient),
        "w-fit disabled:cursor-not-allowed disabled:opacity-50",
        className
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
