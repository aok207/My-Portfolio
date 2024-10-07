"use client";

import Image from "next/image";
import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { MoveUpRight } from "lucide-react";

const ROTATION_RANGE = 30;

const ProjectCard = ({
  project,
}: {
  project: {
    image: string;
    title: string;
    description: string;
    link: string;
    techStack: JSX.Element[];
  };
}) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const easeX = useSpring(x);
  const easeY = useSpring(y);

  const transform = useMotionTemplate`rotateX(${easeX}deg) rotateY(${easeY}deg)`;

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;

    const height = rect.height;

    const mouseX = (e.clientX - rect.left) / width; // Normalize mouseX between 0 and 1
    const mouseY = (e.clientY - rect.top) / height; // Normalize mouseY between 0 and 1

    const rX = (mouseY - 0.5) * ROTATION_RANGE * -1; // RotateX based on mouseY
    const rY = (mouseX - 0.5) * ROTATION_RANGE; // RotateY based on mouseX

    x.set(rX);

    y.set(rY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      className="group flex flex-col gap-4 rounded-lg w-72 min-h-96 bg-background"
      href={project.link}
      style={{
        transform,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      target="_blank"
      ref={ref}
    >
      <div
        className="w-full h-1/3 rounded-t-lg overflow-hidden relative flex-shrink-0"
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(75px)",
        }}
      >
        <Image
          src={project.image}
          alt={project.description}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div
        className="flex flex-col gap-4 px-4 pb-4 flex-grow justify-between"
        style={{
          transformStyle: "preserve-3d",
          transform: "translateZ(75px)",
        }}
      >
        <div
          className="flex flex-col gap-4"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <span className="text-lg leading-relaxed text-center">
            <b>{project.title}</b>
          </span>
          <p className="text-sm text-gray-600">{project.description}</p>
        </div>
        <div
          className="flex w-full justify-between items-center"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(75px)",
          }}
        >
          <div
            className="flex items-center flex-wrap gap-1"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {project.techStack.map((tech, index) => (
              <div key={`tech-stack-${index}`} className="text-gray-600">
                {tech}
              </div>
            ))}
          </div>
          <span className="text-gray-600 group-hover:text-sky-700 flex gap-2 items-center flex-shrink-0 transition-all">
            View <MoveUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
