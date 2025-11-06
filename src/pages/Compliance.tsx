import { Shield, FileCheck, Lock, Eye, CheckCircle2, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GlassPanel from "@/components/GlassPanel";
import ScrollReveal from "@/components/ScrollReveal";
import CurvedDivider from "@/components/CurvedDivider";

const Compliance = () => {
  const frameworks = [
    { icon: Shield, title: "U.S. MSB Registration", desc: "Federally registered and compliant with FinCEN regulations for money transmission and currency exchange." },
    { icon: FileCheck, title: "AML/CFT Standards", desc: "Comprehensive anti-money laundering and counter-financing of terrorism protocols in place." },
    { icon: Lock, title: "OFAC Screening", desc: "Real-time screening against Office of Foreign Assets Control sanctions lists." },
    { icon: Eye, title: "KYC Requirements", desc: "Robust Know Your Customer procedures ensuring verified identity for all participants." },
  ];

  const securityMeasures = [
    "End-to-end encryption for all data transmission",
    "Multi-signature custody wallets with hardware security modules",
    "24/7 security monitoring and incident response",
    "Regular third-party security audits and penetration testing",
    "ISO 27001-aligned information security management",
    "Segregated customer funds with institutional-grade custody",
  ];

  const monitoringSteps = [
    { num: "01", title: "Real-Time Screening", desc: "Automated checks against sanctions lists, PEP databases, and adverse media." },
    { num: "02", title: "Risk Scoring", desc: "Machine learning models assess transaction risk and flag anomalies for review." },
    { num: "03", title: "Audit Trail", desc: "Complete transaction history with immutable records for compliance reporting." },
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
            <motion.div
              className="inline-flex items-center justify-center w-24 h-24 rounded-2xl gradient-accent mx-auto mb-6"
              animate={{ 
                boxShadow: [
                  "0 0 40px rgba(255, 215, 0, 0.4)",
                  "0 0 60px rgba(255, 215, 0, 0.6)",
                  "0 0 40px rgba(255, 215, 0, 0.4)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Shield className="w-12 h-12 text-primary" />
            </motion.div>

            <h1 className="text-6xl sm:text-7xl font-heading font-bold leading-tight">
              Built on{" "}
              <span className="text-gradient animate-gradient">Trust & Compliance</span>
            </h1>
            <p className="text-2xl text-foreground/90 font-body leading-relaxed">
              HashPay operates under the highest standards of regulatory compliance, 
              security, and transparency.
            </p>
          </motion.div>
        </div>

        <CurvedDivider />
      </section>

      {/* Regulatory Framework */}
      <section className="py-24 bg-card relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <div className="space-y-8 mb-16">
                <h2 className="text-5xl font-heading font-bold text-center">
                  Regulatory <span className="text-gradient">Framework</span>
                </h2>
                <GlassPanel hover={false} className="p-10">
                  <p className="text-xl text-foreground/90 font-body leading-relaxed text-center">
                    HashPay LLC is registered as a Money Services Business (MSB) under the U.S. Financial Crimes 
                    Enforcement Network (FinCEN). This registration ensures we meet federal requirements for 
                    anti-money laundering (AML), counter-financing of terrorism (CFT), and customer due diligence.
                  </p>
                </GlassPanel>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {frameworks.map((framework, idx) => (
                <GlassPanel key={idx} delay={idx * 0.1}>
                  <motion.div
                    className="space-y-4"
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <framework.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="text-2xl font-heading font-semibold">{framework.title}</h3>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {framework.desc}
                    </p>
                  </motion.div>
                </GlassPanel>
              ))}
            </div>
          </div>
        </div>

        <CurvedDivider flip />
      </section>

      {/* Security Measures */}
      <section className="py-24 relative overflow-hidden particle-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-5xl font-heading font-bold">
                  Security <span className="text-gradient">Measures</span>
                </h2>
                <p className="text-xl text-foreground/90 font-body max-w-3xl mx-auto">
                  We employ bank-grade security protocols to protect customer funds and data at every layer 
                  of our infrastructure.
                </p>
              </div>
            </ScrollReveal>

            <GlassPanel hover={false} className="p-12">
              <div className="space-y-6">
                {securityMeasures.map((measure, idx) => (
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
                      {measure}
                    </span>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </div>
        </div>

        <CurvedDivider />
      </section>

      {/* Transaction Monitoring */}
      <section className="py-24 bg-card relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center space-y-6 mb-16">
                <h2 className="text-5xl font-heading font-bold">
                  Transaction <span className="text-gradient">Monitoring</span>
                </h2>
                <p className="text-xl text-foreground/90 font-body max-w-3xl mx-auto">
                  Every transaction flowing through HashPay infrastructure undergoes real-time risk assessment 
                  and compliance screening.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              {monitoringSteps.map((step, idx) => (
                <GlassPanel key={idx} delay={idx * 0.15} hover={false}>
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <motion.div
                      className="w-20 h-20 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-3xl font-mono font-bold text-primary">{step.num}</span>
                    </motion.div>
                    <div className="space-y-2 flex-1">
                      <h3 className="text-2xl font-heading font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground font-body text-lg leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </GlassPanel>
              ))}
            </div>
          </div>
        </div>

        <CurvedDivider flip />
      </section>

      {/* Partner Compliance */}
      <section className="py-24 relative overflow-hidden particle-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <GlassPanel hover={false} className="p-12 space-y-8">
                <h2 className="text-4xl font-heading font-bold text-gradient text-center">
                  Partner Compliance
                </h2>
                <div className="space-y-6 text-lg text-foreground/90 font-body leading-relaxed">
                  <p>
                    We work exclusively with licensed financial institutions and regulated entities, ensuring 
                    end-to-end compliance across all jurisdictions where we operate.
                  </p>
                  <p>
                    Our partner network includes licensed money transmitters, regulated exchanges, and banking 
                    institutions that meet local regulatory requirements in their respective markets. This 
                    partnership model ensures HashPay infrastructure remains compliant as it scales across 
                    Sub-Saharan Africa.
                  </p>
                </div>
              </GlassPanel>
            </ScrollReveal>
          </div>
        </div>

        <CurvedDivider />
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <GlassPanel className="max-w-4xl mx-auto text-center p-12 space-y-8">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <AlertTriangle className="w-16 h-16 text-primary mx-auto mb-6" />
              </motion.div>
              <h2 className="text-4xl font-heading font-bold">
                Questions About Compliance?
              </h2>
              <p className="text-xl text-foreground/90 font-body max-w-2xl mx-auto">
                Our compliance team is available to discuss how HashPay meets regulatory requirements 
                for your specific use case.
              </p>
              <motion.a 
                href="mailto:admin@hashpayremit.com" 
                className="inline-block text-primary hover:text-primary/80 font-body font-semibold text-xl transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                Contact Compliance Team →
              </motion.a>
            </GlassPanel>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Compliance;
