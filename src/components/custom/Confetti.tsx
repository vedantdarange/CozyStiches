"use client";
import { useEffect, useRef } from "react";

export const Confetti = ({ trigger }: { trigger: boolean }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!trigger || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const colors = ["#9CAF88", "#D4A574", "#F5F1E8", "#B8624A", "#E8B4A0"];
        const confettiCount = 150;
        const gravity = 0.5;
        const terminalVelocity = 5;
        const drag = 0.075;

        const confetti: Array<{
            x: number;
            y: number;
            r: number;
            d: number;
            color: string;
            tilt: number;
            tiltAngleIncrement: number;
            tiltAngle: number;
        }> = [];

        for (let i = 0; i < confettiCount; i++) {
            confetti.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height - canvas.height,
                r: Math.random() * 6 + 4,
                d: Math.random() * confettiCount,
                color: colors[Math.floor(Math.random() * colors.length)],
                tilt: Math.floor(Math.random() * 10) - 10,
                tiltAngleIncrement: Math.random() * 0.07 + 0.05,
                tiltAngle: 0,
            });
        }

        let animationId: number;

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            confetti.forEach((c, i) => {
                ctx.beginPath();
                ctx.lineWidth = c.r / 2;
                ctx.strokeStyle = c.color;
                ctx.moveTo(c.x + c.tilt + c.r, c.y);
                ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r);
                ctx.stroke();

                c.tiltAngle += c.tiltAngleIncrement;
                c.y += (Math.cos(c.d) + 3 + c.r / 2) / 2;
                c.tilt = Math.sin(c.tiltAngle - i / 3) * 15;

                if (c.y > canvas.height) {
                    confetti[i] = {
                        ...c,
                        x: Math.random() * canvas.width,
                        y: -20,
                    };
                }
            });

            animationId = requestAnimationFrame(draw);
        };

        draw();

        const timeout = setTimeout(() => {
            cancelAnimationFrame(animationId);
        }, 5000);

        return () => {
            cancelAnimationFrame(animationId);
            clearTimeout(timeout);
        };
    }, [trigger]);

    if (!trigger) return null;

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-50"
        />
    );
};
