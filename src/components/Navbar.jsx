/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

const NavItem = ({ to, label, activeLink, onClick }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    // The hoverable class is to change the size of the small circle that follows the circle
    className={`hoverable mx-3 no-underline cursor-pointer select-none ${
      activeLink === to ? "text-purple-700 dark:text-gray-300" : "text-gray-500 hover:text-black dark:hover:text-gray-300"
    }`}
    onClick={() => onClick(to)}
  >
    {label}
  </Link>
);

const HamburgerButton = ({ onClick }) => (
  <button
    id="hamburger-btn"
    onClick={onClick}
    className="hoverable hidden max-md:block z-50"
  >
    <span className="bg-black dark:bg-white"></span>
    <span className="bg-black dark:bg-white"></span>
    <span className="bg-black dark:bg-white"></span>
  </button>
);

const SidebarItem = ({ to, label, activeLink, onClick }) => (
  <li className="sidebar-links">
    <NavItem to={to} label={label} activeLink={activeLink} onClick={onClick} />
  </li>
);

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const sections = ["home", "skills", "projects", "about"];

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const offsets = sections.map((section) => ({
      section,
      offset: document.getElementById(section).offsetTop - 76,
    }));

    for (let i = 0; i < offsets.length - 1; i++) {
      const current = offsets[i];
      const next = offsets[i + 1];

      if (scrollY >= current.offset && scrollY < next.offset) {
        setActiveLink(current.section);
        break;
      }
    }

    // Check for the last section
    const lastSection = offsets[offsets.length - 1];
    if (scrollY >= lastSection.offset) {
      setActiveLink(lastSection.section);
    }
  };

  useEffect(() => {
    // Add scroll listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hamburgerOnClick = () => {
    document.getElementById("hamburger-btn").classList.toggle("open");
    document.getElementById("menu").classList.toggle("hide--sidebar");
  };

  document.querySelectorAll(".sidebar-links").forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("hamburger-btn").classList.remove("open");
      document.getElementById("menu").classList.remove("hide--sidebar");
    });
  });


  // For fade in effect
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect once the component is mounted
    setIsVisible(true);
  }, []);

  return (
    <nav className={`flex items-center justify-between py-3 px-10 shadow-md sticky top-0 bg-white max-md:px-3 z-50 transition-opacity duration-1000 ease-in-out ${isVisible === true ? "opacity-100" : "opacity-0"} dark:bg-gray-950`}>
      <div className="hoverable flex items-center hover:cursor-pointer select-none ml-5 ">
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="hoverable flex items-center">
          <img
            src="./Logo.png"
            alt=""
            className="mr-3 w-10 max-md:w-8"
          />
          <h4 className="hoverable text-gray-700 dark:text-indigo-300 font-mono max-md:text-sm">
            Aung Oo Khant
          </h4>
        </Link>
      </div>
      <div className="max-md:hidden leading-tight font-semibold">
        {sections.map((section) => (
          <NavItem
            key={section}
            to={section}
            label={section.charAt(0).toUpperCase() + section.slice(1)}
            activeLink={activeLink}
            onClick={handleLinkClick}
          />
        ))}
      </div>
      <div className="mr-5 flex">
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
          <button
            className="hoverable border-purple-700 border text-purple-800 bg-white hover:bg-purple-600 hover:text-white rounded-md p-2 max-md:hidden dark:text-purple-500 dark:bg-gray-950 dark:hover:bg-purple-600 dark:hover:text-white"
            type="button"
          >
            Contact Me
          </button>
        </Link>
        <HamburgerButton onClick={hamburgerOnClick} />
      </div>

      <ul
        id="menu"
        className="fixed top-0 leading-tight font-semibold shadow-md h-screen z-49 bg-white dark:bg-black"
      >
        {sections.map((section) => (
          <SidebarItem
            key={section}
            to={section}
            label={section.charAt(0).toUpperCase() + section.slice(1)}
            activeLink={activeLink}
            onClick={handleLinkClick}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
