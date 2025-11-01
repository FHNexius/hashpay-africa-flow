import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

const GlassPanel = ({ children, className, delay = 0, hover = true }: GlassPanelProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      className={cn(
        "glass-panel rounded-2xl p-8 relative overflow-hidden group",
        hover && "glow-hover cursor-pointer",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-gold-radial opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlassPanel;
