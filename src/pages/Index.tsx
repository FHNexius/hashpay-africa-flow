import { ArrowRight, Zap, Clock, Shield, Globe, Vault, Network, Building2, Heart, Briefcase, TrendingUp, Users, Link2, CheckCircle2, Lock, FileCheck, Eye } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedGlobe from "@/components/AnimatedGlobe";
import GlassPanel from "@/components/GlassPanel";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import RippleButton from "@/components/RippleButton";
import FlowStep from "@/components/FlowStep";
import UseCaseCarousel from "@/components/UseCaseCarousel";
import AfricaMapNetwork from "@/components/AfricaMapNetwork";
import CurvedDivider from "@/components/CurvedDivider";
import dashboardMockup from "@/assets/dashboard-mockup.jpg";

const Index = () => {
  const useCases = [
    {
      icon: Building2,
      title: "Banks & FX Desks",
      description: "Park reserves in stablecoins to hedge volatility and retain value. Access institutional-grade custody and instant liquidity."
    },
    {
      icon: Users,
      title: "Fintechs & PSPs",
      description: "Integrate our rails to enable stablecoin settlement. Embed compliant infrastructure directly into your platform."
    },
    {
      icon: Briefcase,
      title: "Corporates & Enterprises",
      description: "Manage cross-border treasury in real time with seamless stablecoin conversions and 24/7 availability."
    },
    {
      icon: Heart,
      title: "NGOs & Aid Organizations",
      description: "Disburse funds instantly and transparently with full audit trails and compliance monitoring."
    },
    {
      icon: TrendingUp,
      title: "Liquidity Partners",
      description: "Provide or access stablecoin liquidity seamlessly through our unified infrastructure layer."
    },
    {
      icon: Network,
      title: "Payment Processors",
      description: "Enable instant cross-border settlements with minimal fees and maximum speed for your merchants."
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Immersive with Animated Network */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden particle-bg">
        <AnimatedGlobe />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div 
            className="max-w-5xl mx-auto text-center space-y-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-heading font-bold leading-tight tracking-tight">
                The Stablecoin Infrastructure Powering{" "}
                <span className="text-gradient animate-gradient">Sub-Saharan Africa</span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl sm:text-2xl text-foreground/90 font-body max-w-4xl mx-auto leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              HashPay provides compliant on-ramp, off-ramp, and custody rails that connect global liquidity 
              to African economies — empowering banks, fintechs, and organizations to move and preserve 
              value instantly.
            </motion.p>

            {/* Animated Stats */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <AnimatedCounter 
                end={1} 
                suffix="-Minute" 
                label="Settlement" 
                icon={<Zap className="w-8 h-8 text-navy-deep" />}
              />
              <AnimatedCounter 
                end={24} 
                suffix="/7" 
                label="Operations" 
                icon={<Clock className="w-8 h-8 text-navy-deep" />}
              />
              <AnimatedCounter 
                end={100} 
                suffix="%" 
                label="Compliance" 
                icon={<Shield className="w-8 h-8 text-navy-deep" />}
              />
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <RippleButton size="lg" className="text-lg px-12 py-8">
                Contact Sales
                <ArrowRight className="w-5 h-5" />
              </RippleButton>
              <RippleButton size="lg" className="text-lg px-12 py-8 bg-transparent border-2 border-primary text-primary hover:bg-primary/10">
                View Platform
              </RippleButton>
            </motion.div>
          </motion.div>
        </div>

        <CurvedDivider />
      </section>

      {/* How It Works - Sequential Flow Animation */}
      <section className="py-32 bg-card relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-5xl sm:text-6xl font-heading font-bold">
                The <span className="text-gradient">HashPay Network</span> Works
              </h2>
              <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
                Three seamless steps connect traditional finance to stablecoin infrastructure
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <FlowStep
              number="01"
              title="Connect"
              description="API / Bank integration panel with automated network connectivity and compliance verification."
              icon={Link2}
              delay={0}
            />
            <FlowStep
              number="02"
              title="Convert"
              description="Seamless fiat ↔ stablecoin exchange with built-in AML/KYC screening and real-time FX pricing."
              icon={Network}
              delay={0.2}
            />
            <FlowStep
              number="03"
              title="Settle & Custody"
              description="Instant payouts or secure asset parking in institutional-grade custody with multi-signature protection."
              icon={Vault}
              delay={0.4}
            />
          </div>
        </div>

        <CurvedDivider flip />
      </section>

      {/* Platform Overview - Glassmorphic Dashboard */}
      <section className="py-32 relative overflow-hidden particle-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <h2 className="text-5xl sm:text-6xl font-heading font-bold leading-tight">
                  Built for Institutional{" "}
                  <span className="text-gradient">Performance</span>
                </h2>
                
                <div className="space-y-6">
                  {[
                    "Unified API infrastructure for seamless integration",
                    "Modular on-ramp, off-ramp, and custody services",
                    "Real-time FX engine with risk-scoring algorithms",
                    "Bank-grade security with multi-tier custody",
                    "Smart liquidity routing for instant settlements",
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start space-x-4 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <CheckCircle2 className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                      </motion.div>
                      <span className="text-lg font-body text-foreground/90 group-hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <RippleButton className="mt-8">
                  Request Platform Access
                  <ArrowRight className="w-5 h-5" />
                </RippleButton>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <GlassPanel className="p-4 overflow-hidden">
                <motion.img
                  src={dashboardMockup}
                  alt="HashPay Platform Dashboard"
                  className="rounded-xl w-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </GlassPanel>
            </ScrollReveal>
          </div>
        </div>

        <CurvedDivider />
      </section>

      {/* Why HashPay - Animated Tiles */}
      <section className="py-32 bg-card relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-5xl sm:text-6xl font-heading font-bold">
                Why Institutions Choose{" "}
                <span className="text-gradient">HashPay</span>
              </h2>
              <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
                Enterprise-grade infrastructure built for African financial innovation
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: Zap, title: "Instant Settlement", desc: "Complete transactions in under 1 minute with real-time processing and confirmation." },
              { icon: Clock, title: "24/7 Availability", desc: "Never stop operating. Our infrastructure runs continuously regardless of banking hours." },
              { icon: Shield, title: "Regulated Compliance", desc: "Built under U.S. MSB standards with full AML/CFT and OFAC adherence." },
              { icon: Globe, title: "Built for Africa", desc: "Optimized infrastructure designed specifically for Sub-Saharan regional requirements." },
              { icon: Vault, title: "Custody & Preservation", desc: "Institutions can park currency in stablecoins to maintain value and hedge inflation." },
              { icon: Network, title: "Modular Access", desc: "Use on-ramp, off-ramp, or custody services independently or combined." },
            ].map((feature, idx) => (
              <GlassPanel key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="space-y-4"
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-navy-deep" />
                  </motion.div>
                  <h3 className="text-2xl font-heading font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground font-body leading-relaxed">{feature.desc}</p>
                </motion.div>
              </GlassPanel>
            ))}
          </div>
        </div>

        <CurvedDivider flip />
      </section>

      {/* Compliance Section - Trust Shield */}
      <section className="py-32 relative overflow-hidden particle-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center space-y-8 mb-16">
                <h2 className="text-5xl sm:text-6xl font-heading font-bold">
                  Built for Regulation. Backed by{" "}
                  <span className="text-gradient">Integrity</span>
                </h2>
                <p className="text-xl text-foreground/90 font-body leading-relaxed max-w-3xl mx-auto">
                  HashPay operates under U.S. MSB registration and partners with licensed transmitters 
                  to maintain AML/CFT, OFAC, and FinCEN standards. Every transaction is monitored, 
                  logged, and audit-ready.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { icon: Shield, label: "Compliance" },
                { icon: FileCheck, label: "Audit" },
                { icon: Lock, label: "Encryption" },
                { icon: Eye, label: "24/7 Monitoring" },
              ].map((badge, idx) => (
                <GlassPanel key={idx} delay={idx * 0.1} className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="space-y-4"
                  >
                    <motion.div
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(253, 198, 57, 0.3)",
                          "0 0 40px rgba(253, 198, 57, 0.5)",
                          "0 0 20px rgba(253, 198, 57, 0.3)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center"
                    >
                      <badge.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <p className="font-body font-semibold">{badge.label}</p>
                  </motion.div>
                </GlassPanel>
              ))}
            </div>
          </div>
        </div>

        <CurvedDivider />
      </section>

      {/* Use Cases - Cinematic Carousel */}
      <section className="py-32 bg-card relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-5xl sm:text-6xl font-heading font-bold">
                Built For <span className="text-gradient">Your Needs</span>
              </h2>
              <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
                Flexible infrastructure serving diverse financial use cases across the ecosystem
              </p>
            </div>
          </ScrollReveal>

          <UseCaseCarousel useCases={useCases} />
        </div>

        <CurvedDivider flip />
      </section>

      {/* About Section - Africa Network Map */}
      <section className="py-32 relative overflow-hidden particle-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <ScrollReveal direction="left">
              <AfricaMapNetwork />
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-8">
                <h2 className="text-5xl sm:text-6xl font-heading font-bold leading-tight">
                  The Vision Behind the{" "}
                  <span className="text-gradient">Infrastructure</span>
                </h2>
                
                <div className="space-y-6">
                  <p className="text-xl text-foreground/90 font-body leading-relaxed">
                    Founded in 2025, HashPay LLC is a U.S.-based financial technology company 
                    focused on stablecoin infrastructure for Sub-Saharan Africa.
                  </p>
                  <p className="text-xl text-foreground/90 font-body leading-relaxed">
                    We connect traditional finance to blockchain-based liquidity through secure, 
                    compliant rails that operate 24/7.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8">
                  {["Speed", "Compliance", "Transparency"].map((value, idx) => (
                    <motion.div
                      key={idx}
                      className="text-center space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      <motion.div
                        className="text-5xl font-mono font-bold text-gradient"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                      >
                        •
                      </motion.div>
                      <p className="font-heading font-semibold text-lg">{value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <CurvedDivider />
      </section>

      {/* Final CTA - Partner Section */}
      <section className="py-32 bg-gradient-to-br from-card via-background to-card relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <GlassPanel className="max-w-5xl mx-auto p-16 text-center space-y-10">
            <ScrollReveal>
              <h2 className="text-5xl sm:text-6xl font-heading font-bold">
                Partner with <span className="text-gradient">HashPay</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-2xl text-foreground/90 font-body max-w-3xl mx-auto leading-relaxed">
                Connect your institution to compliant stablecoin infrastructure for instant 
                global settlement.
              </p>
            </ScrollReveal>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <RippleButton size="lg" className="text-xl px-16 py-8">
                Contact Sales
                <ArrowRight className="w-6 h-6" />
              </RippleButton>
              <RippleButton size="lg" className="text-xl px-16 py-8 bg-transparent border-2 border-primary text-primary hover:bg-primary/10">
                Request Demo
                <ArrowRight className="w-6 h-6" />
              </RippleButton>
            </motion.div>

            <motion.div 
              className="pt-8 text-muted-foreground font-body"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href="mailto:admin@hashpayremit.com" className="hover:text-primary transition-colors text-lg">
                admin@hashpayremit.com
              </a>
              <span className="mx-3">•</span>
              <span className="text-lg">Burnsville, MN</span>
            </motion.div>
          </GlassPanel>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
