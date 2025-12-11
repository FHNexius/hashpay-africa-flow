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
    { icon: Shield, title: "Security", desc: "Industry-standard security practices protecting every transaction and operation." },
    { icon: Target, title: "Compliance", desc: "Working with regulatory experts in both the U.S. and Ethiopia." },
    { icon: Users, title: "Transparency", desc: "Clear operations, audit trails, and open communication with partners." },
    { icon: Globe, title: "Innovation", desc: "Building infrastructure to serve evolving financial needs." },
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
              HashPay LLC is a U.S.-based financial technology company building 
              stablecoin infrastructure for Ethiopia and beyond.
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
                    We exist to bridge the gap between global liquidity and local economies in Ethiopia. 
                    By connecting businesses to authorized on-ramp and off-ramp partners, we enable banks, fintechs, 
                    corporates, and organizations to move and preserve value instantly — without the friction of 
                    traditional cross-border systems.
                  </p>
                  <p>
                    HashPay LLC is headquartered in Burnsville, Minnesota, USA, and operates in Addis Ababa, Ethiopia. 
                    We are building compliant pathways and working with regulatory advisors to ensure every transaction 
                    meets industry standards.
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
                    className="w-20 h-20 rounded-2xl gradient-accent flex items-center justify-center mx-auto"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <value.icon className="w-10 h-10 text-primary" />
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

      {/* Why Ethiopia */}
      <section className="py-24 bg-card relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <h2 className="text-5xl font-heading font-bold leading-tight">
                  Why <span className="text-gradient">Ethiopia?</span>
                </h2>
                <div className="space-y-6 text-lg text-foreground/90 font-body leading-relaxed">
                  <p>
                    Ethiopia represents one of the fastest-growing economies in Africa, yet faces 
                    significant challenges in cross-border payments, currency preservation, and access to global 
                    financial infrastructure.
                  </p>
                  <p>
                    Traditional banking systems are often slow, expensive, and limited in operating hours. 
                    Stablecoins like USDC and USDT offer immediate benefits: instant settlement, value preservation, 
                    24/7 availability, and seamless integration with both traditional and digital financial systems.
                  </p>
                  <p>
                    HashPay bridges this gap by connecting local fiat economies to global stablecoin liquidity 
                    through authorized banking and payout partners.
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
                  desc: "We work with regulatory experts in both the U.S. and Ethiopia to build compliant pathways for every transaction."
                },
                {
                  icon: Building,
                  title: "Partner Network",
                  desc: "We connect to authorized banking and payout partners, maintaining compliant relationships with on-ramp and off-ramp service providers."
                },
                {
                  icon: Zap,
                  title: "Simple & Secure",
                  desc: "We follow industry-standard security practices and focus on building straightforward, reliable infrastructure for our partners."
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

      {/* Company Info */}
      <section className="py-24 bg-card relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <GlassPanel hover={false} className="p-12 space-y-8">
                <h2 className="text-4xl font-heading font-bold text-gradient">Company Information</h2>
                <div className="space-y-6 text-lg text-foreground/90 font-body leading-relaxed">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Headquarters</h3>
                      <p className="text-muted-foreground">
                        HashPay LLC<br />
                        1000 E 146th St, Suite 104<br />
                        Burnsville, MN 55337<br />
                        United States
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Operations</h3>
                      <p className="text-muted-foreground">
                        United States<br />
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-3">Stablecoin Support</h3>
                    <p className="text-muted-foreground">
                      We support USDC (Circle) and USDT (Tether) for all FX and settlement operations.
                    </p>
                  </div>
                </div>
              </GlassPanel>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
