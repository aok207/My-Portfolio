import { cn } from "@/lib/utils";
import React from "react";

const Heading = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text text-center lg:text-left w-fit",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Heading;
