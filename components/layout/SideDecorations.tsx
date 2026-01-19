"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PenTool, Figma, Layout, Palette, MousePointer, Linkedin, Dribbble, Mail } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const TechIcon = ({ icon: Icon, label, delay, color }: { icon: React.ComponentType<{ className?: string }>; label: string; delay: number; color: string }) => (
    <motion.div
        className="relative group cursor-pointer"
        initial={{ y: 0 }}
        animate={{ y: [0, -12, 0] }} // Increased float range
        transition={{ duration: 5, delay, repeat: Infinity, ease: "easeInOut" }} // Slower, smoother float
    >
        <div className={cn(
            "p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-500",
            "hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
            "group-hover:scale-110"
        )}>
            <Icon className="w-5 h-5 text-white/60 group-hover:text-neon-cyan transition-colors duration-300" />
        </div>

        {/* Premium Tooltip */}
        <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0 pointer-events-none z-50">
            <div className="px-3 py-1.5 bg-deep-space/90 border border-white/20 backdrop-blur-xl rounded-lg shadow-xl whitespace-nowrap">
                <span className="text-xs font-medium text-white">{label}</span>
                {/* Tiny arrow */}
                <div className="absolute right-full top-1/2 -translate-y-1/2 -mr-[1px] border-4 border-transparent border-r-white/20" />
            </div>
        </div>
    </motion.div>
);

const Clock = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            setTime(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="font-mono text-xs font-bold text-white/60 tracking-widest whitespace-nowrap">
            {time}
        </span>
    );
};

export default function SideDecorations() {
    return (
        <>
            {/* Left Decoration: Design Tools */}
            <div className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-40">
                <TechIcon icon={Figma} label="Figma" delay={0} color="bg-purple-500/20" />
                <TechIcon icon={PenTool} label="Wireframing" delay={1} color="bg-pink-500/20" />
                <TechIcon icon={Layout} label="UI Design" delay={2} color="bg-blue-500/20" />
                <TechIcon icon={Palette} label="Design Systems" delay={3} color="bg-green-500/20" />
                <TechIcon icon={MousePointer} label="Prototyping" delay={4} color="bg-orange-500/20" />
            </div>

            {/* Right Decoration: Glass Control Panel */}
            <div className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-40 items-center">
                <div className="flex flex-col items-center gap-6 p-4 rounded-full bg-deep-space/30 border border-white/10 backdrop-blur-md shadow-2xl">
                    {/* Clock */}
                    <div className="relative h-32 w-8 rounded-full bg-white/5 border border-white/5">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap">
                            <Clock />
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-8 h-px bg-white/10" />

                    {/* System Status */}
                    <div className="group relative flex flex-col items-center gap-3 py-2 cursor-default">
                        <div className="relative">
                            <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                            <div className="absolute inset-0 rounded-full bg-neon-cyan/50 animate-ping" />
                        </div>
                        <div className="[writing-mode:vertical-rl] rotate-180 text-[10px] font-mono font-bold text-white/30 tracking-[0.2em] group-hover:text-neon-cyan transition-colors duration-500 uppercase">
                            System Online
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="w-8 h-px bg-white/10" />

                    {/* Socials */}
                    <div className="flex flex-col gap-5 pb-2">
                        <Link href="https://www.linkedin.com/in/nirav-lakhani2005/" target="_blank" className="text-white/50 hover:text-white hover:scale-110 transition-all duration-300">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="https://dribbble.com/nirav_2005" target="_blank" className="text-white/50 hover:text-white hover:scale-110 transition-all duration-300">
                            <Dribbble className="w-5 h-5" />
                        </Link>
                        <Link href="https://www.behance.net/niravlakhani2" target="_blank" className="text-white/50 hover:text-white hover:scale-110 transition-all duration-300">
                            <Palette className="w-5 h-5" />
                        </Link>
                        <Link href="mailto:niravlakhani2125@gmail.com" className="text-white/50 hover:text-white hover:scale-110 transition-all duration-300">
                            <Mail className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
