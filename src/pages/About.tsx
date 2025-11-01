import { Shield, Target, Users, Globe, Zap, Building } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassPanel from "@/components/GlassPanel";
import ScrollReveal from "@/components/ScrollReveal";
import CurvedDivider from "@/components/CurvedDivider";
import AfricaMapNetwork from "@/components/AfricaMapNetwork";

const About = () => {
  const values = [
    { icon: Shield, title: "Security", desc: "Bank-grade security protecting every transaction and custody operation." },
    { icon: Target, title: "Compliance", desc: "Full regulatory adherence under U.S. MSB standards and international frameworks." },
    { icon: Users, title: "Transparency", desc: "Clear operations, full audit trails, and open communication with partners." },
    { icon: Globe, title: "Innovation", desc: "Continuous improvement of infrastructure to serve evolving financial needs." },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden particle-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-5xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl sm:text-7xl font-heading font-bold leading-tight">
              Building the Future of{" "}
              <span className="text-gradient animate-gradient">Financial Infrastructure</span>
            </h1>
            <p className="text-2xl text-foreground/90 font-body leading-relaxed">
              HashPay LLC is a U.S.-registered financial technology company pioneering compliant 
              stablecoin infrastructure for Sub-Saharan Africa.
            </p>
          </motion.div>
        </div>

        <CurvedDivider />
      </section>

      {/* Mission */}
      <section className="py-24 bg-card relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <GlassPanel hover={false} className="p-12 space-y-8">
                <h2 className="text-4xl font-heading font-bold text-gradient">Our Mission</h2>
                <div className="space-y-6 text-lg text-foreground/90 font-body leading-relaxed">
                  <p>
                    We exist to bridge the gap between global liquidity and local economies across Sub-Saharan Africa. 
                    By providing regulated on-ramp, off-ramp, and custody infrastructure, we enable banks, fintechs, 
                    corporates, and organizations to move and preserve value instantly — without the friction of 
                    traditional cross-border systems.
                  </p>
                  <p>
                    HashPay operates under U.S. Money Services Business registration, ensuring every transaction 
                    meets the highest standards of compliance, security, and transparency.
                  </p>
                </div>
              </GlassPanel>
            </ScrollReveal>
          </div>
        </div>

        <CurvedDivider flip />
      </section>

      {/* Values */}
      <section className="py-24 relative overflow-hidden particle-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-5xl font-heading font-bold">
                Our <span className="text-gradient">Values</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, idx) => (
              <GlassPanel key={idx} delay={idx * 0.1} className="text-center">
                <motion.div
                  className="space-y-6"
                  whileHover={{ y: -8 }}
                >
                  <motion.div
                    className="w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center mx-auto"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="w-10 h-10 text-navy-deep" />
                  </motion.div>
                  <h3 className="text-2xl font-heading font-bold">{value.title}</h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              </GlassPanel>
            ))}
          </div>
        </div>

        <CurvedDivider />
      </section>

      {/* Why Africa */}
      <section className="py-24 bg-card relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <h2 className="text-5xl font-heading font-bold leading-tight">
                  Why <span className="text-gradient">Sub-Saharan Africa?</span>
                </h2>
                <div className="space-y-6 text-lg text-foreground/90 font-body leading-relaxed">
                  <p>
                    Sub-Saharan Africa represents one of the world's fastest-growing economic regions, yet faces 
                    significant challenges in cross-border payments, currency preservation, and access to global 
                    financial infrastructure.
                  </p>
                  <p>
                    Traditional banking systems are often slow, expensive, and limited in operating hours. 
                    Stablecoins offer an immediate solution: instant settlement, value preservation, 24/7 availability, 
                    and seamless integration with both traditional and digital financial systems.
                  </p>
                  <p>
                    HashPay bridges this gap by providing the compliant infrastructure layer that connects local 
                    fiat economies to global stablecoin liquidity.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <GlassPanel hover={false} className="h-[500px]">
                <AfricaMapNetwork />
              </GlassPanel>
            </ScrollReveal>
          </div>
        </div>

        <CurvedDivider flip />
      </section>

      {/* Approach */}
      <section className="py-24 relative overflow-hidden particle-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-16">
            <ScrollReveal>
              <div className="text-center">
                <h2 className="text-5xl font-heading font-bold mb-8">
                  Our <span className="text-gradient">Approach</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              {[
                {
                  icon: Shield,
                  title: "Compliance First",
                  desc: "Every feature we build starts with regulatory compliance, ensuring partners and customers operate within established legal frameworks."
                },
                {
                  icon: Building,
                  title: "Modular Infrastructure",
                  desc: "Organizations can use our on-ramp, off-ramp, and custody services independently or together, integrating only what they need."
                },
                {
                  icon: Zap,
                  title: "Partnership Focus",
                  desc: "We work closely with banks, licensed money transmitters, and regulated entities to ensure seamless, compliant operations across all jurisdictions."
                },
              ].map((approach, idx) => (
                <GlassPanel key={idx} delay={idx * 0.15} hover={false}>
                  <motion.div
                    className="flex flex-col md:flex-row items-start gap-6"
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <approach.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-2xl font-heading font-semibold text-primary">
                        {approach.title}
                      </h3>
                      <p className="text-foreground/90 font-body text-lg leading-relaxed">
                        {approach.desc}
                      </p>
                    </div>
                  </motion.div>
                </GlassPanel>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
