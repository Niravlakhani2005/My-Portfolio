"use client";

import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Target, Zap, PenTool, Lightbulb, FlaskConical } from "lucide-react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

// ─── Front-Facing Web Frame (Manual Scroll) ──────────────────────────────────
function WebFrame({ src, alt, accentColor, tags, slug }: { src: string; alt: string; accentColor: string; tags: string[]; slug: string }) {
    return (
        <div className="w-full flex justify-center py-8 md:py-12">
            <div className="relative w-full max-w-[750px] group transition-all duration-500 hover:-translate-y-2">
                {/* Macbook Body */}
                <div 
                    className="relative rounded-t-2xl rounded-b-sm bg-[#1c1c1e] border border-white/20 border-b-0 shadow-2xl transition-all duration-500"
                    style={{ boxShadow: `0 30px 60px rgba(0,0,0,0.5), 0 0 50px ${accentColor}15` }}
                >
                    {/* Camera */}
                    <div className="flex justify-center pt-2 pb-1 relative z-20">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#000]" />
                    </div>
                    
                    {/* Browser Header */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#09090b] border-b border-white/5 relative z-20">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                        </div>
                        {/* URL Bar */}
                        <div className="flex-1 max-w-sm h-6 rounded-md bg-white/5 border border-white/5 flex items-center justify-center px-3 mx-auto">
                            <span className="text-[10px] font-mono text-white/40 tracking-wider">www.{slug}.com</span>
                        </div>
                        <div className="w-12" /> {/* Spacer to balance URL bar */}
                    </div>

                    {/* Scrollable Screen Area - Manual Scroll */}
                    <div className="aspect-[16/10] w-full overflow-y-auto overflow-x-hidden bg-black [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        <img src={src} alt={alt} className="w-full min-h-full object-cover object-top block" style={{ WebkitFontSmoothing: "antialiased" }} />
                    </div>
                </div>
                {/* Macbook Base line */}
                <div className="h-[8px] bg-gradient-to-b from-[#3a3a3c] to-[#1c1c1e] rounded-b-xl border border-white/10 border-t-0" />
                <div className="mx-auto w-[20%] h-[3px] bg-white/10 rounded-b-full shadow-md" />

                {/* Floating Tags (2D Float) */}
                <div 
                    className="absolute -right-6 top-16 px-4 py-2 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white font-display font-medium text-xs shadow-2xl flex items-center gap-2 pointer-events-none group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
                >
                    <span className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]" style={{ backgroundColor: accentColor }} />
                    {tags[0] || "Web Design"}
                </div>

                <div 
                    className="absolute -left-6 bottom-20 px-4 py-2 rounded-xl backdrop-blur-md bg-black/60 border border-white/10 text-white/80 font-mono text-xs shadow-2xl pointer-events-none group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500"
                >
                    {tags[1] || "UI/UX"}
                </div>
            </div>
        </div>
    );
}

// ─── Front-Facing Mobile Frame (Manual Scroll) ───────────────────────────────
function MobileFrame({ src, alt, accentColor, tags }: { src: string; alt: string; accentColor: string; tags: string[] }) {
    return (
        <div className="flex justify-center w-full py-8 md:py-12">
            <div className="relative w-full max-w-[280px] group transition-all duration-500 hover:-translate-y-2">
                {/* Phone Body */}
                <div
                    className="relative rounded-[40px] p-[8px] bg-[#111] border border-[#333] shadow-2xl transition-all duration-500"
                    style={{ boxShadow: `0 30px 60px rgba(0,0,0,0.5), 0 0 50px ${accentColor}15` }}
                >
                    {/* Buttons */}
                    <div className="absolute left-[-2px] top-[100px] w-[3px] h-[25px] bg-[#333] rounded-l-md" />
                    <div className="absolute left-[-2px] top-[135px] w-[3px] h-[25px] bg-[#333] rounded-l-md" />
                    <div className="absolute right-[-2px] top-[120px] w-[3px] h-[50px] bg-[#333] rounded-r-md" />

                    {/* Scrollable Screen Area - Manual Scroll */}
                    <div className="relative rounded-[32px] overflow-y-auto overflow-x-hidden bg-black aspect-[9/19.5] border border-[#222] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        <img src={src} alt={alt} className="w-full min-h-full object-cover object-top block" style={{ WebkitFontSmoothing: "antialiased" }} />
                    </div>
                    
                    {/* Dynamic Island */}
                    <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[80px] h-[24px] bg-black rounded-full shadow-md z-10 border border-white/5" />
                    
                    {/* Home Indicator */}
                    <div className="absolute bottom-[16px] left-1/2 -translate-x-1/2 w-[80px] h-[4px] bg-white/40 rounded-full z-10 pointer-events-none" />
                </div>

                {/* Floating Tags (2D Float) */}
                <div 
                    className="absolute -right-10 top-24 px-4 py-2 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white font-display font-medium text-xs shadow-2xl flex items-center gap-2 pointer-events-none group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500"
                >
                    <span className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)]" style={{ backgroundColor: accentColor }} />
                    {tags[0] || "Mobile App"}
                </div>

                <div 
                    className="absolute -left-10 bottom-28 px-4 py-2 rounded-xl backdrop-blur-md bg-black/60 border border-white/10 text-white/80 font-mono text-xs shadow-2xl pointer-events-none group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-500"
                >
                    {tags[1] || "UI/UX"}
                </div>
            </div>
        </div>
    );
}

// ─── Fade-up variant ──────────────────────────────────────────────────────────
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

// ─── Main component ───────────────────────────────────────────────────────────
export default function ProjectCaseStudy({ slug }: { slug: string }) {
    const project = projects.find((p) => p.slug === slug);
    if (!project) notFound();

    const accentColor = project.color;
    const accentStyle = { color: accentColor };
    const accentBg = { backgroundColor: `${accentColor}15`, borderColor: `${accentColor}35` };
    const isMobile = project.deviceType === "mobile";

    return (
        <article className="relative max-w-4xl mx-auto px-4 md:px-8 z-10">
            {/* Ambient glows */}
            <div className="fixed top-0 left-0 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[-1] opacity-15" style={{ backgroundColor: accentColor }} />
            <div className="fixed bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2 z-[-1] opacity-10" style={{ backgroundColor: accentColor }} />
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[-2]" />

            {/* Back */}
            <Link href="/#projects" className="inline-flex items-center text-white/50 hover:text-white mb-12 transition-colors group">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Work
            </Link>

            {/* ── Hero ─────────────────────────────────── */}
            <header className="mb-8 md:mb-12">
                <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-sm mb-8 backdrop-blur-md border"
                        style={{ ...accentBg, ...accentStyle }}
                    >
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: accentColor }} />
                        {isMobile ? "Mobile App Case Study" : "Web Design Case Study"}
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">{project.title}</h1>
                    <p className="text-xl md:text-2xl text-white/50 max-w-2xl font-body leading-relaxed text-justify">{project.subtitle}</p>
                </motion.div>
            </header>

            {/* ── Front-Facing Device Mockup ──────────────── */}
            <motion.div
                initial="hidden" animate="visible" variants={fadeUp}
                className="mb-12"
            >
                {isMobile ? (
                    <MobileFrame src={project.image} alt={project.title} accentColor={accentColor} tags={project.tags} />
                ) : (
                    <WebFrame src={project.image} alt={project.title} accentColor={accentColor} tags={project.tags} slug={project.slug} />
                )}
            </motion.div>

            <div className="font-body space-y-20 text-white/80 text-lg leading-relaxed">

                {/* ── Quick Stats (Editorial Rows) ──────────── */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
                    className="flex flex-col space-y-8 py-10 border-y border-white/10"
                >
                    {[
                        { icon: <Target className="w-4 h-4" />, label: "The Goal", value: project.goal },
                        { icon: <Zap className="w-4 h-4" />, label: "The Impact", value: project.impact },
                        { icon: <PenTool className="w-4 h-4" />, label: "My Role", value: project.role },
                    ].map(({ icon, label, value }) => (
                        <div key={label} className="flex flex-col md:flex-row md:items-start gap-3 md:gap-12 group">
                            <div className="w-full md:w-1/4 shrink-0 pt-1">
                                <div className="flex items-center gap-3" style={accentStyle}>
                                    {icon}
                                    <h3 className="font-mono text-xs uppercase tracking-[0.2em] font-medium">{label}</h3>
                                </div>
                            </div>
                            <div className="w-full md:w-3/4">
                                <p className="text-base md:text-lg text-white/80 leading-relaxed text-justify group-hover:text-white transition-colors duration-300">
                                    {value}
                                </p>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* ── Overview ─────────────────────────── */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">The Project</h2>
                    <p className="text-justify">{project.overview}</p>
                </motion.section>

                {/* ── Challenge ────────────────────────── */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
                    <div className="p-8 rounded-2xl border shadow-xl" style={accentBg}>
                        <div className="flex items-center gap-3 mb-4" style={accentStyle}>
                            <FlaskConical className="w-5 h-5" />
                            <h2 className="text-xl font-display font-bold">The Core Challenge</h2>
                        </div>
                        <p className="text-white/80 text-justify">{project.challenge}</p>
                    </div>
                </motion.section>

                {/* ── Process ──────────────────────────── */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
                    <h2 className="text-3xl font-display font-bold text-white mb-10">The Process</h2>
                    <div className="space-y-10">
                        {project.process.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="relative pl-10 border-l-2"
                                style={{ borderColor: `${accentColor}40` }}
                            >
                                <div className="absolute left-0 top-1.5 -translate-x-[9px] w-4 h-4 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]" style={{ backgroundColor: accentColor }} />
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-xs font-mono" style={{ ...accentStyle, opacity: 0.6 }}>0{i + 1}</span>
                                    <h3 className="text-xl font-display font-bold text-white">{step.title}</h3>
                                </div>
                                <p className="text-white/70 text-justify">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* ── Design Decisions ─────────────────── */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
                    <h2 className="text-3xl font-display font-bold text-white mb-8">Key Design Decisions</h2>
                    <div className="space-y-6">
                        {project.designDecisions.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shadow-xl"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center mt-0.5" style={{ backgroundColor: `${accentColor}20` }}>
                                        <Lightbulb className="w-4 h-4" style={accentStyle} />
                                    </div>
                                    <div>
                                        <h3 className="font-display font-bold text-white mb-2">{item.decision}</h3>
                                        <p className="text-white/60 text-base text-justify">{item.reason}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <hr className="border-white/10" />

                {/* ── Outcome ──────────────────────────── */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Outcome</h2>
                    <p>{project.outcome}</p>
                </motion.section>

                {/* ── Figma CTA ────────────────────────── */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}
                    className="text-center pt-12 pb-8"
                >
                    <p className="text-white/50 font-mono text-sm mb-4 uppercase tracking-widest">See it in full detail</p>
                    <p className="text-2xl font-display font-bold text-white mb-10">View the complete design on Figma</p>
                    <Link href={project.figmaLink} target="_blank" className="inline-block">
                        <MagneticButton
                            className="font-semibold px-10 py-4 text-base rounded-xl border-0"
                            style={{ backgroundColor: accentColor, color: "#fff", boxShadow: `0 0 40px ${accentColor}50` }}
                        >
                            Open in Figma <ArrowUpRight className="ml-2 w-5 h-5 inline" />
                        </MagneticButton>
                    </Link>
                </motion.section>

            </div>
        </article>
    );
}
