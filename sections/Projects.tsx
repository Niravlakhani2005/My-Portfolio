"use client";

import TiltCard from "@/components/3d/TiltCard";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const projects = [
    {
        title: "Qonaq Health",
        description: "Complete website design for a modern healthcare platform, focusing on patient accessibility and trust.",
        tags: ["UI/UX Design", "Figma", "Web Design", "Healthcare"],
        link: "https://dribbble.com",
        color: "#3b82f6",
        image: "/projects/qonaq-real.png",
    },
    {
        title: "Luumpa",
        description: "Vibrant landing page design featuring an interactive 3D soda can animation and energetic branding.",
        tags: ["3D Animation", "Figma", "Web Design", "Landing Page"],
        link: "https://dribbble.com",
        color: "#fbbf24",
        image: "/projects/luumpa-real.png",
    },
    {
        title: "Cantech",
        description: "Corporate website design for a leading technology firm, emphasizing innovation, scale, and professionalism.",
        tags: ["Web Design", "Corporate UI", "Figma", "Tech"],
        link: "https://dribbble.com",
        color: "#06b6d4",
        image: "/projects/cantech-real.png",
    },
    {
        title: "Event Booking App",
        description: "Mobile application design for discovering and booking local events, featuring a dark-themed UI.",
        tags: ["Mobile App", "Figma", "UI/UX", "iOS"],
        link: "https://dribbble.com",
        color: "#f43f5e",
        image: "/projects/event-booking.png",
    },
    {
        title: "Event Booking Revamp",
        description: "Redesigned home screen for the Event Booking App with improved navigation and visual hierarchy.",
        tags: ["Mobile App", "Redesign", "Figma", "UX Improvement"],
        link: "https://dribbble.com",
        color: "#ec4899",
        image: "/projects/event-booking-revamp.png",
    },
];

export default function Projects() {
    return (
        <section className="py-32 relative z-30" id="projects">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <SectionHeading
                    number="02"
                    title="Selected Work"
                    subtitle="Case studies of recent product designs"
                    className="mb-8"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <TiltCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
