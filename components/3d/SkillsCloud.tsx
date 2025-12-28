"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { tools } from "@/data/skills";
import { cn } from "@/lib/utils";

function Word({ children, position, color, ...props }: any) {
    const ref = useRef<THREE.Group>(null);
    useFrame(({ camera }) => {
        // Make text face the camera
        if (ref.current) {
            ref.current.lookAt(camera.position);
        }
    });

    return (
        <group ref={ref} position={position} {...props}>
            <Html transform position={[0, 0, 0]} center>
                <div
                    className="p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md cursor-pointer hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group"
                    style={{ boxShadow: `0 0 10px ${color}20` }}
                >
                    <div
                        className="w-6 h-6 flex items-center justify-center"
                        style={{ color: color }}
                    >
                        {children.icon.svg ? (
                            <div dangerouslySetInnerHTML={{ __html: children.icon.svg }} className="w-full h-full" />
                        ) : (
                            <children.icon className="w-full h-full" />
                        )}
                    </div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider hidden group-hover:block transition-all">
                        {children.name}
                    </span>
                </div>
            </Html>
        </group>
    );
}

function Cloud({ count = 4, radius = 20 }) {
    // Create a sphere of points
    const words = useMemo(() => {
        const temp = [];
        const spherical = new THREE.Spherical();
        const phiSpan = Math.PI / (count + 1);
        const thetaSpan = (Math.PI * 2) / count;

        // Better distribution: Fibonacci sphere or just random?
        // Let's use Fibonacci sphere for even distribution
        const goldenRatio = (1 + Math.sqrt(5)) / 2;

        for (let i = 0; i < tools.length; i++) {
            // Fibonacci sphere algorithm
            // y goes from 1 to -1
            const y = 1 - (i / (tools.length - 1)) * 2;
            const radiusAtY = Math.sqrt(1 - y * y);

            const theta = phiSpan * i * 3; // Basic spiral

            // Using a simpler Fibonacci lattice approach
            const theta2 = 2 * Math.PI * i / goldenRatio;
            const phi = Math.acos(1 - 2 * (i + 0.5) / tools.length);

            // Convert spherical to cartesian
            const x = radius * Math.sin(phi) * Math.cos(theta2);
            const z = radius * Math.sin(phi) * Math.sin(theta2);
            const y2 = radius * Math.cos(phi);

            temp.push([new THREE.Vector3(x, y2, z), tools[i]] as [THREE.Vector3, typeof tools[0]]);
        }
        return temp;
    }, [count, radius]);

    const groupRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        // Auto rotation
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.1;
            groupRef.current.rotation.x += delta * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            {words.map(([pos, word], index) => (
                <Word key={index} position={pos} color={word.color}>
                    {word}
                </Word>
            ))}
        </group>
    );
}

export default function SkillsCloud() {
    const [radius, setRadius] = useState(18);

    useEffect(() => {
        const handleResize = () => {
            setRadius(window.innerWidth < 768 ? 12 : 20);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-full h-[600px] relative">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 60 }}>
                <fog attach="fog" args={["#050505", 0, 70]} />
                <Cloud count={tools.length} radius={radius} />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} enablePan={false} />
            </Canvas>
        </div>
    );
}
