import Hero from "@/sections/Hero";
import About from "@/sections/About";
import dynamic from "next/dynamic";

const Experience = dynamic(() => import("@/sections/Experience"));
const Projects = dynamic(() => import("@/sections/Projects"));
const ClientLogos = dynamic(() => import("@/components/ui/ClientLogos"));
const YouTubeFeed = dynamic(() => import("@/components/sections/YouTubeFeed"));
const Contact = dynamic(() => import("@/sections/Contact"));

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <ClientLogos />
      <YouTubeFeed />
      <Contact />
      <div className="h-20" /> {/* Footer Spacer */}
    </>
  );
}
