"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function MovingStars() {
    const mesh = useRef<THREE.Points>(null);
    const count = 2000;

    const [positions, setPositions] = useState<Float32Array | null>(null);

    useEffect(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 600; // x
            pos[i * 3 + 1] = (Math.random() - 0.5) * 600; // y
            pos[i * 3 + 2] = (Math.random() - 0.5) * 600; // z
        }
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPositions(pos);
    }, []);

    useFrame((state, delta) => {
        if (!mesh.current || !positions) return;

        // Move stars towards camera (z-axis)
        // If they pass the camera, reset their z position to the back
        const positionArray = mesh.current.geometry.attributes.position.array as Float32Array;
        const speed = 50; // Adjust for "running" speed

        for (let i = 0; i < count; i++) {
            // Update Z
            positionArray[i * 3 + 2] += speed * delta;

            // Reset if passed camera (camera is at 0,0,1 usually? or 50?)
            // Let's assume camera is at 0,0,0 or positive Z. 
            // If stars move +Z, they come towards camera.
            if (positionArray[i * 3 + 2] > 300) {
                positionArray[i * 3 + 2] = -300;
            }
        }

        mesh.current.geometry.attributes.position.needsUpdate = true;

        // Optional: slight rotation
        mesh.current.rotation.z += delta * 0.05;
    });

    if (!positions) return null;

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
            </bufferGeometry>
            <pointsMaterial
                size={0.8}
                color="#ffffff"
                transparent
                opacity={0.8}
                sizeAttenuation={true}
                depthWrite={false}
            />
        </points>
    );
}
