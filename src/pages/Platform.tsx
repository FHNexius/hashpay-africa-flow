import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

const Platform = () => {
  const modules = [
    {
      title: "On-Ramp",
      description: "Convert USD/fiat to USDC/USDT with automated deposit detection, confirmations, and idempotency.",
      features: [
        "Instant deposit detection",
        "Multi-chain support",
        "Automated confirmations",
        "Idempotency guarantees"
      ]
    },
    {
      title: "Off-Ramp",
      description: "Convert USDC/USDT to ETB/fiat with orchestrated payout reconciliation.",
      features: [
        "Instant payout processing",
        "Multi-corridor support",
        "Automated reconciliation",
        "Bank integration"
      ]
    },
    {
      title: "FX Engine",
      description: "Live pricing with 120-second rate lock, transparent spreads, and automated hedging.",
      features: [
        "120-second rate lock",
        "Real-time pricing",
        "25-50bps spread buffer",
        "Auto-hedge >$10k transactions"
      ]
    },
    {
      title: "Settlement Orchestrator",
      description: "Saga-based orchestration with forward/compensate logic, retries, and circuit breakers.",
      features: [
        "Saga pattern implementation",
        "Automated retries",
        "Dead letter queue",
        "Circuit breakers"
      ]
    },
    {
      title: "Event-Sourced Ledger",
      description: "Immutable transaction events with CQRS read models and complete auditability.",
      features: [
        "Immutable event log",
        "CQRS architecture",
        "Idempotency keys",
        "Complete audit trail"
      ]
    },
    {
      title: "Fireblocks MPC Custody",
      description: "Institutional-grade custody with hot/warm/cold wallet policies and automated rebalancing.",
      features: [
        "MPC wallet technology",
        "Multi-tier policy engine",
        "Automated rebalancing",
        "Webhook integration"
      ]
    },
    {
      title: "Reconciliation Engine",
      description: "Three-way matching between ledger, blockchain, and PSP with automated discrepancy workflows.",
      features: [
        "Hourly on-chain matching",
        "PSP data ingestion",
        "Daily checksums",
        "Discrepancy workflows"
      ]
    },
    {
      title: "Compliance & Risk",
      description: "Real-time rules engine with async screening and manual review workflows.",
      features: [
        "Synchronous rules engine",
        "Sumsub/Chainalysis screening",
        "AML/CFT compliance",
        "Manual review SLAs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 text-foreground">
              Platform Architecture
            </h1>
            <p className="text-xl text-muted-foreground">
              Licensed stablecoin FX infrastructure built for institutional performance. 
              Modular, event-sourced, and compliance-ready from day one.
            </p>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {modules.map((module, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {module.title}
                </h3>
                <p className="text-muted-foreground mb-6">
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Ready to integrate?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get started with HashPay's institutional infrastructure today.
          </p>
          <Button size="lg" className="text-lg px-8">
            Request Platform Access
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Platform;
