"use client";

import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

// Interactive 3D Image Component
const TiltImage = ({ src, alt }: { src: string; alt: string }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { damping: 30, stiffness: 100 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { damping: 30, stiffness: 100 });

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
        <div style={{ perspective: "1200px" }} className="w-full">
            <motion.div
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative w-full rounded-2xl p-2 bg-[#0f1115] border border-white/10 shadow-2xl hover:border-cyber-purple/30 transition-colors duration-300 group"
            >
                {/* Subtle purple glow ring on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_40px_rgba(168,85,247,0.08)]" />
                {/* Image at its natural height — no crop, no stretch, no blur */}
                <img src={src} alt={alt} className="w-full h-auto rounded-xl border border-white/5 block" />
            </motion.div>
        </div>
    );
};

export default function VoxCraftCaseStudy() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
    };

    return (
        <article className="relative max-w-4xl mx-auto px-4 md:px-8 z-10">
            {/* Background elements to match the site theme */}
            <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-cyber-purple/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[-1]" />
            <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 translate-y-1/2 z-[-1]" />
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[-2]" />

            {/* Header / Hero */}
            <header className="mb-20">
                <Link href="/" className="inline-flex items-center text-white/50 hover:text-white mb-12 transition-colors group">
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyber-purple/10 border border-cyber-purple/20 text-cyber-purple font-mono text-sm mb-8 w-fit backdrop-blur-md">
                        <Sparkles className="w-4 h-4" />
                        <span>Featured Project</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                        VoxCraft <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-purple-400">
                            Say it. We design it.
                        </span>
                    </h1>
                </motion.div>
            </header>

            {/* Content Body */}
            <div className="font-body space-y-16 text-white/80 text-lg leading-relaxed">
                
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">The Idea</h2>
                    <p className="mb-4">
                        I started building VoxCraft because of a simple question: why is designing still so complicated?
                    </p>
                    <p className="mb-4">
                        Most people have great ideas, but actually turning those ideas into screens takes a ton of effort. You either have to spend weeks learning Figma, or you have to pay someone else to do it. I wanted to close that gap.
                    </p>
                    <p className="mb-8">
                        Instead of clicking, dragging, and overthinking components... what if you could just say what you want, and the UI appears? That was the starting point.
                    </p>
                </motion.section>

                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">What I Set Out to Build</h2>
                    <p className="mb-4">
                        VoxCraft is an AI-powered UI generator that turns natural language into real, functional interfaces. 
                    </p>
                    <p className="mb-4">
                        The goal was straightforward: let users speak or type an idea, give them a structured UI instantly, and make sure it&apos;s actually usable—not just a pretty concept.
                    </p>
                </motion.section>

                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Speech / Text → UI</h2>
                    <p className="mb-4">
                        You can literally just describe your idea using voice or text. VoxCraft takes that prompt, supports multiple languages (English, Hindi, and Gujarati), and spits out clean HTML and Tailwind CSS.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                        <div className="space-y-3">
                            <TiltImage src="/English.png" alt="English UI generation" />
                            <p className="text-sm text-center text-white/50 font-mono">English Prompt</p>
                        </div>
                        <div className="space-y-3">
                            <TiltImage src="/Hindi.png" alt="Hindi UI generation" />
                            <p className="text-sm text-center text-white/50 font-mono">Hindi Prompt</p>
                        </div>
                        <div className="space-y-3">
                            <TiltImage src="/Gujarati.png" alt="Gujarati UI generation" />
                            <p className="text-sm text-center text-white/50 font-mono">Gujarati Prompt</p>
                        </div>
                    </div>
                </motion.section>

                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">AI Integration</h2>
                    <p className="mb-4">
                        Instead of reinventing the wheel with a custom model, I hooked it directly into Anthropic&apos;s Claude and Google&apos;s Gemini. Users can choose their preferred provider and drop in their own API key. It keeps things flexible and scales easily.
                    </p>

                    <div className="w-[100vw] relative left-1/2 -translate-x-1/2 max-w-5xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 my-10">
                        <div className="space-y-4">
                            <TiltImage src="/Claude API.png" alt="Claude API screen" />
                            <p className="text-sm text-center text-white/50 font-mono">Claude API Integration</p>
                        </div>
                        <div className="space-y-4">
                            <TiltImage src="/Gemini API.png" alt="Gemini API screen" />
                            <p className="text-sm text-center text-white/50 font-mono">Gemini API Integration</p>
                        </div>
                    </div>
                </motion.section>

                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Brand Kit System</h2>
                    <p className="mb-4">
                        One major problem with AI-generated UI is that it lacks consistency. To fix this, I built a Brand Kit system. You can define your colors, font styles, industry hints, and general design preferences upfront, so the AI knows exactly what your brand is supposed to look like.
                    </p>
                    
                    <div className="my-10">
                        <TiltImage src="/Brand kit.png" alt="Brand Kit UI" />
                    </div>
                </motion.section>

                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Color Palette Control</h2>
                    <p className="mb-4">
                        Sometimes you just want to see options. I added a feature to let users instantly switch between pre-defined palettes (like Dark Green, Ocean Blue, Sunset) or create their own custom palette. It allows for super quick visual iterations without needing to regenerate the whole UI.
                    </p>

                    <div className="my-10">
                        <TiltImage src="/Color_Palette.png" alt="Color Palette" />
                    </div>
                </motion.section>

                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Redesign from Image or URL</h2>
                    <p className="mb-4">
                        I also wanted to handle inspiration. You can upload a screenshot of an app you like, and the AI will redesign it. Or you can paste a URL, and VoxCraft will recreate the UI. It&apos;s a huge timesaver.
                    </p>

                    <div className="w-[100vw] relative left-1/2 -translate-x-1/2 max-w-5xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 my-10">
                        <div className="space-y-4">
                            <TiltImage src="/Upload Image.png" alt="Upload Image" />
                            <p className="text-sm text-center text-white/50 font-mono">Upload Image</p>
                        </div>
                        <div className="space-y-4">
                            <TiltImage src="/URL Capture.png" alt="URL Capture" />
                            <p className="text-sm text-center text-white/50 font-mono">URL Capture</p>
                        </div>
                    </div>
                </motion.section>

                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Live Preview & Export</h2>
                    <p className="mb-4">
                        Once your UI is generated, you can preview it live, edit the code directly, export it as HTML, or generate a link to share it. I wanted this to feel like a real working environment, not just a text box that spits out code.
                    </p>
                </motion.section>

                <hr className="border-white/10" />

                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">The Challenges</h2>
                    <p className="mb-4">
                        Building this honestly wasn&apos;t straightforward. Early on, the AI responses were super inconsistent. The layout structure broke constantly, and trying to maintain design quality when switching between languages was really tricky.
                    </p>
                    <p className="mb-4">
                        I spent a lot of time refining prompts, adding strict constraints, and prioritizing structural integrity over getting &quot;creative&quot; with the code. It&apos;s something I&apos;m still improving every day.
                    </p>
                </motion.section>

                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Thinking in Multiple Languages</h2>
                    <p className="mb-4">
                        One thing I realized early on is that people think in their native language. 
                    </p>
                    <p className="mb-4">
                        So I made sure to test this heavily across English, Hindi, and Gujarati. The goal was simple: the same idea should yield the same quality output, regardless of the language you speak it in. It&apos;s not 100% perfect yet, but for a beta, it&apos;s working really well.
                    </p>
                </motion.section>

                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                    <h2 className="text-3xl font-display font-bold text-white mb-6">Where it is now, and what&apos;s next</h2>
                    <p className="mb-4">
                        Right now, VoxCraft is in beta. It works, and you can absolutely generate real UI with it.
                    </p>
                    <p className="mb-4">
                        Moving forward, I&apos;m planning to add much better layout controls, component-level editing so you can tweak specific parts, and faster iteration cycles. I&apos;m still figuring out exactly how far this interaction can go, but I&apos;m building it step by step.
                    </p>
                </motion.section>

                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="text-center pt-12 pb-24">
                    <p className="text-xl mb-6">This project isn&apos;t just about generating UI.</p>
                    <p className="text-2xl font-medium text-white mb-12">It&apos;s about changing how people start building.</p>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
                        <div className="text-white/40 line-through decoration-white/20 text-lg">
                            &quot;Open Figma and think&quot;
                        </div>
                        <div className="text-cyber-purple hidden md:block">→</div>
                        <div className="text-cyber-purple font-medium text-xl bg-cyber-purple/10 px-6 py-3 rounded-xl border border-cyber-purple/20">
                            &quot;Say it and Design it&quot;
                        </div>
                    </div>

                    <Link href="https://voxcraft-one.vercel.app/" target="_blank" className="inline-block">
                        <MagneticButton className="bg-cyber-purple text-white hover:bg-cyber-purple/90 font-semibold px-10 py-4 text-lg rounded-xl shadow-[0_0_40px_rgba(168,85,247,0.3)] hover:shadow-[0_0_60px_rgba(168,85,247,0.5)] transition-shadow">
                            Try VoxCraft Now <ArrowUpRight className="ml-2 w-5 h-5 inline" />
                        </MagneticButton>
                    </Link>
                </motion.section>

            </div>
        </article>
    );
}
