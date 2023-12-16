import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect once the component is mounted
    setIsVisible(true);
  }, []);

  const linkOnClick = (e) => {
    e.preventDefault();
    const target = e.currentTarget;

    // Remove the class immediately
    target.classList.remove("hover:scale-125");

    // Add the class after a delay
    setTimeout(() => {
      target.classList.add("hover:scale-125");
      window.open(target.href, "_blank");
    }, 300);
  };

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
          <span className="text-purple-600 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-black">
            Web
          </span>
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
          <button className="hoverable text-white p-3 rounded-md hover:bg-blue-100/30 hover:border hover:border-violet-600 hover:text-violet-600 bg-violet-600 max-lg:mx-auto border dark:border-purple-800 dark:bg-purple-600 dark:hover:bg-gray-950">
            Get In Touch
          </button>
        </Link>
      </div>
      <div className="flex justify-center gap-4 mt-10">
        <a
          href="https://www.linkedin.com/in/aung-oo-khant/"
          target="_blank"
          rel="noreferrer"
          className="hoverable text-blue-900 hover:scale-125 transition-transform duration-300 ease-in-out"
          onClick={(e) => linkOnClick(e)}
        >
          <LinkedInIcon style={{ fontSize: "50px" }} />
        </a>
        <a
          href="https://www.facebook.com/aungookhant.aung"
          target="_blank"
          rel="noreferrer"
          className="hoverable text-blue-700 hover:scale-125 transition-transform duration-300 ease-in-out"
          onClick={(e) => linkOnClick(e)}
        >
          <FacebookIcon style={{ fontSize: "50px" }} />
        </a>
        <a
          href="https://github.com/aok207"
          target="_blank"
          rel="noreferrer"
          className="hoverable hover:scale-125 transition-transform duration-300 ease-in-out dark:text-white"
          onClick={(e) => linkOnClick(e)}
        >
          <GitHubIcon style={{ fontSize: "50px" }} />
        </a>
      </div>
      <div className="border w-fit border-purple-800 rounded-full flex items-center justify-center mt-5 hover:cursor-pointer hoverable">
        <Link to="skills" spy={true} smooth={true} offset={-70} duration={500}>
          <ArrowDownwardIcon
            className="animate-bounce mb-2 mt-4 text-purple-700"
            style={{ fontSize: "30px" }}
          />
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
