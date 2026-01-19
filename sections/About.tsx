"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import InfiniteSkills from "@/components/ui/InfiniteSkills";
import { tools } from "@/data/skills";

export default function About() {
    return (
        <section className="py-16 md:py-24 relative z-30" id="about">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <SectionHeading
                    title="About"
                    subtitle="Background and what drives my work"
                    className="mb-16"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Text */}
                    <div className="space-y-8">
                        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                            Designing intuitive experiences <br />
                            <span className="text-white/50">across web and mobile.</span>
                        </h3>

                        <div className="space-y-6 text-lg text-white/60 leading-relaxed text-justify">
                            <p>
                                I’m <span className="text-white font-medium">Nirav Lakhani</span>, a UI/UX Designer with hands-on experience designing user-centric web and mobile products. Since November 2023, I’ve worked as a freelance designer, collaborating with clients across industries like Health, Tech, Real Estate, and Education delivering intuitive interfaces and interactive prototypes.
                            </p>
                            <p>
                                My work focuses on clean, accessible, and visually consistent design grounded in strong UX fundamentals. I’ve designed <span className="text-white font-medium">10+ interfaces and prototypes</span>, improving usability, engagement, and overall product experience. I work primarily with Figma and Adobe XD, and enjoy collaborating closely with teams to turn ideas into impactful digital experiences.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Technical Arsenal Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
                    >
                        {/* Subtle background glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

                        <h4 className="text-sm font-mono text-white/40 uppercase tracking-widest mb-8">
                            Technical Arsenal
                        </h4>

                        <div className="flex flex-wrap gap-3">
                            {tools.map((skill, i) => {
                                // Dynamic color style for hover
                                const hoverStyle = {
                                    "--skill-color": skill.color,
                                } as React.CSSProperties;

                                return (
                                    <div
                                        key={i}
                                        style={hoverStyle}
                                        className="group relative flex items-center gap-2 px-4 py-2 text-sm text-white/80 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-[var(--skill-color)] hover:text-[var(--skill-color)] hover:shadow-[0_0_15px_var(--skill-color)] transition-all duration-300 cursor-default"
                                    >
                                        <div className="w-4 h-4 flex items-center justify-center transition-colors group-hover:text-[var(--skill-color)]">
                                            {/* Handle SimpleIcons (object with svg) vs Lucide Icons (component) */}
                                            {/* @ts-ignore */}
                                            {skill.icon.svg ? (
                                                <div
                                                    // @ts-ignore
                                                    dangerouslySetInnerHTML={{ __html: skill.icon.svg }}
                                                    className="w-full h-full fill-current"
                                                />
                                            ) : (
                                                // @ts-ignore
                                                <skill.icon className="w-full h-full" />
                                            )}
                                        </div>
                                        <span>{skill.name}</span>

                                        {/* Glow effect */}
                                        <div className="absolute inset-0 rounded-full bg-[var(--skill-color)] opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300" />
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
