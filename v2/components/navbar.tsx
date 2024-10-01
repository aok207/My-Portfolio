"use client";

import { Moon, SunMedium } from "lucide-react";
import Link from "next/link";
import React from "react";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { navbar } from "@/constants";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { setTheme, theme } = useTheme();

  return (
    <nav className="flex items-center justify-between w-full bg-transparent backdrop-blur-lg py-4 z-50">
      <Link href="/" className="uppercase font-bold text-md">
        <TextGenerateEffect words="Aung Oo Khant" className="text-lg" />
      </Link>

      <div className="flex items-center gap-3">
        {navbar.map((social, idx) => (
          <motion.a
            key={`${social}-${idx}`}
            href={social.href}
            target="_blank"
            className="text-sm"
            whileHover={{ rotate: "360deg" }}
            transition={{ duration: 0.6, ease: "easeInOut", type: "spring" }}
          >
            {social.icon}
          </motion.a>
        ))}
        <button
          className="relative hover:bg-gray-50 hover:dark:bg-neutral-900 p-2 rounded-md"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Moon className="w-5 h-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <SunMedium className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
