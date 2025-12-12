"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }: { className?: string }) => {
    const beams = [
        { initialX: 10, translateX: 10, duration: 7, repeatDelay: 3, delay: 2 },
        { initialX: 600, translateX: 600, duration: 3, repeatDelay: 3, delay: 4 },
        { initialX: 100, translateX: 100, duration: 7, repeatDelay: 7, className: "h-6" },
        { initialX: 400, translateX: 400, duration: 5, repeatDelay: 14, delay: 4 },
        { initialX: 800, translateX: 800, duration: 11, repeatDelay: 2, className: "h-20" },
        { initialX: 1000, translateX: 1000, duration: 4, repeatDelay: 2, className: "h-12" },
        { initialX: 1200, translateX: 1200, duration: 6, repeatDelay: 4, delay: 2, className: "h-6" },
    ];

    return (
        <div
            className={cn(
                "absolute inset-0 h-full w-full overflow-hidden",
                className
            )}
        >
            {beams.map((beam, idx) => (
                <motion.div
                    key={`beam-${idx}`}
                    initial={{
                        translateY: "-200px",
                        translateX: beam.initialX + "px",
                    }}
                    animate={{
                        translateY: "1800px",
                        translateX: beam.translateX + "px",
                    }}
                    transition={{
                        duration: beam.duration,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                        delay: beam.delay || 0,
                        repeatDelay: beam.repeatDelay || 0,
                    }}
                    className={cn(
                        "absolute left-0 top-20 h-14 w-px rounded-full bg-gradient-to-t from-sage/0 via-sage/90 to-transparent",
                        beam.className
                    )}
                />
            ))}
        </div>
    );
};
