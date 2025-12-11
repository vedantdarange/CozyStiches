import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface YarnButtonProps extends MotionProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    className?: string;
    onClick?: () => void;
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export const YarnButton = ({ children, variant = 'primary', className = '', onClick, size = 'md', type = 'button', disabled = false, ...props }: YarnButtonProps) => {
    const baseClasses = "rounded-full font-medium transition-all duration-300 font-sans relative overflow-hidden";

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3',
        lg: 'px-8 py-4 text-lg'
    };

    const variants = {
        primary: "bg-terracotta text-cream hover:bg-clay shadow-lg hover:shadow-xl",
        secondary: "bg-sage text-cream hover:bg-sage/90 shadow-md hover:shadow-lg",
        outline: "border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-cream"
    };

    return (
        <motion.button
            whileHover={{ scale: disabled ? 1 : 1.05, y: disabled ? 0 : -2 }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
            className={`${baseClasses} ${sizeClasses[size]} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
            {...props}
        >
            <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: disabled ? '-100%' : '100%' }}
                transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
};
