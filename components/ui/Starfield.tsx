"use client";

import { useEffect, useRef } from "react";

interface Star {
    x: number;
    y: number;
    size: number;
    opacity: number;
    twinkleSpeed: number;
}

interface ShootingStar {
    x: number;
    y: number;
    length: number;
    speed: number;
    opacity: number;
}

export default function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];
        const shootingStars: ShootingStar[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        };

        const initStars = () => {
            const starCount = Math.floor((window.innerWidth * window.innerHeight) / 1000); // High density
            stars = [];
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 0.8 + 0.2, // Tiny: 0.2px - 1.0px
                    opacity: Math.random(),
                    twinkleSpeed: Math.random() * 0.02 + 0.005,
                });
            }
        };

        const createShootingStar = () => {
            const startX = Math.random() * canvas.width;
            const startY = Math.random() * (canvas.height / 2); // Mostly upper half
            shootingStars.push({
                x: startX,
                y: startY,
                length: Math.random() * 80 + 20,
                speed: Math.random() * 10 + 5,
                opacity: 1,
            });
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Static Stars
            stars.forEach((star) => {
                ctx.beginPath();
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Twinkle
                star.opacity += star.twinkleSpeed;
                if (star.opacity > 1 || star.opacity < 0.2) {
                    star.twinkleSpeed = -star.twinkleSpeed;
                }
            });

            // Handle Shooting Stars
            if (Math.random() < 0.01) { // 1% chance per frame (approx every ~1.5s)
                createShootingStar();
            }

            for (let i = shootingStars.length - 1; i >= 0; i--) {
                const s = shootingStars[i];

                // Move (Diagonal down-right)
                s.x += s.speed;
                s.y += s.speed * 0.5;
                s.opacity -= 0.01;

                // Draw Trail
                const gradient = ctx.createLinearGradient(s.x, s.y, s.x - s.length, s.y - s.length * 0.5);
                gradient.addColorStop(0, `rgba(255, 255, 255, ${s.opacity})`);
                gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

                ctx.beginPath();
                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1; // razor sharp
                ctx.moveTo(s.x, s.y);
                ctx.lineTo(s.x - s.length, s.y - s.length * 0.5);
                ctx.stroke();

                // Remove dead stars
                if (s.opacity <= 0 || s.x > canvas.width || s.y > canvas.height) {
                    shootingStars.splice(i, 1);
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        animate();

        window.addEventListener("resize", resizeCanvas);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Nebula Gradient Layer */}
            <div className="absolute inset-0 bg-deep-space" />
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyber-purple/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-electric-blue/10 rounded-full blur-[150px]" />

            <canvas ref={canvasRef} className="absolute inset-0" />
        </div>
    );
}
