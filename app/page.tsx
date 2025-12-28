import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import ClientLogos from "@/components/ui/ClientLogos";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <ClientLogos />
      <Contact />
      <div className="h-20" /> {/* Footer Spacer */}
    </>
  );
}
