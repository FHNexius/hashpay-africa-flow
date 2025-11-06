import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import { DollarSign, Users, Globe2, TrendingUp } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: DollarSign,
      value: 50,
      suffix: "M+",
      label: "Transaction Volume",
      description: "Processed monthly",
    },
    {
      icon: Users,
      value: 100,
      suffix: "+",
      label: "Active Institutions",
      description: "Trust HashPay",
    },
    {
      icon: Globe2,
      value: 15,
      suffix: "+",
      label: "Countries Served",
      description: "Across Sub-Saharan Africa",
    },
    {
      icon: TrendingUp,
      value: 99.9,
      suffix: "%",
      label: "Uptime",
      description: "24/7 reliability",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="relative p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all shadow-sm hover:shadow-lg">
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-7 h-7 text-primary" />
                </motion.div>

                {/* Value */}
                <div className="mb-2">
                  <span className="text-5xl font-heading font-bold text-foreground">
                    <AnimatedCounter end={stat.value} duration={2} label="" />
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-lg font-heading font-semibold mb-1 text-foreground">
                  {stat.label}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground">{stat.description}</p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
