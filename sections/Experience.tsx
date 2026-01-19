"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Briefcase, Calendar, MapPin } from "lucide-react";
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
        period: "May 2024 - June 2024", // Merged for display or keep detailed? Keeping detailed as per resume
        periodDetail: "May 2024 - June 2024, May 2025 - June 2025",
        description: [
            "Conducted usability testing and refined interfaces based on user feedback and product requirements.",
            "Designed wireframes and interactive prototypes to support faster and smoother development handoff.",
            "Collaborated with developers and stakeholders to ensure feasible and user-friendly implementations."
        ],
        color: "#a78bfa", // Purple
    },
    {
        role: "Web Design Intern",
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

const ROTATION_RANGE = 20;

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

    const springConfig = { stiffness: 300, damping: 30, mass: 0.5 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const rX = ((mouseY / height) - 0.5) * ROTATION_RANGE * -1;
        const rY = ((mouseX / width) - 0.5) * ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="relative pl-8 md:pl-16 group/timeline"
        >
            {/* Timeline Dot & Connector - Outside the 3D card context */}
            <div className="absolute left-[2px] top-8 flex flex-col items-center h-full">
                {/* Dot */}
                <div
                    className={cn(
                        "w-4 h-4 rounded-full border-2 bg-deep-space z-10 transition-all duration-500",
                        isHovered ? "scale-125 shadow-[0_0_20px_var(--exp-color)] border-[var(--exp-color)]" : "border-white/20"
                    )}
                    style={{ "--exp-color": exp.color } as React.CSSProperties}
                >
                    <div className={cn(
                        "w-full h-full rounded-full transition-opacity duration-500",
                        isHovered ? "bg-[var(--exp-color)] opacity-100" : "bg-white opacity-0"
                    )} />
                </div>
                {/* Line Segment */}
                <div className="w-[2px] h-full bg-white/5 mt-2 relative overflow-hidden">
                    <div className={cn(
                        "absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[var(--exp-color)] to-transparent transition-transform duration-700",
                        isHovered ? "translate-y-0" : "-translate-y-full"
                    )}
                        style={{ "--exp-color": exp.color } as React.CSSProperties}
                    />
                </div>
            </div>

            {/* Glowing Connection Beam */}
            <div className={cn(
                "absolute left-[18px] top-10 h-[2px] bg-gradient-to-r from-[var(--exp-color)] to-transparent transition-all duration-500 z-0",
                isHovered ? "w-16 md:w-24 opacity-100" : "w-0 opacity-0"
            )}
                style={{ "--exp-color": exp.color } as React.CSSProperties}
            />

            {/* 3D Holographic Card */}
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{ transformStyle: "preserve-3d", transform }}
                className="relative min-h-[300px] w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden group/card cursor-default"
            >
                {/* Dynamic Background Gradient */}
                <div
                    className="absolute inset-0 opacity-0 group-hover/card:opacity-20 transition-opacity duration-500 bg-gradient-to-br from-[var(--exp-color)] via-transparent to-transparent pointer-events-none"
                    style={{ "--exp-color": exp.color } as React.CSSProperties}
                />

                {/* Content Container */}
                <div
                    style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
                    className="relative p-6 md:p-8 h-full flex flex-col"
                >
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover/card:text-[var(--exp-color)] transition-colors"
                                style={{ "--exp-color": exp.color } as React.CSSProperties}
                            >
                                {exp.role}
                            </h3>
                            <h4 className="text-lg text-white/70 font-medium flex items-center gap-2">
                                {exp.company}
                                <span className="w-1 h-1 rounded-full bg-white/30" />
                                <span className="text-sm font-normal text-white/40 flex items-center gap-1">
                                    <MapPin className="w-3 h-3" /> {exp.location}
                                </span>
                            </h4>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                            <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-cyan-100/80 flex items-center gap-2">
                                <Calendar className="w-3.5 h-3.5" />
                                {exp.periodDetail || exp.period}
                            </span>
                        </div>
                    </div>

                    {/* Description List */}
                    <ul className="space-y-4 flex-grow">
                        {exp.description.map((item, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-4 text-white/60 leading-relaxed text-sm md:text-base group/item"
                            >
                                <span
                                    className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0 transition-colors duration-300 group-hover/item:bg-[var(--exp-color)] group-hover/item:shadow-[0_0_8px_var(--exp-color)] bg-white/20"
                                    style={{ "--exp-color": exp.color } as React.CSSProperties}
                                />
                                <span className="group-hover/item:text-white/90 transition-colors duration-300">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Holographic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none rounded-2xl" />

                {/* Scanner Light Effect */}
                <div
                    className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover/card:animate-shine pointer-events-none"
                    style={{ transitionDuration: '1s' }}
                />
            </motion.div>
        </motion.div>
    );
}

export default function Experience() {
    return (
        <section className="py-24 md:py-32 relative z-30 overflow-hidden" id="experience">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <SectionHeading
                    number="02"
                    title="Experience"
                    subtitle="Professional journey & milestones"
                    className="mb-16 md:mb-24"
                />

                <div className="relative max-w-5xl mx-auto">
                    {/* Main Background Timeline Line (Fadeder) */}
                    <div className="absolute left-[9px] top-0 bottom-0 w-[2px] bg-white/5" />

                    <div className="space-y-12 md:space-y-20">
                        {experiences.map((exp, index) => (
                            <ExperienceCard key={index} exp={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        </section>
    );
}
