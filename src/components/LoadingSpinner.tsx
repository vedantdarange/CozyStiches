import { motion } from 'framer-motion';

export const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-64">
            <motion.div
                className="relative"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-sage to-terracotta opacity-30" />
                <motion.div
                    className="absolute inset-0 rounded-full border-4 border-transparent border-t-sage"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute -top-2 -left-2 w-5 h-5 bg-dustyRose rounded-full"
                    animate={{ y: [0, -5, 0], x: [0, 2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                />
            </motion.div>
        </div>
    );
};
