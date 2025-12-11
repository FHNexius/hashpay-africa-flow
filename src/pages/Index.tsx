import { ArrowRight, Zap, Clock, Shield, Globe, Vault, Network, Building2, Heart, Briefcase, TrendingUp, Users, Link2, CheckCircle2, Lock, FileCheck, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import hashpayLogoLight from "@/assets/hashpay-logo.png";
import hashpayLogoDark from "@/assets/hashpay-logo-dark.png";
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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDarkMode();
    
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  const useCases = [{
    icon: Building2,
    title: "Banks & FX Desks",
    description: "Manage treasury operations with stablecoin reserves; compliant FX with secure custody and reporting tools."
  }, {
    icon: Users,
    title: "Fintechs & PSPs",
    description: "Embed compliant stablecoin settlement with simple APIs, webhooks, and sandbox access."
  }, {
    icon: Briefcase,
    title: "Corporates & NGOs",
    description: "24/7 cross-border settlement with audit trails, multi-approval controls, and compliance reporting."
  }, {
    icon: Network,
    title: "Payment Processors",
    description: "Instant merchant FX and payouts with batched processing, automated reconciliation, and competitive rates."
  }, {
    icon: TrendingUp,
    title: "Liquidity Partners",
    description: "Provide or access stablecoin liquidity through our secure infrastructure."
  }];

  return <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary">
          <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'var(--gradient-mesh)'
        }} />
        </div>
        
        <AnimatedGlobe />
        <FloatingOrbs />
        <DecorativeShapes />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div className="max-w-6xl mx-auto text-center space-y-10" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8
        }}>
            <motion.div initial={{
            y: 20,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }}>
              <div className="inline-block mb-6">
                <motion.div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20" initial={{
                scale: 0.95,
                opacity: 0
              }} animate={{
                scale: 1,
                opacity: 1
              }} transition={{
                duration: 0.4,
                delay: 0.05
              }}>
                  <span className="text-sm font-semibold text-primary">Stablecoin FX & Settlement Platform</span>
                </motion.div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] text-foreground mb-6 px-4">
                Stablecoin-Powered FX Infrastructure for{" "}
                <span className="relative inline-block">
                  <span className="text-gradient animate-gradient">Ethiopia</span>
                  <motion.span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-yellow-accent rounded-full" 
                    style={{ willChange: 'transform' }}
                    initial={{
                      scaleX: 0
                    }} 
                    animate={{
                      scaleX: 1
                    }} 
                    transition={{
                      duration: 0.6,
                      delay: 0.5
                    }} 
                  />
                </span>
              </h1>
            </motion.div>
            
            <motion.p initial={{
            y: 15,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-body max-w-4xl mx-auto leading-relaxed px-4">
              Connect global liquidity to Ethiopian markets with instant settlement, USDC and USDT support, and compliant infrastructure.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 px-4 w-full sm:w-auto" initial={{
            y: 15,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }}>
              <Link to="/contact" className="w-full sm:w-auto">
                <RippleButton size="lg" variant="default" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 shadow-primary">
                  Contact Sales
                  <ArrowRight className="w-5 h-5" />
                </RippleButton>
              </Link>
              <Link to="/platform" className="w-full sm:w-auto">
                <RippleButton size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-7 border-2">
                  Explore Platform
                </RippleButton>
              </Link>
            </motion.div>

            {/* Enhanced Trust Badges */}
            <motion.div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-8 px-4" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }}>
              {[{
              icon: Shield,
              label: "U.S. Parent Company",
              sub: "Minnesota, USA"
            }, {
              icon: Globe,
              label: "USDC & USDT",
              sub: "Supported"
            }, {
              icon: CheckCircle2,
              label: "Compliant Partners",
              sub: "On & Off-Ramp"
            }].map((badge, idx) => <motion.div key={idx} className="glass-panel px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl group cursor-default" whileHover={{
              scale: 1.03
            }} transition={{
              duration: 0.15
            }}>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs sm:text-sm font-semibold text-foreground">{badge.label}</div>
                      <div className="text-xs text-muted-foreground">{badge.sub}</div>
                    </div>
                  </div>
                </motion.div>)}
            </motion.div>
          </motion.div>
        </div>

        <CurvedDivider />
      </section>


      {/* How It Works */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center space-y-4 mb-12 sm:mb-16 px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
                How It Works
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground font-body max-w-2xl mx-auto">
                Three seamless steps from fiat to stablecoin
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
            <FlowStep number="01" title="Connect" description="Secure API or banking integration with compliance verification." icon={Link2} delay={0} />
            <FlowStep number="02" title="Convert" description="Real-time fiat ↔ USDC/USDT with competitive rate lock." icon={Network} delay={0.1} />
            <FlowStep number="03" title="Settle" description="Instant payouts or secure custody with authorized partners." icon={Vault} delay={0.2} />
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center space-y-4 mb-12 sm:mb-16 px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
                Why Choose <span className="text-gradient">HashPay</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground font-body max-w-2xl mx-auto">
                Simple, secure infrastructure for Ethiopian markets
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto px-4">
            {[{
            icon: Zap,
            title: "Instant Settlement",
            desc: "T+0 settlement with real-time confirmation"
          }, {
            icon: Shield,
            title: "Building Compliance",
            desc: "Working with regulatory experts in the U.S. and Ethiopia"
          }, {
            icon: Vault,
            title: "Secure Custody",
            desc: "Partner with authorized custody providers"
          }, {
            icon: Globe,
            title: "USDC & USDT Support",
            desc: "Circle and Tether stablecoin integration"
          }, {
            icon: Network,
            title: "Simple API",
            desc: "Clean integration with full documentation"
          }, {
            icon: Lock,
            title: "Industry-Standard Security",
            desc: "Following best practices for data protection"
          }].map((feature, idx) => <motion.div key={idx} initial={{
            opacity: 0,
            y: 15
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true,
            margin: "-50px"
          }} transition={{
            duration: 0.3,
            delay: idx * 0.03
          }}>
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
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-secondary relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center space-y-4 mb-12 px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
                Who We Serve
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground font-body max-w-2xl mx-auto">
                Flexible infrastructure for diverse financial needs
              </p>
            </div>
          </ScrollReveal>

          <UseCaseCarousel useCases={useCases} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/60 to-background" />
        <FloatingOrbs />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-5xl mx-auto" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.7
        }}>
            <div className="relative p-8 sm:p-12 md:p-16 rounded-2xl sm:rounded-3xl overflow-hidden">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-yellow-accent/10" />
              
              {/* Border gradient */}
              <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-br from-primary via-yellow-accent to-primary">
                <div className="h-full w-full bg-background rounded-3xl" />
              </div>
              
              <div className="relative z-10 text-center space-y-8">
                <div className="space-y-4">
                  <motion.div initial={{
                  scale: 0.95
                }} whileInView={{
                  scale: 1
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.4
                }}>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
                      Ready to <span className="text-gradient">Transform</span> Your Payment Infrastructure?
                    </h2>
                  </motion.div>
                  
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed px-4">
                    Join businesses building on compliant stablecoin rails with USDC and USDT
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center pt-6 px-4 w-full sm:w-auto">
                  <Link to="/contact" className="w-full sm:w-auto">
                    <RippleButton size="lg" variant="default" className="w-full sm:w-auto text-base sm:text-lg px-10 sm:px-14 py-6 sm:py-7 shadow-primary">
                      Contact Sales
                      <ArrowRight className="w-5 h-5" />
                    </RippleButton>
                  </Link>
                  <Link to="/platform" className="w-full sm:w-auto">
                    <RippleButton size="lg" variant="outline" className="w-full sm:w-auto text-base sm:text-lg px-10 sm:px-14 py-6 sm:py-7 border-2">
                      Explore Platform
                    </RippleButton>
                  </Link>
                </div>

                <div className="pt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-sm px-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>No setup fees</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>Simple integration</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span>24/7 support</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-border/50">
                  <a href="mailto:admin@hashpayremit.com" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-medium">
                    <span>Or email us at</span>
                    <span className="text-primary">admin@hashpayremit.com</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>;
};

export default Index;
