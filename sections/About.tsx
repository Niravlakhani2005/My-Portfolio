"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { tools } from "@/data/skills";
import { MapPin, Globe, Sparkles, MoveUpRight, Hexagon } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

export default function About() {
    return (
        <section className="py-24 md:py-32 relative z-30 overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <SectionHeading
                    title="About"
                    subtitle="Background and what drives my work"
                    className="mb-16 md:mb-20"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {/* ─── Intro Card (Spans 2 columns) ─── */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                        className="md:col-span-2 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 relative group overflow-hidden"
                    >
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-4xl font-display font-bold text-white leading-tight mb-4">
                                Transforming complex problems <br />
                                <span className="text-white/40">into seamless digital elegance.</span>
                            </h3>

                            <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl font-body text-justify">
                                I’m <span className="text-white font-medium">Nirav Lakhani</span>, a UI/UX Designer dedicated to crafting user-centric products. My work focuses on clean, accessible, and visually consistent design grounded in strong UX fundamentals to turn complex problems into impactful digital experiences.
                            </p>
                        </div>

                        {/* Decorative Icon */}
                        <Sparkles className="absolute -bottom-6 -right-6 w-48 h-48 text-white/[0.03] rotate-12 group-hover:scale-110 transition-transform duration-700" />
                    </motion.div>

                    {/* ─── Location / Status Card ─── */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                        className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 relative group overflow-hidden flex flex-col justify-between min-h-[240px]"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="relative z-10">
                            {/* Radar Ping Animation */}
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative">
                                <MapPin className="w-4 h-4 text-cyan-400 z-10" />
                                <div className="absolute inset-0 rounded-xl border border-cyan-400/50 animate-ping opacity-20" />
                            </div>

                            <h4 className="text-xl font-display font-bold text-white mb-1">Based in<br />Gujarat, India</h4>
                            <p className="text-white/50 flex items-center gap-2 mt-3 text-xs md:text-sm">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                Available globally for freelance
                            </p>
                        </div>
                        <Globe className="absolute -bottom-10 -right-10 w-48 h-48 text-white/[0.03] group-hover:-rotate-12 transition-transform duration-1000" />
                    </motion.div>

                    {/* ─── Impact / Stats Card ─── */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                        className="p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 relative group overflow-hidden flex flex-col justify-between min-h-[240px]"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="flex items-start justify-between mb-4">
                                <h1 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tighter">
                                    15<span className="text-fuchsia-400">+</span>
                                </h1>
                                <MoveUpRight className="w-5 h-5 text-white/20 group-hover:text-white transition-colors duration-300" />
                            </div>

                            <h4 className="text-lg font-display font-bold text-white mb-2">Projects Delivered</h4>
                            <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                                Collaborating with clients across Health, Tech, Real Estate, and Education to deliver interfaces that improve usability and engagement.
                            </p>
                        </div>
                        <Hexagon className="absolute -bottom-12 -left-12 w-56 h-56 text-white/[0.02] group-hover:rotate-45 transition-transform duration-1000" />
                    </motion.div>

                    {/* ─── Technical Arsenal Card (Spans 2 columns) ─── */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                        className="md:col-span-2 p-6 md:p-8 rounded-3xl bg-white/5 border border-white/10 relative group overflow-hidden"
                    >
                        <h4 className="text-xs font-mono text-white/40 uppercase tracking-widest mb-6 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-white/20" />
                            Technical Arsenal
                        </h4>

                        <div className="flex flex-wrap gap-3 relative z-10">
                            {tools.map((skill, i) => {
                                const hoverStyle = { "--skill-color": skill.color } as React.CSSProperties;

                                return (
                                    <div
                                        key={i}
                                        style={hoverStyle}
                                        className="group/skill relative flex items-center gap-2 px-4 py-2.5 text-sm md:text-base text-white/80 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-[var(--skill-color)] hover:text-[var(--skill-color)] transition-all duration-300 cursor-default"
                                    >
                                        <div className="w-4 h-4 md:w-5 md:h-5 flex items-center justify-center transition-colors group-hover/skill:text-[var(--skill-color)]">
                                            {/* @ts-expect-error: SVG existence check on union type */}
                                            {skill.icon.svg ? (
                                                <div
                                                    // @ts-expect-error: SVG string is safe from data source
                                                    dangerouslySetInnerHTML={{ __html: skill.icon.svg }}
                                                    className="w-full h-full fill-current"
                                                />
                                            ) : (
                                                // @ts-expect-error: Dynamic icon component usage
                                                <skill.icon className="w-full h-full" />
                                            )}
                                        </div>
                                        <span>{skill.name}</span>

                                        {/* Glow effect */}
                                        <div className="absolute inset-0 rounded-full bg-[var(--skill-color)] opacity-0 group-hover/skill:opacity-15 blur-md transition-opacity duration-300 pointer-events-none" />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
