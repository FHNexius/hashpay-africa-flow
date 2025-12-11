import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

const Platform = () => {
  const modules = [
    {
      title: "On-Ramp",
      description: "Convert USD/fiat to USDC or USDT through our authorized partner network.",
      features: [
        "Deposit detection",
        "USDC & USDT support",
        "Automated confirmations",
        "Partner banking integration"
      ]
    },
    {
      title: "Off-Ramp",
      description: "Convert USDC/USDT to ETB/fiat with compliant payout processing.",
      features: [
        "Fast payout processing",
        "Ethiopia corridor support",
        "Automated reconciliation",
        "Authorized payout partners"
      ]
    },
    {
      title: "FX Engine",
      description: "Live pricing with rate lock, transparent spreads, and competitive rates.",
      features: [
        "Rate lock feature",
        "Real-time pricing",
        "Transparent spreads",
        "Competitive rates"
      ]
    },
    {
      title: "Settlement",
      description: "Reliable settlement processing with retries and status tracking.",
      features: [
        "Automated processing",
        "Retry handling",
        "Status tracking",
        "Confirmation notifications"
      ]
    },
    {
      title: "Transaction Ledger",
      description: "Complete transaction records with full auditability.",
      features: [
        "Complete transaction log",
        "Audit trail",
        "Unique transaction IDs",
        "Export capabilities"
      ]
    },
    {
      title: "Secure Custody",
      description: "Partner with authorized custody providers for secure asset storage.",
      features: [
        "Authorized custody partners",
        "Secure storage",
        "Balance management",
        "Withdrawal processing"
      ]
    },
    {
      title: "Reconciliation",
      description: "Matching between ledger and partner records with discrepancy handling.",
      features: [
        "Regular matching",
        "Partner data integration",
        "Balance verification",
        "Discrepancy alerts"
      ]
    },
    {
      title: "Compliance",
      description: "Built-in compliance checks working with regulatory advisors.",
      features: [
        "Partner verification",
        "Transaction monitoring",
        "Working toward approvals",
        "Compliance reporting"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
              Platform Overview
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Stablecoin-powered FX infrastructure built for simplicity and reliability. 
              USDC and USDT support with compliant on-ramp and off-ramp partners.
            </p>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-foreground">
                  {module.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                  {module.description}
                </p>
                <ul className="space-y-3">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-foreground">
            Ready to get started?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contact us to learn more about HashPay's stablecoin FX infrastructure.
          </p>
          <Link to="/contact">
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-6 w-full sm:w-auto">
              Contact Sales
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Platform;
