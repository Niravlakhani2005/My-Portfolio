"use client";

import { useEffect } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";

export default function GlowCursor() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // Offset by half of cursor width/height (130px)
            mouseX.set(e.clientX - 130);
            mouseY.set(e.clientY - 130);
        };

        window.addEventListener("pointermove", handleMouseMove);
        return () => window.removeEventListener("pointermove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed w-[260px] h-[260px] rounded-full pointer-events-none z-[5] mix-blend-screen filter blur-[16px]"
            style={{
                x,
                y,
                background: "radial-gradient(circle, rgba(168, 85, 247, 0.22) 0%, transparent 55%)",
            }}
        />
    );
}
