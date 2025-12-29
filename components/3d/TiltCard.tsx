"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

export default function TiltCard({ title, description, tags, link, color, image }: { title: string; description: string; tags: string[]; link: string; color: string; image?: string }) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: "preserve-3d", transform }}
            className="relative h-96 w-full rounded-xl bg-white/5 border border-white/10 backdrop-blur-md"
        >
            <div
                style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
                className="absolute inset-4 rounded-xl bg-deep-space shadow-2xl border border-white/20 overflow-hidden"
            >
                {/* Background Image */}
                {image && (
                    <div className="absolute inset-0">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            unoptimized
                            className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-deep-space/90 to-transparent mix-blend-multiply opacity-60" />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-space via-transparent to-transparent" />
                    </div>
                )}
                {/* Gradient glow/Spotlight effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />

                <div className="p-6 flex flex-col justify-end h-full relative z-10 w-full">
                    <h3 className="text-2xl font-display font-bold text-white mb-2 translate-z-10" style={{ transform: "translateZ(50px)" }}>
                        {title}
                    </h3>
                    <p className="text-white/60 text-sm mb-4 leading-relaxed line-clamp-2" style={{ transform: "translateZ(40px)" }}>
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6" style={{ transform: "translateZ(30px)" }}>
                        {tags.map((tag, i) => (
                            <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-white/80">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <Link href={link} target={link.startsWith("http") ? "_blank" : undefined} className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-neon-cyan transition-colors" style={{ transform: "translateZ(60px)" }}>
                        {link.startsWith("http") ? "View Project" : "Read Case Study"} <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>

            {/* Decorative elements */}

        </motion.div >
    );
}
