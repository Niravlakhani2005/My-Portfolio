"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
    number: string;
    title: string;
    subtitle?: string;
    className?: string;
}

export default function SectionHeading({ number, title, subtitle, className = "" }: SectionHeadingProps) {
    return (
        <div className={`relative mb-16 ${className}`}>
            <div className="flex items-center gap-6 mb-0 select-none pointer-events-none">
                <span className="text-8xl md:text-9xl font-display font-bold text-white/5 opacity-50 tracking-tighter" style={{ lineHeight: 0.8 }}>
                    {number}
                </span>
                <div className="h-px bg-gradient-to-r from-white/10 to-transparent w-32 md:w-48 mt-4" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 -mt-10 md:-mt-14"
            >
                <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-4 tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
                    {title}
                </h2>
                {subtitle && (
                    <p className="text-lg md:text-xl text-white/40 max-w-xl font-light">
                        {subtitle}
                    </p>
                )}
            </motion.div>

            {/* Spotlight Effect Background */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-500/5 to-transparent blur-3xl -z-10 pointer-events-none" />
        </div>
    );
}
