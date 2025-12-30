"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

function Stars(props: any) {
    const ref = useRef<any>();
    const sphere = useMemo(() => {
        const data = new Float32Array(5000 * 3);
        // @ts-ignore
        return random.inSphere(data, { radius: 1.2 }) as Float32Array;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
}

export default function GalaxyBackground() {
    return (
        <div className="fixed inset-0 z-[-50] bg-[#050505]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    );
}
