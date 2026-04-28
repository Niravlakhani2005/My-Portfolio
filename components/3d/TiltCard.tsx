"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ROTATION_RANGE = 20;

export default function TiltCard({
    title,
    description,
    tags,
    link,
    color,
    image,
}: {
    title: string;
    description: string;
    tags: string[];
    link: string;
    color: string;
    image?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springConfig = { stiffness: 260, damping: 28, mass: 0.5 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);
    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;
    const rectRef = useRef<DOMRect | null>(null);

    const handleMouseEnter = () => {
        if (ref.current) rectRef.current = ref.current.getBoundingClientRect();
    };
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!rectRef.current) return;
        const rX = ((e.clientY - rectRef.current.top) / rectRef.current.height - 0.5) * ROTATION_RANGE * -1;
        const rY = ((e.clientX - rectRef.current.left) / rectRef.current.width - 0.5) * ROTATION_RANGE;
        x.set(rX);
        y.set(rY);
    };
    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
        rectRef.current = null;
    };

    const isMobile = tags.includes("Mobile App");

    return (
        <motion.div
            ref={ref}
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transformStyle: "preserve-3d", transform }}
            className="relative w-full rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
        >
            {isMobile ? (
                /* ── MOBILE APP CARD ─────────────────────────────── */
                <div
                    className="relative h-[440px] rounded-2xl overflow-hidden border border-white/10"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* ① Rich brand-color background */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `radial-gradient(ellipse 80% 60% at 50% -10%, ${color}55 0%, transparent 65%), linear-gradient(160deg, #0e0e12 0%, #111116 100%)`,
                        }}
                    />

                    {/* ② Subtle grid texture */}
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: `linear-gradient(${color}80 1px, transparent 1px), linear-gradient(90deg, ${color}80 1px, transparent 1px)`,
                            backgroundSize: "32px 32px",
                        }}
                    />

                    {/* ③ iPhone mockup — centered, perspective-tilted */}
                    <div
                        className="absolute left-1/2 top-6"
                        style={{
                            transform: "translateX(-50%) perspective(900px) rotateX(8deg) rotateY(-4deg) translateZ(20px)",
                            transformStyle: "preserve-3d",
                            width: 170,
                            height: 355,
                        }}
                    >
                        {/* Outer phone frame */}
                        <div
                            className="relative w-full h-full rounded-[2.4rem]"
                            style={{
                                background: "linear-gradient(145deg, #2e2e2e, #111)",
                                boxShadow: `
                                    0 0 0 1px rgba(255,255,255,0.07),
                                    0 2px 0 0 rgba(255,255,255,0.12),
                                    0 30px 70px rgba(0,0,0,0.8),
                                    0 10px 30px rgba(0,0,0,0.5)
                                `,
                                padding: "5px",
                            }}
                        >
                            {/* Screen area */}
                            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-black">
                                {image && (
                                    <Image
                                        src={image}
                                        alt={title}
                                        fill
                                        className="object-cover object-top"
                                        sizes="170px"
                                    />
                                )}
                                {/* Dynamic Island */}
                                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-20">
                                    <div
                                        className="rounded-full bg-black"
                                        style={{ width: 62, height: 14 }}
                                    />
                                </div>
                                {/* Screen top fade — lets Dynamic Island sit cleanly */}
                                <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/60 to-transparent z-10" />
                                {/* Subtle glass sheen */}
                                <div
                                    className="absolute inset-0 pointer-events-none z-10"
                                    style={{
                                        background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 50%)",
                                    }}
                                />
                            </div>

                            {/* Side buttons */}
                            <div
                                className="absolute rounded-r-sm"
                                style={{
                                    right: -4, top: 80, width: 3, height: 44,
                                    background: "linear-gradient(to right, #1a1a1a, #2e2e2e)",
                                }}
                            />
                            <div
                                className="absolute rounded-l-sm"
                                style={{
                                    left: -4, top: 68, width: 3, height: 30,
                                    background: "linear-gradient(to left, #1a1a1a, #2e2e2e)",
                                }}
                            />
                            <div
                                className="absolute rounded-l-sm"
                                style={{
                                    left: -4, top: 106, width: 3, height: 30,
                                    background: "linear-gradient(to left, #1a1a1a, #2e2e2e)",
                                }}
                            />
                        </div>

                        {/* ④ Glowing shadow under phone */}
                        <div
                            className="absolute left-1/2 -translate-x-1/2"
                            style={{
                                bottom: -20,
                                width: "70%",
                                height: 20,
                                background: color,
                                filter: "blur(20px)",
                                opacity: 0.45,
                                borderRadius: "50%",
                            }}
                        />
                    </div>

                    {/* ⑤ Bottom gradient fade into text zone */}
                    <div
                        className="absolute inset-x-0 bottom-0"
                        style={{
                            height: "55%",
                            background: "linear-gradient(to top, #0e0e12 55%, transparent 100%)",
                        }}
                    />

                    {/* ⑥ Text content at bottom */}
                    <div className="absolute inset-x-0 bottom-0 p-5 z-10">
                        {/* Thin colored accent line */}
                        <div
                            className="mb-3 rounded-full"
                            style={{ height: 2, width: 28, background: color }}
                        />
                        <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                            {title}
                        </h3>
                        <p className="text-white/50 text-xs mb-3 leading-relaxed line-clamp-2">
                            {description}
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1.5">
                                {tags.slice(0, 2).map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-[10px] px-2 py-0.5 rounded-full border text-white/60"
                                        style={{ borderColor: `${color}50`, background: `${color}15` }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link
                                href={link}
                                target={link.startsWith("http") ? "_blank" : undefined}
                                className="inline-flex items-center gap-1 text-xs font-medium transition-colors"
                                style={{ color }}
                            >
                                Case Study <ArrowUpRight className="w-3 h-3" />
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                /* ── WEB PROJECT CARD — premium browser mockup ───── */
                <div
                    className="relative h-[440px] rounded-2xl overflow-hidden border border-white/10"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* ① Brand-color gradient background */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `radial-gradient(ellipse 80% 60% at 50% -10%, ${color}50 0%, transparent 65%), linear-gradient(160deg, #0e0e12 0%, #111116 100%)`,
                        }}
                    />

                    {/* ② Subtle grid texture */}
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: `linear-gradient(${color}80 1px, transparent 1px), linear-gradient(90deg, ${color}80 1px, transparent 1px)`,
                            backgroundSize: "32px 32px",
                        }}
                    />

                    {/* ③ Browser window mockup — perspective tilted */}
                    <div
                        className="absolute left-1/2 top-8"
                        style={{
                            transform: "translateX(-50%) perspective(900px) rotateX(8deg) rotateY(-4deg) translateZ(20px)",
                            transformStyle: "preserve-3d",
                            width: 300,
                        }}
                    >
                        {/* Browser chrome bar */}
                        <div
                            className="w-full rounded-t-xl px-3 py-2 flex items-center gap-2"
                            style={{
                                background: "linear-gradient(145deg, #2a2a2a, #1a1a1a)",
                                boxShadow: "0 0 0 1px rgba(255,255,255,0.07), 0 2px 0 0 rgba(255,255,255,0.06)",
                            }}
                        >
                            {/* Traffic lights */}
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                            </div>
                            {/* Fake URL bar */}
                            <div
                                className="flex-1 h-5 rounded-md flex items-center px-2 gap-1"
                                style={{ background: "rgba(255,255,255,0.05)" }}
                            >
                                <div className="w-1.5 h-1.5 rounded-full opacity-40" style={{ background: color }} />
                                <div className="h-1.5 rounded-sm opacity-20 flex-1" style={{ background: color }} />
                            </div>
                        </div>

                        {/* Browser screen */}
                        <div
                            className="w-full overflow-hidden relative"
                            style={{
                                height: 200,
                                background: "#0a0a0a",
                                boxShadow: `0 0 0 1px rgba(255,255,255,0.05), 0 30px 70px rgba(0,0,0,0.8), 0 10px 30px rgba(0,0,0,0.5)`,
                                borderBottomLeftRadius: "0.75rem",
                                borderBottomRightRadius: "0.75rem",
                            }}
                        >
                            {image && (
                                <Image
                                    src={image}
                                    alt={title}
                                    fill
                                    className="object-cover object-top"
                                    sizes="300px"
                                />
                            )}
                            {/* Glass sheen */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)",
                                }}
                            />
                        </div>

                        {/* ④ Glow shadow under browser */}
                        <div
                            className="absolute left-1/2 -translate-x-1/2"
                            style={{
                                bottom: -18,
                                width: "60%",
                                height: 20,
                                background: color,
                                filter: "blur(20px)",
                                opacity: 0.4,
                                borderRadius: "50%",
                            }}
                        />
                    </div>

                    {/* ⑤ Bottom gradient fade */}
                    <div
                        className="absolute inset-x-0 bottom-0"
                        style={{
                            height: "50%",
                            background: "linear-gradient(to top, #0e0e12 55%, transparent 100%)",
                        }}
                    />

                    {/* ⑥ Text content */}
                    <div className="absolute inset-x-0 bottom-0 p-5 z-10">
                        <div
                            className="mb-3 rounded-full"
                            style={{ height: 2, width: 28, background: color }}
                        />
                        <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                            {title}
                        </h3>
                        <p className="text-white/50 text-xs mb-3 leading-relaxed line-clamp-2">
                            {description}
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-wrap gap-1.5">
                                {tags.slice(0, 2).map((tag, i) => (
                                    <span
                                        key={i}
                                        className="text-[10px] px-2 py-0.5 rounded-full border text-white/60"
                                        style={{ borderColor: `${color}50`, background: `${color}15` }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link
                                href={link}
                                target={link.startsWith("http") ? "_blank" : undefined}
                                className="inline-flex items-center gap-1 text-xs font-medium transition-colors"
                                style={{ color }}
                            >
                                Case Study <ArrowUpRight className="w-3 h-3" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </motion.div>
    );
}
