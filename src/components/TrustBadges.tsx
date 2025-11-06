import { motion } from "framer-motion";
import { Shield, Award, Lock, CheckCircle2, FileCheck, Globe2 } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Licensed FX Bureau",
      subtitle: "Ethiopia NBE 2024",
    },
    {
      icon: Award,
      title: "MSB Compliant",
      subtitle: "USA Standards",
    },
    {
      icon: Lock,
      title: "SOC 2 Type II",
      subtitle: "Security Certified",
    },
    {
      icon: FileCheck,
      title: "AML/CFT",
      subtitle: "Fully Compliant",
    },
    {
      icon: CheckCircle2,
      title: "ISO 27001",
      subtitle: "Information Security",
    },
    {
      icon: Globe2,
      title: "OFAC Compliant",
      subtitle: "Global Standards",
    },
  ];

  return (
    <div className="py-16 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
            Trusted & Certified
          </h3>
          <p className="text-muted-foreground">
            Industry-leading compliance and security standards
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              className="relative group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6 bg-card border border-border rounded-xl text-center hover:border-primary/30 transition-all shadow-sm hover:shadow-md">
                <motion.div
                  className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <badge.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h4 className="text-sm font-heading font-semibold text-foreground mb-1">
                  {badge.title}
                </h4>
                <p className="text-xs text-muted-foreground">{badge.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;
