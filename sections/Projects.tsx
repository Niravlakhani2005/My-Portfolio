"use client";

import TiltCard from "@/components/3d/TiltCard";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const projects = [
    {
        title: "Qonaq Health",
        description: "Complete website design for a modern healthcare platform, focusing on patient accessibility and trust.",
        tags: ["UI/UX Design", "Figma", "Web Design", "Healthcare"],
        link: "https://www.figma.com/design/BKuGfZMcFnlwhHyITypED7/Qonaq---Portfolio?node-id=0-1&t=PKt3Hbbi6zXJT8qS-1",
        color: "#3b82f6",
        image: "/projects/qonaq-uhd.png",
    },
    {
        title: "Qonaq Health Revamp",
        description: "Modernized white-theme redesign for Qonaq Health, enhancing visual clarity and user experience.",
        tags: ["UI Redesign", "Figma", "Design System", "Healthcare"],
        link: "https://www.figma.com/design/WVPt1F9pJxbvjtTDWaOgOe/Qonaq-Health-Revamp---Portfolio?node-id=0-1&t=00M9ZSoWmCOaUIOo-1",
        color: "#10b981",
        image: "/projects/qonaq_revamp_ai_final.png",
    },
    {
        title: "Luumpa",
        description: "Vibrant landing page design featuring an interactive 3D soda can animation and energetic branding.",
        tags: ["3D Animation", "Figma", "Web Design", "Landing Page"],
        link: "https://www.figma.com/design/KVpVVHp1TVLe2EavtgnCZt/Luumpa---portfolio?node-id=0-1&t=dUFugAk7IJqaWkIV-1",
        color: "#fbbf24",
        image: "/projects/luumpa-final.png",
    },
    {
        title: "Cantech",
        description: "Corporate website design for a leading technology firm, emphasizing innovation, scale, and professionalism.",
        tags: ["Web Design", "Corporate UI", "Figma", "Tech"],
        link: "https://www.figma.com/design/LAD4WVkd5Oj9jO0FrPaOFE/Cantech---portfolio?node-id=0-1&t=FDREx0lJn8sYFj9X-1",
        color: "#06b6d4",
        image: "/projects/cantech-v5-final.png",
    },
    {
        title: "Event Booking App",
        description: "Mobile application design for discovering and booking local events, featuring a dark-themed UI.",
        tags: ["Mobile App", "Figma", "UI/UX", "iOS"],
        link: "https://www.figma.com/design/ofQuP2qOzsHNu99qJeA5VC/Event-Booking-App---Portfolio?node-id=1-2&t=fm815QPQU822Ebbs-1",
        color: "#f43f5e",
        image: "/projects/event-booking-uhd.png",
    },
    {
        title: "Event Booking Revamp",
        description: "Redesigned home screen for the Event Booking App with improved navigation and visual hierarchy.",
        tags: ["Mobile App", "Redesign", "Figma", "UX Improvement"],
        link: "https://www.figma.com/design/lHbXSgOxpbvf4KJZ8Ghv5L/Event-Booking-Revamp---Portfolio?node-id=0-1&t=BfBGH0oi3T2fEQ9P-1",
        color: "#ec4899",
        image: "/projects/event-booking-revamp-uhd.png",
    },
];

export default function Projects() {
    return (
        <section className="py-16 md:py-24 relative z-30" id="projects">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <SectionHeading
                    number="03"
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
