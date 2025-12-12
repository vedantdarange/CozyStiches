"use client";
import { motion } from "framer-motion";

export const ProgressBar = ({
    currentStep,
    totalSteps,
    steps,
}: {
    currentStep: number;
    totalSteps: number;
    steps: string[];
}) => {
    return (
        <div className="w-full mb-8">
            {/* Progress Bar */}
            <div className="relative">
                <div className="h-2 bg-sage/20 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-sage to-terracotta"
                        initial={{ width: 0 }}
                        animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                </div>
            </div>

            {/* Step Labels */}
            <div className="flex justify-between mt-4">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <motion.div
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${index < currentStep
                                    ? "bg-sage text-cream"
                                    : index === currentStep
                                        ? "bg-terracotta text-cream"
                                        : "bg-sage/20 text-sage"
                                }`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {index < currentStep ? "✓" : index + 1}
                        </motion.div>
                        <span
                            className={`text-xs mt-2 ${index <= currentStep ? "text-clay font-medium" : "text-sage/60"
                                }`}
                        >
                            {step}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};
