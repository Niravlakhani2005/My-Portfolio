import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import ClientLogos from "@/components/ui/ClientLogos";
import YouTubeFeed from "@/components/sections/YouTubeFeed";
import Contact from "@/sections/Contact";

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
