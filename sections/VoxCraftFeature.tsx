"use client";

import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function VoxCraftFeature() {
    // 3D Tilt effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { damping: 30, stiffness: 100 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { damping: 30, stiffness: 100 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;
        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;
        mouseX.set(xPct);
        mouseY.set(yPct);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            {/* Subtle light background glow instead of heavy colors */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-purple/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
                    {/* Content Left */}
                    <div className="w-full lg:w-5/12 flex flex-col items-start z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 font-mono text-xs mb-6 backdrop-blur-md"
                        >
                            <Sparkles className="w-3.5 h-3.5 text-cyber-purple" />
                            <span>Featured Project</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight"
                        >
                            Currently building <br/>
                            <span className="text-white">VoxCraft</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-white/60 text-base md:text-lg font-body leading-relaxed max-w-lg"
                        >
                            I&apos;m building VoxCraft to answer a simple question: <strong className="text-white/90 font-medium">why is designing still so complicated?</strong>
                            <br /><br />
                            It bridges the gap between ideas and execution by letting you describe what you want in natural language (English, Hindi, or Gujarati), instantly generating clean, responsive React interfaces.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-8 flex flex-wrap gap-4"
                        >
                            <Link href="https://voxcraft-one.vercel.app/" target="_blank">
                                <MagneticButton className="bg-white/10 text-white border border-white/20 hover:bg-white/20 font-medium px-6 py-3 rounded-lg transition-colors">
                                    Try Beta Version <ArrowUpRight className="ml-2 w-4 h-4 inline" />
                                </MagneticButton>
                            </Link>
                            <Link href="/voxcraft">
                                <MagneticButton className="bg-transparent text-white border border-transparent hover:border-white/10 font-medium px-6 py-3 rounded-lg transition-colors">
                                    Read Case Study
                                </MagneticButton>
                            </Link>
                        </motion.div>
                    </div>

                    {/* 3D Mockup Right */}
                    <div className="w-full lg:w-7/12 flex justify-center lg:justify-end" style={{ perspective: "1000px" }}>
                        <motion.div
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d",
                            }}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            className="relative w-full max-w-[650px] aspect-[16/10] rounded-xl cursor-crosshair group z-10"
                        >
                            {/* Layer 2: Device Frame */}
                            <div 
                                style={{ transform: "translateZ(0px)" }}
                                className="absolute inset-0 rounded-xl bg-[#0f1115]/80 border border-white/10 shadow-2xl p-1.5 backdrop-blur-sm"
                            >
                                {/* Browser Dots */}
                                <div className="flex gap-1.5 mb-2 px-2 pt-1">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
                                </div>
                                {/* Image Container */}
                                <div className="relative w-full h-[calc(100%-20px)] rounded-lg overflow-hidden bg-black border border-white/5">
                                    <Image
                                        src="/voxcraft.png"
                                        alt="VoxCraft Interface"
                                        fill
                                        className="object-cover object-top opacity-90"
                                        unoptimized
                                    />
                                    {/* Overlay Gradient for a sleek fade */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115]/50 via-transparent to-transparent pointer-events-none" />
                                </div>
                            </div>

                            {/* Floating Element 1 */}
                            <motion.div 
                                style={{ transform: "translateZ(80px)" }}
                                className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-[#0f1115]/80 border border-white/10 backdrop-blur-xl shadow-2xl flex items-center gap-3"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                    <Sparkles className="text-white/80 w-5 h-5" />
                                </div>
                                <div>
                                    <div className="text-[10px] text-white/50 font-mono uppercase tracking-wider mb-0.5">Status</div>
                                    <div className="text-sm font-medium text-white/90">Live Beta Version</div>
                                </div>
                            </motion.div>

                            {/* Floating Element 2 */}
                            <motion.div 
                                style={{ transform: "translateZ(60px)" }}
                                className="absolute -top-4 -right-4 px-4 py-2.5 rounded-lg bg-[#0f1115]/90 border border-white/10 backdrop-blur-md shadow-xl flex items-center gap-2.5"
                            >
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <div className="text-xs font-medium text-white/80">v1.0 Online</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
