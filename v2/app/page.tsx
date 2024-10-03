import Hero from "@/components/Hero";
import React from "react";

const Home = () => {
  return (
    <main className="h-[80vh] w-full bg-background dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <Hero />
    </main>
  );
};

export default Home;
