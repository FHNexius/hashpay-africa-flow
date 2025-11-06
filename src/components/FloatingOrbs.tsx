import { motion } from "framer-motion";

const FloatingOrbs = () => {
  const orbs = [
    {
      size: 400,
      left: "10%",
      top: "20%",
      delay: 0,
      duration: 20,
      color: "hsl(var(--primary))",
    },
    {
      size: 300,
      left: "70%",
      top: "60%",
      delay: 2,
      duration: 25,
      color: "hsl(var(--yellow-accent))",
    },
    {
      size: 350,
      left: "80%",
      top: "10%",
      delay: 4,
      duration: 22,
      color: "hsl(var(--primary))",
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full blur-3xl opacity-20"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.left,
            top: orb.top,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;
