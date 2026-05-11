import { motion } from "motion/react";

interface SkillChipProps {
  skill: string;
  index: number;
}

export function SkillChip({ skill, index }: SkillChipProps) {
  const colors = [
    "var(--neon-cyan)",
    "var(--neon-magenta)",
    "var(--neon-yellow)",
    "var(--neon-green)"
  ];

  const color = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.1 }}
      className="relative group"
    >
      <div
        className="px-6 py-3 border-2 bg-transparent cursor-default"
        style={{
          borderColor: color,
          color: color,
          boxShadow: `0 0 10px ${color}40`
        }}
      >
        <span className="relative z-10">{skill}</span>
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
}
