"use client";

import { SunMedium } from "lucide-react";
import Link from "next/link";
import React from "react";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { navbar } from "@/constants";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full bg-transparent backdrop-blur-lg py-4">
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
        <button className="hover:bg-gray-50 hover:dark:bg-neutral-900 p-2 rounded-md">
          <SunMedium className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
