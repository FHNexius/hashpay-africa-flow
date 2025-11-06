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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden particle-bg">
        <AnimatedGlobe />
        <FloatingOrbs />
        <DecorativeShapes />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div className="max-w-5xl mx-auto text-center space-y-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-tight text-foreground">
                Stablecoin Infrastructure for{" "}
                <span className="text-gradient animate-gradient">Sub-Saharan Africa</span>
              </h1>
            </motion.div>
            
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg sm:text-xl text-muted-foreground font-body max-w-3xl mx-auto">
              Licensed FX rails connecting global liquidity to African markets with instant settlement and compliance.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center pt-4" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <Link to="/contact">
                <RippleButton size="lg" variant="default" className="text-base px-10 py-6">
                  Contact Sales
                  <ArrowRight className="w-5 h-5" />
                </RippleButton>
              </Link>
              <Link to="/platform">
                <RippleButton size="lg" variant="outline" className="text-base px-10 py-6">
                  View Platform
                </RippleButton>
              </Link>
            </motion.div>

            {/* Inline Trust Badges */}
            <motion.div className="flex flex-wrap justify-center gap-3 pt-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
              {[{ icon: Shield, label: "Licensed FX — Ethiopia" }, { icon: Lock, label: "SOC 2 Certified" }, { icon: CheckCircle2, label: "AML/CFT Compliant" }].map((badge, idx) => (
                <div key={idx} className="flex items-center space-x-2 bg-card/50 border border-border px-4 py-2 rounded-full text-sm">
                  <badge.icon className="w-4 h-4 text-primary" />
                  <span className="font-body text-muted-foreground">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <CurvedDivider />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { value: "$50M+", label: "Monthly Volume" },
              { value: "100+", label: "Institutions" },
              { value: "15+", label: "Countries" },
              { value: "99.9%", label: "Uptime" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="text-4xl font-heading font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-body">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                className="p-6 bg-card border border-border rounded-xl hover:border-primary/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-heading font-bold mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-body">{feature.desc}</p>
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
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-primary/5 to-secondary border border-primary/20 rounded-2xl text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-foreground">
              Ready to Get Started?
            </h2>
            
            <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
              Connect your institution to compliant stablecoin infrastructure
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <RippleButton size="lg" variant="default" className="px-10 py-6">
                  Contact Sales
                  <ArrowRight className="w-5 h-5" />
                </RippleButton>
              </Link>
              <Link to="/platform">
                <RippleButton size="lg" variant="outline" className="px-10 py-6">
                  View Platform
                </RippleButton>
              </Link>
            </div>

            <div className="pt-4">
              <a href="mailto:admin@hashpayremit.com" className="text-muted-foreground hover:text-primary transition-colors">
                admin@hashpayremit.com
              </a>
            </div>
          </div>
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