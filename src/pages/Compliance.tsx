import { Shield, FileCheck, Lock, Eye, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Compliance = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl font-heading font-bold">
              Built on <span className="text-gradient">Trust & Compliance</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body leading-relaxed">
              HashPay operates under the highest standards of regulatory compliance, 
              security, and transparency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-heading font-bold">Regulatory Framework</h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              HashPay LLC is registered as a Money Services Business (MSB) under the U.S. Financial Crimes 
              Enforcement Network (FinCEN). This registration ensures we meet federal requirements for 
              anti-money laundering (AML), counter-financing of terrorism (CFT), and customer due diligence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card border-border space-y-3">
                <Shield className="w-10 h-10 text-primary" />
                <h3 className="text-xl font-heading font-semibold">U.S. MSB Registration</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Federally registered and compliant with FinCEN regulations for money transmission and currency exchange.
                </p>
              </Card>

              <Card className="p-6 bg-card border-border space-y-3">
                <FileCheck className="w-10 h-10 text-primary" />
                <h3 className="text-xl font-heading font-semibold">AML/CFT Standards</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Comprehensive anti-money laundering and counter-financing of terrorism protocols in place.
                </p>
              </Card>

              <Card className="p-6 bg-card border-border space-y-3">
                <Lock className="w-10 h-10 text-primary" />
                <h3 className="text-xl font-heading font-semibold">OFAC Screening</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Real-time screening against Office of Foreign Assets Control sanctions lists.
                </p>
              </Card>

              <Card className="p-6 bg-card border-border space-y-3">
                <Eye className="w-10 h-10 text-primary" />
                <h3 className="text-xl font-heading font-semibold">KYC Requirements</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Robust Know Your Customer procedures ensuring verified identity for all participants.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-heading font-bold">Security Measures</h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              We employ bank-grade security protocols to protect customer funds and data at every layer 
              of our infrastructure.
            </p>

            <div className="space-y-4">
              {[
                "End-to-end encryption for all data transmission",
                "Multi-signature custody wallets with hardware security modules",
                "24/7 security monitoring and incident response",
                "Regular third-party security audits and penetration testing",
                "ISO 27001-aligned information security management",
                "Segregated customer funds with institutional-grade custody",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg font-body text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-heading font-bold">Transaction Monitoring</h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Every transaction flowing through HashPay infrastructure undergoes real-time risk assessment 
              and compliance screening.
            </p>

            <Card className="p-8 bg-card border-border space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-mono font-bold text-primary">01</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-heading font-semibold">Real-Time Screening</h3>
                    <p className="text-muted-foreground font-body text-sm">
                      Automated checks against sanctions lists, PEP databases, and adverse media.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-mono font-bold text-primary">02</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-heading font-semibold">Risk Scoring</h3>
                    <p className="text-muted-foreground font-body text-sm">
                      Machine learning models assess transaction risk and flag anomalies for review.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-mono font-bold text-primary">03</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-heading font-semibold">Audit Trail</h3>
                    <p className="text-muted-foreground font-body text-sm">
                      Complete transaction history with immutable records for compliance reporting.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-heading font-bold">Partner Compliance</h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              We work exclusively with licensed financial institutions and regulated entities, ensuring 
              end-to-end compliance across all jurisdictions where we operate.
            </p>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Our partner network includes licensed money transmitters, regulated exchanges, and banking 
              institutions that meet local regulatory requirements in their respective markets. This 
              partnership model ensures HashPay infrastructure remains compliant as it scales across 
              Sub-Saharan Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-heading font-bold">Questions About Compliance?</h2>
            <p className="text-lg text-muted-foreground font-body">
              Our compliance team is available to discuss how HashPay meets regulatory requirements 
              for your specific use case.
            </p>
            <a 
              href="mailto:admin@hashpayremit.com" 
              className="inline-block text-primary hover:underline font-body font-medium text-lg"
            >
              Contact Compliance Team →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Compliance;
