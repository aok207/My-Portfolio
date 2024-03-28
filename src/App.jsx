import React, { useState } from "react";
import { Suspense } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Navbar = React.lazy(() => import("./components/Navbar"));
const HeroSection = React.lazy(() => import("./components/HeroSection"));
const MySkills = React.lazy(() => import("./components/MySkills"));
const Projects = React.lazy(() => import("./components/Projects"));
const AboutMe = React.lazy(() => import("./components/AboutMe"));
const ContactMe = React.lazy(() => import("./components/ContactMe"));
const CursorFollow = React.lazy(() => import("./components/CursorFollow"));

const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <span className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-purple-600" />
  </div>
);

function App() {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [isDarkMode, setIsDarkMode] = useState(getCurrentTheme());

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Suspense fallback={Loading()}>
      <main className={isDarkMode ? "dark" : null}>
        <Navbar />
        <HeroSection />
        <MySkills />
        <Projects />
        <AboutMe />
        <ContactMe />
        <CursorFollow />
        <button
          className="hoverable fixed w-16 h-16 right-16 bottom-16 bg-neutral-900 text-white rounded-full hover:scale-125 transition-all duration-200 ease-in-out active:scale-100 dark:bg-neutral-100 dark:text-black max-md:right-5 max-md:bottom-10"
          onClick={toggleDarkMode}
        >
          {!isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
      </main>
    </Suspense>
  );
}

export default App;
