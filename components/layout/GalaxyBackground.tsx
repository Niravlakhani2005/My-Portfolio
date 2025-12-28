"use client";

import { Canvas } from "@react-three/fiber";
import GalaxyParticles from "@/components/3d/GalaxyParticles";

export default function GalaxyBackground() {
    return (
        <div className="fixed inset-0 z-0 bg-deep-space">
            <Canvas
                camera={{ position: [0, 0, 1] }}
                gl={{ antialias: false, alpha: false }}
            >
                <color attach="background" args={["#050505"]} />
                <GalaxyParticles />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep-space/50 to-deep-space opacity-80" />
        </div>
    );
}
