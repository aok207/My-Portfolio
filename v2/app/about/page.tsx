import Heading from "@/components/Heading";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Aung Oo Khant",
};

const About = () => {
  return (
    <main className="my-8 flex flex-col gap-10 text-center lg:text-left">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 place-items-center">
        <div className="flex flex-col gap-5">
          <Heading>Hey there!</Heading>

          <p className="text-gray-400 leading-loose tracking-wide">
            I&apos;m Aung Oo Khant, a junior developer with a passion for all
            things tech and problem-solving. While I enjoy working with
            React.js, Next.js, and Node.js to create interactive web apps, my
            love for software engineering goes beyond just web development.
            Whether it&apos;s figuring out algorithms, building systems, or
            tackling new challenges, I thrive on solving problems.
          </p>
        </div>

        <div className="overflow-hidden rounded-md w-[240px] h-[240px] relative">
          <Image
            src="/logo.jpg"
            alt="my-image"
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <p className="text-gray-400 leading-loose tracking-wide">
        Outside of coding, you can usually catch me playing chess or gaming with
        my friends, and when I&apos;m in the mood to relax, I love watching
        anime. I&apos;m always down for new opportunities and collaborations, so
        feel free to hit me up if you want to chat about tech, gaming, anime, or
        anything else!
      </p>
    </main>
  );
};

export default About;
