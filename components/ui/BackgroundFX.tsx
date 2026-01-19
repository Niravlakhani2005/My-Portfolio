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
            <div
                className="fixed inset-0 z-[40] pointer-events-none mix-blend-soft-light opacity-30"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    transform: 'translateZ(0)', // Force GPU acceleration
                }}
            />
        </>
    );
}
