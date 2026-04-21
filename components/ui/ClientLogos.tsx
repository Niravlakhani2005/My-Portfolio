"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CLIENTS = [
    { name: "Qonaq Health", logo: "/clients/qonaq.png" },
    { name: "Suso Tech", logo: "/clients/suso.png" },
    { name: "Devxdigi", logo: "/clients/devxdigi.png" },
    { name: "Luumpa", logo: "/clients/luumpa.png" },
    { name: "Driptionary", logo: "/clients/driptionary.png" },
    { name: "Pratyaksh Ayurveda", logo: "/clients/pratyaksh.png" },
    { name: "Mediways", logo: "/clients/mediways.png" },
    { name: "Cantech", logo: "/clients/cantech.png" },
];

export default function ClientLogos() {
    return (
        <div className="w-full relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
                <p className="text-xs font-mono text-white/40 uppercase tracking-widest text-center">
                    Trusted By
                </p>
            </div>

            <div className="relative flex overflow-hidden mask-linear-fade">
                <div className="absolute inset-x-0 top-0 bottom-0 z-10 bg-gradient-to-r from-background via-transparent to-background pointer-events-none" />

                <div className="flex gap-12 items-center whitespace-nowrap min-w-full group">
                    <motion.div
                        className="flex gap-12 items-center w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
                    >
                        {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                            <div
                                key={i}
                                className="relative group/logo cursor-pointer transition-transform duration-300 hover:scale-105"
                            >
                                <div className={`relative h-12 w-auto min-w-[140px] flex items-center justify-center grayscale hover:grayscale-0 brightness-0 invert hover:brightness-100 transition-all duration-300 opacity-50 hover:opacity-100 ${client.name === "Driptionary" ? "hover:invert" : "hover:invert-0"}`}>
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        width={160}
                                        height={60}
                                        className="object-contain h-full w-auto"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
