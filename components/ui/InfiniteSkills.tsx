"use client";

import { motion } from "framer-motion";
import { Figma, PenTool, Layout, Layers, Monitor, Smartphone, Code2, Cpu } from "lucide-react";

const SKILLS = [
    { name: "Figma", icon: Figma },
    { name: "Product Design", icon: Layout },
    { name: "Design Systems", icon: Layers },
    { name: "Prototyping", icon: Smartphone },
    { name: "Web Design", icon: Monitor },
    { name: "Wireframing", icon: PenTool },
    { name: "Frontend Dev", icon: Code2 },
    { name: "Strategy", icon: Cpu },
];

export default function InfiniteSkills() {
    return (
        <div className="relative flex overflow-hidden mask-linear-fade p-4">
            <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-deep-space via-transparent to-deep-space" />

            <motion.div
                className="flex gap-8 items-center whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            >
                {[...SKILLS, ...SKILLS].map((skill, i) => (
                    <div
                        key={i}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-neon-cyan/50 transition-colors group cursor-default"
                    >
                        <skill.icon className="w-5 h-5 text-white/50 group-hover:text-neon-cyan transition-colors" />
                        <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
