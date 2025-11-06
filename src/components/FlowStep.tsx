import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import GlassPanel from "./GlassPanel";

interface FlowStepProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  delay: number;
}

const FlowStep = ({ number, title, description, icon: Icon, delay }: FlowStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="relative"
    >
      <GlassPanel hover={false} className="h-full">
        {/* Animated number background */}
        <motion.div
          className="absolute -top-4 -right-4 text-[120px] font-mono font-bold text-primary/5"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {number}
        </motion.div>

        <div className="relative space-y-6">
          {/* Icon with pulse animation */}
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(255, 221, 0, 0.3)",
                "0 0 40px rgba(255, 221, 0, 0.5)",
                "0 0 20px rgba(255, 221, 0, 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center"
          >
            <Icon className="w-10 h-10 text-primary-foreground" />
          </motion.div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-mono font-bold text-primary">{number}</span>
              <h3 className="text-2xl font-heading font-bold">{title}</h3>
            </div>
            <p className="text-muted-foreground font-body text-lg leading-relaxed">
              {description}
            </p>
          </div>

          {/* Connecting line (except for last item) */}
          <motion.div
            className="absolute top-10 -right-[50%] w-full h-0.5 bg-gradient-to-r from-primary to-transparent hidden lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: delay + 0.5 }}
          />
        </div>
      </GlassPanel>
    </motion.div>
  );
};

export default FlowStep;
