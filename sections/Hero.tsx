"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowRight, Download, FileText } from "lucide-react";
import Link from "next/link";

const CREDIBILITY_CHIPS = ["User Research", "Wireframing", "Design Systems"];

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col justify-center z-30 overflow-hidden pt-20">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyber-purple/20 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-electric-blue/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-wrap gap-3 mb-6"
                    >
                        {CREDIBILITY_CHIPS.map((chip, i) => (
                            <span key={i} className="px-3 py-1 text-xs font-mono text-white/80 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
                                {chip}
                            </span>
                        ))}
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="font-display text-5xl md:text-8xl font-bold tracking-tight text-white mb-6 relative"
                        style={{ textShadow: "0 4px 30px rgba(255,255,255,0.1)" }}
                    >
                        Nirav Lakhani
                        <br />
                        <span className="text-3xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-blue opacity-90 block mt-2">
                            UI/UX Designer
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="max-w-2xl text-lg md:text-xl text-white/60 leading-relaxed font-body"
                    >
                        I design clean, user-friendly experiences with research, wireframes, and high-fidelity UI.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="mt-10 flex flex-wrap gap-4"
                    >
                        <Link href="#projects">
                            <MagneticButton className="group bg-white text-black hover:bg-white/90 hover:border-transparent font-bold">
                                View Case Studies
                                <ArrowRight className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform" />
                            </MagneticButton>
                        </Link>
                        <Link href="/Nirav_Lakhani_Resume.pdf" target="_blank">
                            <MagneticButton className="flex items-center gap-2">
                                <Download className="w-4 h-4" /> Download Resume
                            </MagneticButton>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
