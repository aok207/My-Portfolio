import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "./Button";
import generateText from "../utils/autoTextGenerator";

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const arrowRef = useRef();
  const typedTextRef = useRef();

  useEffect(() => {
    // Trigger the fade-in effect once the component is mounted
    setIsVisible(true);

    // Auto Typing Text
    generateText(typedTextRef.current);
  }, []);

  // Arrow fade in effect
  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollY);
      if (window.scrollY >= 500) {
        arrowRef.current.classList.remove("opacity-100");
        arrowRef.current.classList.add("opacity-0");
      } else {
        arrowRef.current.classList.remove("opacity-0");
        arrowRef.current.classList.add("opacity-100");
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className={`flex flex-col items-center justify-center px-20 py-28 bg-blue-100/30 max-lg:text-center max-lg:px-3 transition-opacity duration-1000 ease-in-out dark:bg-gray-950 ${
        isVisible === true ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="lg:max-[1026px]:pr-32 lg:w-2/5 max-lg:pr-0 text-center">
        <p className="font-mono font-bold text-2xl mb-5 dark:text-slate-300">
          Hey! I&apos;m Aung Oo Khant.
        </p>
        <h1 className="text-6xl lg:max-[1026px]:text-5xl font-bold mb-5 max-sm:text-4xl dark:text-slate-500">
          <span
            className="text-purple-600 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black"
            ref={typedTextRef}
          ></span>
          <br />
          Developer
        </h1>
        <p className="tracking-wide leading-loose mb-5 max-lg:mx-20 dark:text-white">
          Welcome to my portfolio. I&apos;m Aung Oo Khant, a web developer
          showcasing my work. Explore my projects to see how I bring
          functionality and creativity together. Let&apos;s connect and discuss
          your digital needs.
        </p>

        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
          <Button text="Get In Touch" className="hoverable max-lg:mx-auto" />
        </Link>
      </div>
      <div className="flex justify-center gap-4 mt-10">
        <a
          href="https://www.linkedin.com/in/aung-oo-khant/"
          target="_blank"
          rel="noreferrer"
          className="hoverable text-blue-900 hover:scale-125 active:scale-100 transition-transform duration-150 ease-in-out"
        >
          <LinkedInIcon style={{ fontSize: "50px" }} />
        </a>
        <a
          href="https://www.facebook.com/aungookhant.aung"
          target="_blank"
          rel="noreferrer"
          className="hoverable text-blue-700 hover:scale-125 transition-transform duration-150 ease-in-out active:scale-100"
        >
          <FacebookIcon style={{ fontSize: "50px" }} />
        </a>
        <a
          href="https://github.com/aok207"
          target="_blank"
          rel="noreferrer"
          className="hoverable hover:scale-125 transition-transform duration-150 ease-in-out dark:text-white active:scale-100"
        >
          <GitHubIcon style={{ fontSize: "50px" }} />
        </a>
      </div>
      <Link to="skills" spy={true} smooth={true} offset={-70} duration={500}>
        <div
          className="border w-[45px] h-[45px] relative border-purple-800 rounded-full mt-10 hover:cursor-pointer hoverable before:content-[''] before:absolute before:top-[13px] before:left-[15px] before:w-[12px] before:h-[12px] before:border-b-2 before:border-b-purple-800 before:border-l-2 before:border-l-purple-800 before:transform before:-rotate-45 animate-bounce transition-all duration-300 ease-in"
          ref={arrowRef}
        ></div>
      </Link>
    </section>
  );
}

export default HeroSection;
