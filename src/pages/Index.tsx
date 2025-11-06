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
const Index = () => {
  const useCases = [{
    icon: Building2,
    title: "Banks & FX Desks",
    description: "Park reserves in stablecoins to hedge volatility and retain value. Access institutional-grade custody and instant liquidity."
  }, {
    icon: Users,
    title: "Fintechs & PSPs",
    description: "Integrate our rails to enable stablecoin settlement. Embed compliant infrastructure directly into your platform."
  }, {
    icon: Briefcase,
    title: "Corporates & Enterprises",
    description: "Manage cross-border treasury in real time with seamless stablecoin conversions and 24/7 availability."
  }, {
    icon: Heart,
    title: "NGOs & Aid Organizations",
    description: "Disburse funds instantly and transparently with full audit trails and compliance monitoring."
  }, {
    icon: TrendingUp,
    title: "Liquidity Partners",
    description: "Provide or access stablecoin liquidity seamlessly through our unified infrastructure layer."
  }, {
    icon: Network,
    title: "Payment Processors",
    description: "Enable instant cross-border settlements with minimal fees and maximum speed for your merchants."
  }];
  return <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden particle-bg">
        <AnimatedGlobe />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div className="max-w-5xl mx-auto text-center space-y-12" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 1
        }}>
            <motion.div initial={{
            y: 50,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <h1 className="text-6xl sm:text-7xl font-heading font-bold leading-tight tracking-tight text-foreground lg:text-6xl">
                The Stablecoin Infrastructure Powering{" "}
                <span className="text-gradient animate-gradient">Sub-Saharan Africa</span>
              </h1>
            </motion.div>
            
            <motion.p initial={{
            y: 30,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="text-xl text-muted-foreground font-body max-w-4xl mx-auto leading-relaxed sm:text-xl">
              HashPay provides licensed, compliant, and instant stablecoin on-ramp, off-ramp, and custody 
              infrastructure — connecting global liquidity with regulated African markets for real-time 
              settlement and FX conversion.
            </motion.p>

            {/* Badges */}
            <motion.div className="flex flex-wrap justify-center gap-4 pt-8" initial={{
            y: 30,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }}>
              {[{
              icon: Zap,
              label: "T+0 Settlement"
            }, {
              icon: Clock,
              label: "24/7 Operations"
            }, {
              icon: Shield,
              label: "Licensed & Regulated FX Bureau"
            }].map((badge, idx) => <motion.div key={idx} className="flex items-center space-x-2 bg-card border border-border px-6 py-3 rounded-full" whileHover={{
              scale: 1.05
            }} transition={{
              duration: 0.2
            }}>
                  <badge.icon className="w-5 h-5 text-primary" />
                  <span className="font-body font-semibold text-foreground">{badge.label}</span>
                </motion.div>)}
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-6 justify-center pt-8" initial={{
            y: 30,
            opacity: 0
          }} animate={{
            y: 0,
            opacity: 1
          }} transition={{
            duration: 0.8,
            delay: 0.8
          }}>
              <Link to="/contact">
                <RippleButton size="lg" className="text-lg px-12 py-8 bg-primary text-primary-foreground hover:bg-primary/90">
                  Contact Sales
                  <ArrowRight className="w-5 h-5" />
                </RippleButton>
              </Link>
              <Link to="/developers">
                <RippleButton size="lg" className="text-lg px-12 py-8 bg-card text-foreground border-2 border-border hover:bg-card/90">
                  View Platform
                </RippleButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <CurvedDivider />
      </section>

      {/* How It Works */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-5xl sm:text-6xl font-heading font-bold text-foreground">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
                Three seamless steps connect traditional finance to stablecoin infrastructure
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <FlowStep number="01" title="Connect" description="Secure API or bank integration with automated compliance verification." icon={Link2} delay={0} />
            <FlowStep number="02" title="Convert" description="Live fiat ↔ stablecoin FX engine with 120-second rate lock and real-time reconciliation." icon={Network} delay={0.2} />
            <FlowStep number="03" title="Settle & Custody" description="Instant payouts or reserve parking in Fireblocks MPC custody." icon={Vault} delay={0.4} />
          </div>
        </div>

        <CurvedDivider flip />
      </section>

      {/* Regulated FX Infrastructure */}
      <section className="py-32 bg-secondary relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <ScrollReveal>
              <h2 className="text-5xl sm:text-6xl font-heading font-bold text-foreground">
                Regulated <span className="text-gradient">FX Infrastructure</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-xl text-muted-foreground font-body leading-relaxed">
                HashPay operates under a licensed FX Bureau framework in Ethiopia, authorized by 
                the National Bank of Ethiopia (NBE). Our infrastructure meets both NBE and U.S. MSB 
                regulatory standards — delivering compliant, transparent, and instant stablecoin-to-fiat 
                conversion across regulated corridors.
              </p>
            </ScrollReveal>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center pt-6" initial={{
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
               <div className="flex items-center space-x-2 bg-card border border-primary/30 px-6 py-3 rounded-full shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-body font-semibold text-foreground">Licensed FX Bureau — Ethiopia (2024)</span>
              </div>
              <div className="flex items-center space-x-2 bg-card border border-primary/30 px-6 py-3 rounded-full shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-body font-semibold text-foreground">MSB-Compliant Infrastructure — USA</span>
              </div>
            </motion.div>
          </div>
        </div>

        <CurvedDivider />
      </section>

      {/* Built for Institutional Performance */}
      <section className="py-32 relative overflow-hidden particle-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <ScrollReveal direction="left">
              <div className="space-y-8">
                <h2 className="text-5xl sm:text-6xl font-heading font-bold leading-tight text-foreground">
                  Built for Institutional{" "}
                  <span className="text-gradient">Performance</span>
                </h2>
                
                <div className="space-y-6">
                  {["Unified API infrastructure", "Event-sourced ledger and reconciliation engine", "Real-time FX pricing and risk scoring", "Bank-grade encryption and monitoring", "Smart liquidity routing", "Scalable cross-border corridors"].map((item, idx) => <motion.div key={idx} className="flex items-start space-x-4 group" initial={{
                  opacity: 0,
                  x: -20
                }} whileInView={{
                  opacity: 1,
                  x: 0
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.5,
                  delay: idx * 0.1
                }}>
                      <motion.div whileHover={{
                    scale: 1.2,
                    rotate: 360
                  }} transition={{
                    duration: 0.5
                  }}>
                        <CheckCircle2 className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
                      </motion.div>
                      <span className="text-lg font-body text-muted-foreground group-hover:text-foreground transition-colors">
                        {item}
                      </span>
                    </motion.div>)}
                </div>

                <Link to="/contact">
                  <RippleButton className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90">
                    Request Platform Access
                    <ArrowRight className="w-5 h-5" />
                  </RippleButton>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <CurvedDivider />
      </section>

      {/* Why Institutions Choose HashPay */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-5xl sm:text-6xl font-heading font-bold text-foreground">
                Why Institutions Choose{" "}
                <span className="text-gradient">HashPay</span>
              </h2>
              <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
                Enterprise-grade infrastructure built for African financial innovation
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[{
            icon: Zap,
            title: "Instant Settlement",
            desc: "T+0 settlement with real-time processing and confirmation on the same business day."
          }, {
            icon: Clock,
            title: "24/7 Availability",
            desc: "Never stop operating. Our infrastructure runs continuously regardless of banking hours."
          }, {
            icon: Shield,
            title: "Regulated Compliance",
            desc: "Licensed FX Bureau + AML/CFT aligned."
          }, {
            icon: Globe,
            title: "Built for Africa",
            desc: "Optimized for Sub-Saharan corridors."
          }, {
            icon: Vault,
            title: "Institutional Custody",
            desc: "Fireblocks MPC wallets with multi-tier security."
          }, {
            icon: Network,
            title: "Modular Integration",
            desc: "Use on-ramp, off-ramp, or custody independently."
          }].map((feature, idx) => <motion.div key={idx} className="p-8 bg-secondary border border-border rounded-2xl hover:border-primary/50 hover:shadow-lg transition-all" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: idx * 0.1
          }} whileHover={{
            y: -8
          }}>
                <motion.div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mb-6" whileHover={{
              rotate: 360
            }} transition={{
              duration: 0.6
            }}>
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground font-body leading-relaxed">{feature.desc}</p>
              </motion.div>)}
          </div>
        </div>

        <CurvedDivider flip />
      </section>

      {/* Compliance Section */}
      <section className="py-32 relative overflow-hidden bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center space-y-8 mb-16">
                <h2 className="text-5xl sm:text-6xl font-heading font-bold text-foreground">
                  Built for Regulation. Backed by{" "}
                  <span className="text-gradient">Integrity</span>
                </h2>
                <p className="text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
                  HashPay operates under U.S. MSB registration and partners with licensed transmitters 
                  to maintain AML/CFT, OFAC, and FinCEN standards. Every transaction is monitored, 
                  logged, and audit-ready.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[{
              icon: Shield,
              label: "Full Compliance"
            }, {
              icon: FileCheck,
              label: "Audit Ready"
            }, {
              icon: Lock,
              label: "Bank-Grade Encryption"
            }, {
              icon: Eye,
              label: "24/7 Monitoring"
            }].map((badge, idx) => <motion.div key={idx} className="p-6 bg-card border border-border rounded-xl text-center hover:border-primary/50 transition-all shadow-sm" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: idx * 0.1
            }} whileHover={{
              scale: 1.05
            }}>
                  <motion.div animate={{
                boxShadow: ["0 0 20px rgba(255, 106, 0, 0.2)", "0 0 40px rgba(255, 106, 0, 0.4)", "0 0 20px rgba(255, 106, 0, 0.2)"]
              }} transition={{
                duration: 3,
                repeat: Infinity
              }} className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <badge.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <p className="font-body font-semibold text-foreground">{badge.label}</p>
                </motion.div>)}
            </div>
          </div>
        </div>

        <CurvedDivider />
      </section>

      {/* Use Cases */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center space-y-6 mb-20">
              <h2 className="text-5xl sm:text-6xl font-heading font-bold text-foreground">
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

      {/* Vision Section */}
      <section className="py-32 relative overflow-hidden particle-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <ScrollReveal direction="left">
              <AfricaMapNetwork />
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-8">
                <h2 className="text-5xl sm:text-6xl font-heading font-bold leading-tight text-foreground">
                  The Vision Behind the{" "}
                  <span className="text-gradient">Infrastructure</span>
                </h2>
                
                <div className="space-y-6">
                  <p className="text-xl text-muted-foreground font-body leading-relaxed">
                    Founded in 2025, HashPay LLC is a U.S.-based financial technology company 
                    operating regulated stablecoin FX infrastructure across Africa — beginning with Ethiopia.
                  </p>
                  <p className="text-xl text-muted-foreground font-body leading-relaxed">
                    We connect traditional finance and blockchain liquidity through secure, 
                    compliant rails that move value instantly and transparently.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 pt-8">
                  {["Speed", "Compliance", "Transparency"].map((value, idx) => <motion.div key={idx} className="text-center space-y-2" initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  duration: 0.5,
                  delay: idx * 0.1
                }}>
                      <motion.div className="text-5xl font-mono font-bold text-gradient" animate={{
                    scale: [1, 1.1, 1]
                  }} transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.3
                  }}>
                        •
                      </motion.div>
                      <p className="font-heading font-semibold text-lg text-foreground">{value}</p>
                    </motion.div>)}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <CurvedDivider />
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto p-16 bg-secondary border border-border rounded-3xl text-center space-y-10 shadow-xl">
            <ScrollReveal>
              <h2 className="text-5xl sm:text-6xl font-heading font-bold text-foreground">
                Partner with <span className="text-gradient">HashPay</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-2xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
                Connect your institution to compliant stablecoin infrastructure for instant 
                global settlement.
              </p>
            </ScrollReveal>

            <motion.div className="flex flex-col sm:flex-row gap-6 justify-center pt-4" initial={{
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
              <Link to="/contact">
                <RippleButton size="lg" className="text-xl px-16 py-8 bg-primary text-primary-foreground hover:bg-primary/90">
                  Contact Sales
                  <ArrowRight className="w-6 h-6" />
                </RippleButton>
              </Link>
              <Link to="/contact">
                <RippleButton size="lg" className="text-xl px-16 py-8 bg-card text-foreground border-2 border-border hover:bg-card/90">
                  Request Demo
                  <ArrowRight className="w-6 h-6" />
                </RippleButton>
              </Link>
            </motion.div>

            <motion.div className="pt-8 text-muted-foreground font-body" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }}>
              <a href="mailto:admin@hashpayremit.com" className="hover:text-primary transition-colors text-lg">
                admin@hashpayremit.com
              </a>
              <span className="mx-3">•</span>
              <span className="text-lg">Burnsville, MN</span>
            </motion.div>
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
                name: "About",
                path: "/about"
              }, {
                name: "Compliance",
                path: "/compliance"
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
                {["On-Ramp", "Off-Ramp", "Custody", "Liquidity"].map(service => <li key={service} className="text-sm text-muted-foreground font-body">
                    {service}
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
                    API Docs
                  </Link>
                </li>
                <li className="text-sm text-muted-foreground/50 font-body">
                  Changelog <span className="text-xs">(Coming Soon)</span>
                </li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground font-body mb-3">Contact</p>
                <a href="mailto:admin@hashpayremit.com" className="text-sm text-primary hover:text-primary/80 transition-colors font-body">
                  admin@hashpayremit.com
                </a>
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
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground font-body">
                © {new Date().getFullYear()} HashPay LLC — All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground/70 font-body">
                Burnsville, MN, United States
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>;
};
export default Index;