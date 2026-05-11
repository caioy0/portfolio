import { motion } from "motion/react";
import { ReactNode } from "react";

interface NeonButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: "cyan" | "magenta" | "yellow";
    className?: string;
}

export function NeonButton({
    children,
    onClick,
    variant = "cyan",
    className = "",
}: NeonButtonProps) {
    const colors = {
        cyan: "border-[var(--neon-cyan)] text-[var(--neon-cyan)] shadow-[0_0_10px_var(--neon-cyan)] hover:shadow-[0_0_20px_var(--neon-cyan)]",
        magenta:
            "border-[var(--neon-magenta)] text-[var(--neon-magenta)] shadow-[0_0_10px_var(--neon-magenta)] hover:shadow-[0_0_20px_var(--neon-magenta)]",
        yellow: "border-[var(--neon-yellow)] text-[var(--neon-yellow)] shadow-[0_0_10px_var(--neon-yellow)] hover:shadow-[0_0_20px_var(--neon-yellow)]",
    };

    return (
        <motion.button
            onClick={onClick}
            className={`px-8 py-3 border-2 bg-transparent transition-all duration-300 relative overflow-hidden ${colors[variant]} ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <span className="relative z-10">{children}</span>
            <motion.div
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
            />
        </motion.button>
    );
}
