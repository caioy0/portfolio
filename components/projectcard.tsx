import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({ title, description, tech, image, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <motion.div
      className="relative border-2 border-[var(--neon-cyan)] bg-[var(--card)] overflow-hidden group"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-cyan)]/0 via-[var(--neon-cyan)]/5 to-[var(--neon-magenta)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6 relative z-10">
        <h3 className="text-[var(--neon-cyan)] mb-3 tracking-wider">
          {title}
        </h3>

        <p className="text-[var(--foreground)]/80 mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span
              key={i}
              className="px-3 py-1 border border-[var(--neon-magenta)] text-[var(--neon-magenta)] bg-[var(--neon-magenta)]/10"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--neon-yellow)] hover:text-[var(--neon-cyan)] transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>Code</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--neon-yellow)] hover:text-[var(--neon-cyan)] transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--neon-cyan)] opacity-5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[var(--neon-magenta)] opacity-5 blur-3xl" />
    </motion.div>
  );
}
