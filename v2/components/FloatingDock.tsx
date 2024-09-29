"use client";

import React, { useEffect, useRef, useState } from "react";
import { dock } from "@/constants/index";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

type Position = {
  left: number;
  width: number;
};

const FloatingDock = () => {
  const [position, setPosition] = useState<Position>({
    left: 0,
    width: 0,
  });
  const [prevPosition, setPrevPosition] = useState<Position>({
    left: 0,
    width: 0,
  });

  const [isVisible, setIsVisible] = useState<boolean>(true);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Check if current is not undefined and is a number
    if (typeof latest === "number") {
      const direction = latest! - scrollY.getPrevious()!;

      if (direction < 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  });

  return (
    <nav className="fixed bottom-10 left-1/2 transform -translate-x-1/2 rounded-full">
      <motion.ul
        className="rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)]"
        initial={{ y: 200, opacity: 1 }}
        animate={{ y: isVisible ? 0 : 200, opacity: isVisible ? 1 : 0 }}
        transition={{ ease: "linear" }}
      >
        {dock.map((item, index) => (
          <Tab
            item={item}
            key={`${item.text}-${index}`}
            setPosition={setPosition}
            prevPosition={prevPosition}
            setPrevPosition={setPrevPosition}
          />
        ))}

        <motion.div
          className="bg-gray-200 dark:bg-neutral-700 absolute z-0 rounded-full h-12"
          animate={{ ...position }}
        />
      </motion.ul>
    </nav>
  );
};

const Tab = ({
  item,
  setPosition,
  prevPosition,
  setPrevPosition,
}: {
  item: { text: string; href: string };
  setPosition: React.Dispatch<React.SetStateAction<Position>>;
  prevPosition: Position;
  setPrevPosition: React.Dispatch<React.SetStateAction<Position>>;
}) => {
  const ref = useRef<null | HTMLLIElement>(null);
  const currentPath = usePathname();

  useEffect(() => {
    if (item.href === currentPath) {
      if (!ref?.current) return;

      const { width } = ref.current.getBoundingClientRect();

      setPosition({
        left: ref.current.offsetLeft,
        width,
      });

      setPrevPosition({ left: ref.current.offsetLeft, width });
    }
  }, [currentPath, item.href, setPosition, setPrevPosition]);

  return (
    <li
      ref={ref}
      className={cn(
        "px-4 py-3 rounded-full z-10 transition-colors",
        currentPath !== item.href
          ? "text-gray-400 hover:text-white"
          : "text-white"
      )}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({ left: ref.current!.offsetLeft, width });
      }}
      onMouseLeave={() => {
        setPosition(prevPosition);
      }}
    >
      <Link href={item.href}>{item.text}</Link>
    </li>
  );
};

export default FloatingDock;
