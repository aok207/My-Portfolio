"use client";

import Link from "next/link";
import React from "react";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { navbar } from "@/constants";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import { Download } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full h-fit bg-transparent backdrop-blur-lg py-4 z-50">
      <Link
        href="/"
        className="uppercase font-bold text-sm flex items-center gap-2 flex-shrink-0"
      >
        <Logo />
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

        <a href="/Aung_Oo_Khant-CV.pdf" download className="group relative">
          <Download className="w-6 h-6" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
