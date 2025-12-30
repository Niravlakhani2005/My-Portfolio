"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

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
        <section className="w-full py-16 md:py-24 relative overflow-hidden bg-deep-space/50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <SectionHeading
                    number="03"
                    title="Clients"
                    subtitle="Trusted by innovative teams worldwide"
                    className="mb-8"
                />
            </div>

            <div className="relative flex overflow-hidden mask-linear-fade">
                <div className="absolute inset-x-0 top-0 bottom-0 z-10 bg-gradient-to-r from-deep-space via-transparent to-deep-space pointer-events-none" />

                <div className="flex gap-16 items-center whitespace-nowrap min-w-full group">
                    <motion.div
                        className="flex gap-16 items-center w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                    >
                        {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                            <div
                                key={i}
                                className="relative group/logo cursor-pointer transition-transform duration-300 hover:scale-110"
                            >
                                <div className="relative h-20 w-auto min-w-[180px] flex items-center justify-center grayscale hover:grayscale-0 brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300 opacity-60 hover:opacity-100">
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        width={200}
                                        height={80}
                                        className="object-contain h-full w-auto"
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
