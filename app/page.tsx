import Hero from "@/sections/Hero";
import VoxCraftFeature from "@/sections/VoxCraftFeature";
import About from "@/sections/About";
import dynamic from "next/dynamic";

const Experience = dynamic(() => import("@/sections/Experience"));
const Projects = dynamic(() => import("@/sections/Projects"));
const YouTubeFeed = dynamic(() => import("@/components/sections/YouTubeFeed"));
const Contact = dynamic(() => import("@/sections/Contact"));

export default function Home() {
  return (
    <>
      <Hero />
      <VoxCraftFeature />
      <About />
      <Experience />
      <Projects />
      <YouTubeFeed />
      <Contact />
      <div className="h-20" /> {/* Footer Spacer */}
    </>
  );
}
