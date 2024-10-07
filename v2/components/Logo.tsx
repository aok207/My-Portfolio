import { cn } from "@/lib/utils";
import Image from "next/image";

const Logo = ({
  width = 48,
  height = 48,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <div
      className={cn("bg-cover overflow-hidden rounded-full relative")}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <Image
        src="/logo.jpg"
        alt="Logo"
        fill={true}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Logo;
