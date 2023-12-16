function AboutMe() {
  return (
    <section
      id="about"
      className="flex items-center gap-56 px-20 py-20 max-lg:block max-lg:text-center dark:bg-slate-900"
    >
      <div className="basis-1/2">
        <img
          src="./img/about-me.png"
          alt="About me"
          className="max-lg:mx-auto"
        />
      </div>
      <div className="basis-1/2 flex flex-col gap-10 max-lg:py-10">
        <h2 className="text-5xl font-semibold dark:text-slate-100">About Me</h2>
        <p className="antialiased text-lg font-medium tracking-wide leading-loose dark:text-slate-300">
          Hello, I&apos;m Aung Oo Khant, a 17-year-old web developer who
          stumbled upon programming during the lockdown. You can call me John if
          you want. With no prior knowledge, I began my journey by teaching
          myself Python through online resources like YouTube. Creating simple
          games with Pygame sparked my interest, and soon after, I discovered
          the CS50 course, solidifying my passion for coding. Transitioning to
          web development, I completed the CS50 Web course and am now expanding
          my skills in various web technologies. Currently, I&apos;m exploring
          entry-level opportunities in the field. Outside of coding, you&apos;ll
          find me unwinding with video games and downtime activities. Feel free
          to connect if you share similar interests or want to chat about
          anything tech-related. Looking forward to the journey ahead.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
