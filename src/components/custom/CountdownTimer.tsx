"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CountdownTimer = ({
    targetDate,
    onComplete,
    className,
}: {
    targetDate: Date;
    onComplete?: () => void;
    className?: string;
}) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +targetDate - +new Date();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                if (onComplete) onComplete();
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate, onComplete]);

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
        <motion.div
            key={value}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center"
        >
            <motion.div
                className="bg-terracotta text-cream rounded-xl px-4 py-3 min-w-[70px] text-center shadow-lg"
                whileHover={{ scale: 1.05 }}
            >
                <span className="text-3xl font-bold font-serif">{value.toString().padStart(2, '0')}</span>
            </motion.div>
            <span className="text-sage text-sm mt-2 font-medium">{label}</span>
        </motion.div>
    );

    return (
        <div className={`flex gap-3 justify-center items-center ${className}`}>
            <TimeUnit value={timeLeft.days} label="Days" />
            <span className="text-2xl text-clay font-bold">:</span>
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <span className="text-2xl text-clay font-bold">:</span>
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <span className="text-2xl text-clay font-bold">:</span>
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
    );
};
