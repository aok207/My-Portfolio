"use client";

import { motion } from "framer-motion";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

const slideUp = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const Hero = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-6 text-center justify-center items-center">
      <motion.h1
        className="text-md font-extrabold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
        initial="initial"
        animate="animate"
        transition={{ ease: "easeIn", duration: 0.3 }}
        variants={slideUp}
      >
        Crafting Code, Shaping Ideas
      </motion.h1>

      <motion.h1
        className="text-4xl font-extrabold dark:text-white text-black tracking-wide"
        initial="initial"
        animate="animate"
        transition={{ ease: "easeIn", duration: 0.3 }}
        variants={slideUp}
      >
        <div className="flex gap-6">
          {"Turning complex problems into".split(" ").map((word, idx) => (
            <span key={`${idx}-${word}`}>{word}</span>
          ))}
        </div>

        <div className="flex gap-6 justify-center w-full">
          {"clean, elegant solutions".split(" ").map((word, idx) => (
            <span key={`${idx}-${word}`}>{word}</span>
          ))}
        </div>
      </motion.h1>

      <motion.h1
        className="text-lg font-extrabold text-blue-700 dark:text-blue-300"
        initial="initial"
        animate="animate"
        transition={{ ease: "easeIn", duration: 0.3 }}
        variants={slideUp}
      >
        Hi, I&apos;m{" "}
        <span className="relative">
          <motion.div
            className="absolute top-0 left-0 h-full bg-purple-700 pointer-events-none z-0"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ ease: "linear", duration: 1, delay: 0.3 }}
          />
          <span className="relative z-10 text-white dark:text-gray-200">
            Aung Oo Khant
          </span>
        </span>{" "}
        <span className="text-purple-600">!</span> A Software Engineer from
        Myanmar
      </motion.h1>

      <motion.div
        className="flex gap-4 items-center"
        initial="initial"
        animate="animate"
        transition={{ ease: "easeIn", duration: 0.3 }}
        variants={slideUp}
      >
        <Button varient="slide" onClick={() => router.push("/projects")}>
          See My Work
        </Button>
        <Button
          varient="gradientShadow"
          onClick={() => router.push("/contact")}
        >
          Get In Touch
        </Button>
      </motion.div>
    </div>
  );
};

export default Hero;
