import { ArrowRight, Zap, Clock, Shield, Globe, Vault, Network, Building2, Heart, Briefcase, TrendingUp, Users, Link2, CheckCircle2, Lock, FileCheck, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import hashpayLogo from "@/assets/hashpay-logo.png";
import AnimatedGlobe from "@/components/AnimatedGlobe";
import GlassPanel from "@/components/GlassPanel";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import RippleButton from "@/components/RippleButton";
import FlowStep from "@/components/FlowStep";
import UseCaseCarousel from "@/components/UseCaseCarousel";
import AfricaMapNetwork from "@/components/AfricaMapNetwork";
import CurvedDivider from "@/components/CurvedDivider";
import FloatingOrbs from "@/components/FloatingOrbs";
import DecorativeShapes from "@/components/DecorativeShapes";
const Index = () => {
  const useCases = [{
    icon: Building2,
    title: "Banks & FX Desks",
    description: "Hedge and hold reserves in stablecoins; regulated FX with institutional custody, compliance, and treasury tools."
  }, {
    icon: Users,
    title: "Fintechs & PSPs",
    description: "Embed compliant stablecoin settlement with SDKs, webhooks, sandbox access, and reduced time-to-market."
  }, {
    icon: Briefcase,
    title: "Corporates & NGOs",
    description: "24/7 cross-border settlement with audit trails, multi-sig controls, and compliance reporting."
  }, {
    icon: Network,
    title: "Payment Processors",
    description: "Instant merchant FX and payouts with batched processing, automated reconciliation, and competitive rates."
  }, {
    icon: TrendingUp,
    title: "Liquidity Partners",
    description: "Provide or access stablecoin liquidity programmatically through institutional infrastructure."
  }];
  return <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary">
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'var(--gradient-mesh)' }} />
        </div>
        
        <AnimatedGlobe />
        <FloatingOrbs />
        <DecorativeShapes />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div className="max-w-6xl mx-auto text-center space-y-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <div className="inline-block mb-6">
                <motion.div 
                  className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <span className="text-sm font-semibold text-primary">Licensed & Regulated FX Infrastructure</span>
                </motion.div>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold leading-[1.1] text-foreground mb-6">
                Stablecoin Rails for{" "}
                <span className="relative inline-block">
                  <span className="text-gradient animate-gradient">Africa</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-yellow-accent rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.7, delay: 0.4 }} 
              className="text-xl sm:text-2xl text-muted-foreground font-body max-w-4xl mx-auto leading-relaxed"
            >
              Connect global liquidity to African markets with instant settlement, full compliance, and institutional-grade infrastructure.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6" 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Link to="/contact">
                <RippleButton size="lg" variant="default" className="text-lg px-12 py-7 shadow-primary">
                  Contact Sales
                  <ArrowRight className="w-5 h-5" />
                </RippleButton>
              </Link>
              <Link to="/platform">
                <RippleButton size="lg" variant="outline" className="text-lg px-12 py-7 border-2">
                  Explore Platform
                </RippleButton>
              </Link>
            </motion.div>

            {/* Enhanced Trust Badges */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 pt-8" 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              {[
                { icon: Shield, label: "Licensed FX Bureau", sub: "Ethiopia NBE" }, 
                { icon: Lock, label: "SOC 2 Type II", sub: "Certified" }, 
                { icon: CheckCircle2, label: "AML/CFT", sub: "Compliant" }
              ].map((badge, idx) => (
                <motion.div 
                  key={idx} 
                  className="glass-panel px-6 py-4 rounded-2xl group cursor-default"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <badge.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-semibold text-foreground">{badge.label}</div>
                      <div className="text-xs text-muted-foreground">{badge.sub}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <CurvedDivider />
      </section>


      {/* How It Works */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
                Three seamless steps from fiat to stablecoin
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <FlowStep number="01" title="Connect" description="Secure API or banking integration with automated compliance." icon={Link2} delay={0} />
            <FlowStep number="02" title="Convert" description="Real-time fiat ↔ stablecoin with 120s rate lock." icon={Network} delay={0.1} />
            <FlowStep number="03" title="Settle" description="Instant payouts or custody in Fireblocks MPC wallets." icon={Vault} delay={0.2} />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
                Why Choose <span className="text-gradient">HashPay</span>
              </h2>
              <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
                Enterprise infrastructure for African markets
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: "Instant Settlement", desc: "T+0 settlement with real-time confirmation" },
              { icon: Shield, title: "Licensed & Compliant", desc: "Regulated FX Bureau + AML/CFT aligned" },
              { icon: Vault, title: "Institutional Custody", desc: "Fireblocks MPC wallets with multi-tier security" },
              { icon: Globe, title: "Built for Africa", desc: "Optimized for Sub-Saharan corridors" },
              { icon: Network, title: "Unified API", desc: "Event-sourced ledger and reconciliation" },
              { icon: Lock, title: "Bank-Grade Security", desc: "24/7 monitoring and encryption" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div className="group p-6 bg-card border-2 border-border rounded-xl hover:border-primary/40 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="w-6 h-6 text-primary" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-heading font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-secondary relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
                Who We Serve
              </h2>
              <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
                Flexible infrastructure for diverse financial needs
              </p>
            </div>
          </ScrollReveal>

          <UseCaseCarousel useCases={useCases} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <FloatingOrbs />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative p-16 rounded-3xl overflow-hidden">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-yellow-accent/10" />
              <div className="absolute inset-0 backdrop-blur-sm" />
              
              {/* Border gradient */}
              <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br from-primary via-yellow-accent to-primary">
                <div className="h-full w-full bg-background rounded-3xl" />
              </div>
              
              <div className="relative z-10 text-center space-y-8">
                <div className="space-y-4">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-5xl sm:text-6xl font-heading font-bold text-foreground">
                      Ready to <span className="text-gradient">Transform</span> Your Payment Infrastructure?
                    </h2>
                  </motion.div>
                  
                  <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
                    Join leading financial institutions building on compliant stablecoin rails
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
                  <Link to="/contact">
                    <RippleButton size="lg" variant="default" className="text-lg px-14 py-7 shadow-primary">
                      Contact Sales
                      <ArrowRight className="w-5 h-5" />
                    </RippleButton>
                  </Link>
                  <Link to="/platform">
                    <RippleButton size="lg" variant="outline" className="text-lg px-14 py-7 border-2">
                      Explore Platform
                    </RippleButton>
                  </Link>
                </div>

                <div className="pt-8 flex items-center justify-center gap-8 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>No setup fees</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Fast integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>24/7 support</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-border/50">
                  <a 
                    href="mailto:admin@hashpayremit.com" 
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    <span>Or email us at</span>
                    <span className="text-primary">admin@hashpayremit.com</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background relative overflow-hidden">
        {/* Animated blue accent line */}
        <motion.div className="absolute top-0 left-0 h-0.5 bg-gradient-primary" initial={{
        width: 0
      }} whileInView={{
        width: "100%"
      }} viewport={{
        once: true
      }} transition={{
        duration: 2,
        ease: "easeInOut"
      }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <motion.div className="space-y-6" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <img src={hashpayLogo} alt="HashPay" className="h-32" />
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Stablecoin infrastructure for Sub-Saharan Africa
              </p>
            </motion.div>

            {/* Company */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.1
          }}>
              <h3 className="font-heading font-semibold mb-6 text-lg text-foreground">Company</h3>
              <ul className="space-y-3">
                {[{
                name: "Platform",
                path: "/platform"
              }, {
                name: "Solutions",
                path: "/solutions"
              }, {
                name: "Security & Compliance",
                path: "/security-compliance"
              }, {
                name: "Contact",
                path: "/contact"
              }].map(link => <li key={link.path}>
                    <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                      {link.name}
                    </Link>
                  </li>)}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }}>
              <h3 className="font-heading font-semibold mb-6 text-lg text-foreground">Services</h3>
              <ul className="space-y-3">
                {[{
                name: "On-Ramp",
                path: "/platform"
              }, {
                name: "Off-Ramp",
                path: "/platform"
              }, {
                name: "Custody",
                path: "/platform"
              }, {
                name: "FX Engine",
                path: "/platform"
              }].map(link => <li key={link.path}>
                    <Link to={link.path} className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                      {link.name}
                    </Link>
                  </li>)}
              </ul>
            </motion.div>

            {/* Developers */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }}>
              <h3 className="font-heading font-semibold mb-6 text-lg text-foreground">Developers</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/developers" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                    API Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/developers" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                    Sandbox Access
                  </Link>
                </li>
                <li className="text-sm text-muted-foreground/50 font-body">
                  Changelog <span className="text-xs">(Coming Soon)</span>
                </li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }}>
              <h3 className="font-heading font-semibold mb-6 text-lg text-foreground">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:admin@hashpayremit.com" className="text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                    admin@hashpayremit.com
                  </a>
                </li>
                <li className="text-sm text-muted-foreground font-body">
                  Addis Ababa, Ethiopia
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground font-body mb-3">Legal</p>
                <ul className="space-y-2">
                  <li>
                    <Link to="/legal/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors font-body">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/legal/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors font-body">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div className="mt-16 pt-8 border-t border-border" initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }}>
            <div className="text-center">
              <p className="text-sm text-muted-foreground font-body">
                © {new Date().getFullYear()} HashPay LLC. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>;
};
export default Index;