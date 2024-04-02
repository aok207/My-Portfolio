/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "../css/Navbar.css";

const NavItem = ({ to, label, activeLink, onClick }) => (
  <Link
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
    // The hoverable class is to change the size of the small circle that follows the circle
    className={`hoverable mx-3 no-underline cursor-pointer select-none ${
      activeLink === to
        ? "text-purple-700 dark:text-gray-300"
        : "text-gray-500 hover:text-black dark:hover:text-gray-300"
    }`}
    onClick={() => onClick(to)}
  >
    {label}
  </Link>
);

const HamburgerButton = ({ onClick, sidebarOpened }) => (
  <button
    id="hamburger-btn"
    onClick={onClick}
    className={`hoverable hidden max-md:block z-50 ${
      sidebarOpened ? "open" : ""
    }`}
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
  const [sidebarOpened, setSidebarOpened] = useState(false);
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

    const handleSidebarClickedAway = (e) => {
      if (e.target.id !== "hamburger-btn") {
        setSidebarOpened(false);
      }
    };

    // Handle sidebar click away;
    document.addEventListener("click", handleSidebarClickedAway);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleSidebarClickedAway);
    };
  }, []);

  const hamburgerOnClick = () => {
    setSidebarOpened((prevState) => !prevState);
  };

  document.querySelectorAll(".sidebar-links").forEach((link) => {
    link.addEventListener("click", () => {
      setSidebarOpened(false);
    });
  });

  // For fade in effect
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect once the component is mounted
    setIsVisible(true);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between py-3 px-10 shadow-md fixed w-screen top-0 max-md:px-3 z-50 transition-opacity duration-1000 ease-in-out backdrop-blur-lg bg-transparent ${
        isVisible === true ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="hoverable flex items-center hover:cursor-pointer select-none ml-5 ">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="hoverable flex items-center"
        >
          <img src="./Logo.png" alt="logo" className="mr-3 w-10 max-md:w-8" />
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
        <button
          className="hoverable border-purple-700 border text-purple-800 bg-white hover:bg-purple-600 hover:text-white rounded-md p-2 max-md:hidden dark:text-purple-500 dark:bg-gray-950 dark:hover:bg-purple-600 dark:hover:text-white"
          type="button"
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact Me
          </Link>
        </button>

        <HamburgerButton
          onClick={hamburgerOnClick}
          sidebarOpened={sidebarOpened}
        />
      </div>

      <ul
        id="menu"
        className={`fixed top-0 leading-tight font-semibold shadow-md h-screen z-49 bg-white dark:bg-black text-2xl flex flex-col justify-center gap-10 ${
          sidebarOpened ? "hide--sidebar" : ""
        }`}
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
