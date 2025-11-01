import { ArrowRight, Zap, Clock, Shield, Globe, Vault, Network, CheckCircle2, Building2, Heart, Briefcase, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StatCounter from "@/components/StatCounter";
import FeatureCard from "@/components/FeatureCard";
import UseCaseCard from "@/components/UseCaseCard";
import heroNetwork from "@/assets/hero-network.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroNetwork})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-tight">
              Stablecoin Infrastructure for{" "}
              <span className="text-gradient">Sub-Saharan Africa</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-muted-foreground font-body max-w-3xl mx-auto leading-relaxed">
              HashPay provides compliant on-ramp, off-ramp, and custody rails connecting global liquidity to local fiat economies — enabling banks, fintechs, and organizations to move and preserve value instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="gradient-gold text-navy-deep hover:opacity-90 text-lg px-8 py-6 font-semibold group">
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 hover:border-primary">
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
              <StatCounter end={1} suffix="-Minute" label="Settlement Time" />
              <StatCounter end={24} suffix="/7" label="Operations" />
              <StatCounter end={100} suffix="%" label="Compliance" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold">How It Works</h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Three simple steps to instant, compliant stablecoin infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { num: "01", title: "Connect", desc: "Integrate via API, dashboard, or bank portal" },
              { num: "02", title: "Convert", desc: "Seamless fiat ↔ stablecoin exchange with built-in AML/KYC" },
              { num: "03", title: "Settle & Custody", desc: "Receive instant payouts or park assets in stablecoin custody" },
            ].map((step, idx) => (
              <Card key={idx} className="p-8 bg-background border-border relative overflow-hidden group hover:border-primary/50 transition-all">
                <div className="absolute top-4 right-4 text-6xl font-mono font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                  {step.num}
                </div>
                <div className="relative space-y-3">
                  <h3 className="text-2xl font-heading font-bold">{step.title}</h3>
                  <p className="text-muted-foreground font-body">{step.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold">
                Built for Institutional <span className="text-gradient">Performance</span>
              </h2>
              <ul className="space-y-4">
                {[
                  "Unified API infrastructure",
                  "On-ramp, off-ramp, and custody modules",
                  "Real-time FX + risk-scoring engine",
                  "Secure institutional custody layer",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg font-body text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="gradient-gold text-navy-deep hover:opacity-90 font-semibold">
                Request Platform Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <Card className="p-8 bg-card border-border">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <Network className="w-16 h-16 text-primary mx-auto" />
                  <p className="text-muted-foreground font-body">Platform Dashboard Preview</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why HashPay */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold">Why HashPay</h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Enterprise-grade infrastructure built for Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Zap}
              title="Instant Settlement"
              description="Complete transactions in under 1 minute with real-time processing and confirmation."
            />
            <FeatureCard
              icon={Clock}
              title="Always On"
              description="24/7 operations ensuring your business never stops, regardless of banking hours."
            />
            <FeatureCard
              icon={Shield}
              title="Regulated Compliance"
              description="Built under U.S. MSB standards with full AML/CFT and OFAC adherence."
            />
            <FeatureCard
              icon={Globe}
              title="Built for Africa"
              description="Optimized infrastructure designed specifically for Sub-Saharan regional requirements."
            />
            <FeatureCard
              icon={Vault}
              title="Custody & Preservation"
              description="Institutions can park currency in stablecoins to maintain value and hedge inflation."
            />
            <FeatureCard
              icon={Network}
              title="Modular Access"
              description="Use on-ramp, off-ramp, or custody services independently or combined."
            />
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold">
              Regulation × Transparency × <span className="text-gradient">Trust</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body leading-relaxed">
              HashPay operates under U.S. Money Services registration and partners with licensed entities 
              to uphold AML/CFT, OFAC, and FinCEN standards.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {["Compliance", "Audit", "Encryption", "24/7 Monitoring"].map((badge, idx) => (
                <Card key={idx} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="font-body font-semibold text-sm">{badge}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold">Built For Your Needs</h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Flexible infrastructure serving diverse financial use cases
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <UseCaseCard
              icon={Users}
              title="Fintechs & PSPs"
              description="Embed our rails into your apps for seamless digital payments and settlements."
            />
            <UseCaseCard
              icon={Heart}
              title="NGOs & Foundations"
              description="Enable transparent, instant aid distribution with full audit trails."
            />
            <UseCaseCard
              icon={Briefcase}
              title="Corporates"
              description="Move treasury efficiently across borders with minimal friction and maximum speed."
            />
            <UseCaseCard
              icon={Building2}
              title="Banks & FX Desks"
              description="Park or deploy liquidity in stablecoins to retain value and hedge currency risk."
            />
            <UseCaseCard
              icon={TrendingUp}
              title="Liquidity Partners"
              description="Access deep stablecoin rails and institutional-grade settlement infrastructure."
            />
            <UseCaseCard
              icon={Network}
              title="Payment Processors"
              description="Integrate instant settlement capabilities into your existing payment flows."
            />
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold">About HashPay</h2>
            <p className="text-xl text-muted-foreground font-body leading-relaxed">
              HashPay LLC is a U.S.-based financial technology company founded in 2025. 
              We build compliant stablecoin infrastructure enabling instant conversion, settlement, 
              and custody for Sub-Saharan economies.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
              {["Speed", "Security", "Compliance", "Transparency"].map((value, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="text-3xl font-mono font-bold text-gradient">•</div>
                  <p className="font-heading font-semibold">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto p-12 bg-card border-border text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold">
              Ready to Build on <span className="text-gradient">HashPay?</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
              Connect with our team to discuss your infrastructure needs and get started today.
            </p>
            <Button size="lg" className="gradient-gold text-navy-deep hover:opacity-90 text-lg px-12 py-6 font-semibold">
              Contact Sales Team
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-muted-foreground">
              <a href="mailto:admin@hashpayremit.com" className="hover:text-primary transition-colors">
                admin@hashpayremit.com
              </a>
              {" • "}
              Burnsville, MN Office
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
