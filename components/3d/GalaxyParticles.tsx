"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function GalaxyParticles() {
    const mesh = useRef<THREE.Points>(null);
    const count = 3000;

    // Generate particles with galaxy-like colors
    const { positions, colors } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const colorPalette = [
            new THREE.Color("#a855f7"), // Cyber Purple
            new THREE.Color("#2563eb"), // Electric Blue
            new THREE.Color("#06b6d4"), // Neon Cyan
            new THREE.Color("#ffffff"), // White
        ];

        for (let i = 0; i < count; i++) {
            // Spherical distribution
            const r = Math.random() * 40; // radius
            const theta = THREE.MathUtils.randFloatSpread(360);
            const phi = THREE.MathUtils.randFloatSpread(360);

            // Galaxy Disc-ish shape (flattened sphere)
            // x = r * cos(theta)
            // y = (r * sin(theta)) * 0.5 (flattened)
            // z = depth spread

            // Let's do a simple spread for now
            const x = (Math.random() - 0.5) * 100;
            const y = (Math.random() - 0.5) * 60;
            const z = (Math.random() - 0.5) * 80;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Random color
            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        return { positions, colors };
    }, []);

    useFrame((state, delta) => {
        if (!mesh.current) return;
        // Slow rotation
        mesh.current.rotation.y += delta * 0.05;
        mesh.current.rotation.x += delta * 0.02;
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                    args={[positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={colors.length / 3}
                    array={colors}
                    itemSize={3}
                    args={[colors, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.15}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}
