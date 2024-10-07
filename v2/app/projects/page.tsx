import Heading from "@/components/Heading";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constants";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects | Aung Oo Khant",
};

const Projects = () => {
  return (
    <div className="flex flex-col gap-8 my-5 bg-dot-white/[0.4] relative">
      <Heading className="z-[99]">Projects</Heading>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="flex gap-7 flex-wrap w-full justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
