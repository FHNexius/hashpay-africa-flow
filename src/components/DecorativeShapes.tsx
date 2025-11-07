import { motion } from "framer-motion";

const DecorativeShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top Right Corner Shape */}
      <motion.div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-4 border-primary/10"
        style={{ 
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30, 
          repeat: Infinity, 
          ease: "linear",
        }}
      />
      
      {/* Bottom Left Corner Shape */}
      <motion.div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full border-4 border-yellow-accent/10"
        style={{ 
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 40, 
          repeat: Infinity, 
          ease: "linear",
        }}
      />

      {/* Floating Dots - Reduced on mobile */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/20 hidden md:block"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: 'translateZ(0)',
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.02]" />
    </div>
  );
};

export default DecorativeShapes;
