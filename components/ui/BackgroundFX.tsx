"use client";

export default function BackgroundFX() {
    return (
        <>
            {/* Layer 2: Grid Overlay */}
            <div
                className="fixed inset-0 z-[1] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: "80px 80px",
                    maskImage: "radial-gradient(circle at center, black 0%, transparent 80%)",
                    WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 80%)",
                    opacity: 0.4
                }}
            />

            {/* Layer 3: Noise Texture Overlay */}
            <div className="fixed inset-0 z-[40] pointer-events-none mix-blend-soft-light opacity-60">
                <svg className="w-full h-full">
                    <filter id="noiseFilter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.8"
                            numOctaves="4"
                            stitchTiles="stitch"
                        />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>
        </>
    );
}
