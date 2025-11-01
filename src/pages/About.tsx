import { Shield, Target, Users, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl font-heading font-bold">
              Building the Future of <span className="text-gradient">Financial Infrastructure</span>
            </h1>
            <p className="text-xl text-muted-foreground font-body leading-relaxed">
              HashPay LLC is a U.S.-registered financial technology company pioneering compliant 
              stablecoin infrastructure for Sub-Saharan Africa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-heading font-bold">Our Mission</h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              We exist to bridge the gap between global liquidity and local economies across Sub-Saharan Africa. 
              By providing regulated on-ramp, off-ramp, and custody infrastructure, we enable banks, fintechs, 
              corporates, and organizations to move and preserve value instantly — without the friction of 
              traditional cross-border systems.
            </p>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              HashPay operates under U.S. Money Services Business registration, ensuring every transaction 
              meets the highest standards of compliance, security, and transparency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-heading font-bold">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-8 bg-card border-border text-center space-y-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-navy-deep" />
              </div>
              <h3 className="text-xl font-heading font-bold">Security</h3>
              <p className="text-muted-foreground font-body text-sm">
                Bank-grade security protecting every transaction and custody operation.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border text-center space-y-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-navy-deep" />
              </div>
              <h3 className="text-xl font-heading font-bold">Compliance</h3>
              <p className="text-muted-foreground font-body text-sm">
                Full regulatory adherence under U.S. MSB standards and international frameworks.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border text-center space-y-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-navy-deep" />
              </div>
              <h3 className="text-xl font-heading font-bold">Transparency</h3>
              <p className="text-muted-foreground font-body text-sm">
                Clear operations, full audit trails, and open communication with partners.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border text-center space-y-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-gold flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-navy-deep" />
              </div>
              <h3 className="text-xl font-heading font-bold">Innovation</h3>
              <p className="text-muted-foreground font-body text-sm">
                Continuous improvement of infrastructure to serve evolving financial needs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-heading font-bold">Why Sub-Saharan Africa?</h2>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Sub-Saharan Africa represents one of the world's fastest-growing economic regions, yet faces 
              significant challenges in cross-border payments, currency preservation, and access to global 
              financial infrastructure. Traditional banking systems are often slow, expensive, and limited 
              in operating hours.
            </p>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Stablecoins offer an immediate solution: instant settlement, value preservation, 24/7 availability, 
              and seamless integration with both traditional and digital financial systems. HashPay bridges 
              this gap by providing the compliant infrastructure layer that connects local fiat economies 
              to global stablecoin liquidity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-heading font-bold">Our Approach</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-heading font-semibold text-primary">Compliance First</h3>
                <p className="text-muted-foreground font-body">
                  Every feature we build starts with regulatory compliance, ensuring partners and customers 
                  operate within established legal frameworks.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-heading font-semibold text-primary">Modular Infrastructure</h3>
                <p className="text-muted-foreground font-body">
                  Organizations can use our on-ramp, off-ramp, and custody services independently or together, 
                  integrating only what they need.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-heading font-semibold text-primary">Partnership Focus</h3>
                <p className="text-muted-foreground font-body">
                  We work closely with banks, licensed money transmitters, and regulated entities to ensure 
                  seamless, compliant operations across all jurisdictions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
