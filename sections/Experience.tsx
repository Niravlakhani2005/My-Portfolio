"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { MapPin, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
    {
        role: "UI/UX Designer",
        company: "Freelancer",
        location: "Remote",
        period: "Nov 2023 - Present",
        description: [
            "Designed end-to-end UI/UX solutions for web and mobile products across healthcare, tech, and real-estate domains.",
            "Created user flows, wireframes, and high-fidelity interfaces focused on clarity, usability, and consistency.",
            "Delivered design solutions that improved user engagement and achieved high client satisfaction."
        ],
        color: "#22d3ee", // Cyan
    },
    {
        role: "UI/UX Internship",
        company: "Cantech Networks",
        location: "Bhavnagar",
        period: "May 2024 - June 2024",
        periodDetail: "May 2024 - June 2024\nMay 2025 - June 2025",
        description: [
            "Conducted usability testing and refined interfaces based on user feedback and product requirements.",
            "Designed wireframes and interactive prototypes to support faster and smoother development handoff.",
            "Collaborated with developers and stakeholders to ensure feasible and user-friendly implementations."
        ],
        color: "#a78bfa", // Purple
    },
    {
        role: "UI/UX Internship",
        company: "Hyvikk Solutions",
        location: "Bhavnagar",
        period: "July 2022",
        description: [
            "Assisted in designing responsive interfaces and improving usability across web products.",
            "Contributed to accessibility and visual consistency improvements."
        ],
        color: "#f472b6", // Pink
    },
];

function ExperienceRow({ exp, index }: { exp: typeof experiences[0]; index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative flex flex-col md:flex-row gap-4 md:gap-12 py-8 md:py-12 border-b border-white/10 last:border-0 transition-all duration-500 hover:!opacity-100 hover:bg-white/[0.02] px-4 md:px-8 -mx-4 md:-mx-8 rounded-2xl cursor-default"
        >
            {/* Subtle Hover Glow */}
            <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
                style={{
                    background: `radial-gradient(600px circle at 0% 50%, ${exp.color}08, transparent 60%)`
                }}
            />

            {/* Left Column: Timeline & Company */}
            <div className="w-full md:w-1/4 shrink-0 z-10 pt-1">
                <p className="text-sm font-mono text-white/40 mb-2 transition-colors duration-300 group-hover:text-white/70 whitespace-pre-line">
                    {exp.periodDetail || exp.period}
                </p>
                <h4 className="text-xl font-display font-medium text-white/90 mb-2 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                    {exp.company}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-white/50" />
                </h4>
                <p className="text-sm text-white/40 flex items-center gap-1.5 transition-colors duration-300 group-hover:text-white/60">
                    <MapPin className="w-3.5 h-3.5" /> {exp.location}
                </p>
            </div>

            {/* Right Column: Role & Details */}
            <div className="w-full md:w-3/4 z-10">
                <h3 
                    className="text-2xl font-bold text-white mb-4 transition-colors duration-300"
                    style={{ color: isHovered ? exp.color : "white" }}
                >
                    {exp.role}
                </h3>
                <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-white/50 text-base leading-relaxed transition-colors duration-300 group-hover:text-white/80">
                            <span 
                                className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white/20 transition-all duration-300 flex-shrink-0"
                                style={{ 
                                    backgroundColor: isHovered ? exp.color : "rgba(255,255,255,0.2)",
                                    boxShadow: isHovered ? `0 0 10px ${exp.color}` : "none" 
                                }}
                            />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

export default function Experience() {
    return (
        <section className="py-24 md:py-32 relative z-30 overflow-hidden" id="experience">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <SectionHeading
                    title="Experience"
                    subtitle="Professional journey & milestones"
                    className="mb-16 md:mb-20"
                />

                {/* The hover:[&>div]:opacity-40 dims all unhovered siblings */}
                <div className="group/list hover:[&>div]:opacity-30 transition-opacity duration-500">
                    {experiences.map((exp, index) => (
                        <ExperienceRow key={index} exp={exp} index={index} />
                    ))}
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-cyan-500/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
        </section>
    );
}
