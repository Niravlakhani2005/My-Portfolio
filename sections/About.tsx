"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import InfiniteSkills from "@/components/ui/InfiniteSkills";

export default function About() {
    return (
        <section className="py-20 relative z-30 bg-deep-space/50" id="about">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* About Me Block */}
                <div className="flex flex-col gap-12">
                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <SectionHeading
                            number="01"
                            title="About"
                            subtitle="Background and what drives my work"
                        />
                        <div className="space-y-4 text-white/70 leading-relaxed">
                            <p>
                                I’m a **UI/UX Designer** who enjoys shaping ideas into clear, intuitive digital experiences.
                            </p>
                            <p>
                                Since 2023, I’ve worked as a **freelance designer**, collaborating with real clients to design user flows, wireframes, and polished interfaces for web and mobile products.
                            </p>
                        </div>
                    </motion.div>

                    {/* Skills Ticker */}
                    <div className="w-full overflow-hidden">
                        <InfiniteSkills />
                    </div>
                </div>



            </div>
        </section>
    );
}
