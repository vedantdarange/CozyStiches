import { motion } from 'framer-motion';
import { Droplet, Wind, Flame } from 'lucide-react';

export const CareInstructionsPage = () => {
    return (
        <div className="min-h-screen bg-cream pt-24 pb-12 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-serif text-5xl text-clay text-center mb-8"
                >
                    Care Instructions
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-linen rounded-2xl p-8 space-y-8"
                >
                    <div className="flex items-start gap-6">
                        <Droplet className="w-12 h-12 text-sage mt-1" />
                        <div>
                            <h2 className="font-serif text-2xl text-clay mb-2">Washing</h2>
                            <p className="text-sage">Hand wash cold with mild detergent. Do not wring or twist.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6">
                        <Wind className="w-12 h-12 text-terracotta mt-1" />
                        <div>
                            <h2 className="font-serif text-2xl text-clay mb-2">Drying</h2>
                            <p className="text-sage">Lay flat on a towel, reshape, and air dry away from direct sunlight.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6">
                        <Flame className="w-12 h-12 text-dustyRose mt-1" />
                        <div>
                            <h2 className="font-serif text-2xl text-clay mb-2">Ironing</h2>
                            <p className="text-sage">Do not iron. If needed, use a steamer on low heat.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
