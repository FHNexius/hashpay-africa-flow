import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Smartphone, Briefcase, CreditCard, Droplets } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      id: "banks",
      label: "Banks & FX Desks",
      icon: Building2,
      title: "Regulated Treasury Infrastructure",
      description: "Hedge and hold reserves in stablecoins with complete compliance and custody controls.",
      benefits: [
        "Licensed FX framework",
        "Institutional custody via Fireblocks MPC",
        "Real-time treasury visibility",
        "Automated reconciliation",
        "Transparent rate pricing",
        "Multi-sig approval workflows"
      ],
      integration: "Direct API integration or banking rails with automated KYC/AML verification.",
      cta: "Contact Banking Team"
    },
    {
      id: "fintechs",
      label: "Fintechs & PSPs",
      icon: Smartphone,
      title: "Embedded Stablecoin Settlement",
      description: "Add compliant stablecoin rails to your platform with minimal integration time.",
      benefits: [
        "RESTful API with webhooks",
        "Sandbox environment",
        "Pre-built SDKs",
        "Reduced time-to-market",
        "24/7 settlement",
        "Transparent pricing"
      ],
      integration: "Modern REST API with comprehensive documentation and sandbox access.",
      cta: "View API Docs"
    },
    {
      id: "corporates",
      label: "Corporates & NGOs",
      icon: Briefcase,
      title: "Cross-Border Treasury & Disbursements",
      description: "Manage international payments and disbursements with complete audit trails.",
      benefits: [
        "24/7 instant settlement",
        "Multi-currency support",
        "Immutable audit logs",
        "Multi-sig controls",
        "Compliance reporting",
        "Treasury dashboards"
      ],
      integration: "Portal access with API integration for automated disbursements.",
      cta: "Schedule Demo"
    },
    {
      id: "processors",
      label: "Payment Processors",
      icon: CreditCard,
      title: "Instant Merchant Payouts",
      description: "Enable real-time merchant settlements with minimal FX spread.",
      benefits: [
        "Instant payouts",
        "Batch processing",
        "Automated reconciliation",
        "Competitive FX rates",
        "Settlement reporting",
        "Webhook notifications"
      ],
      integration: "Bulk payout APIs with automated reconciliation and reporting.",
      cta: "Talk to Sales"
    },
    {
      id: "liquidity",
      label: "Liquidity Partners",
      icon: Droplets,
      title: "Programmatic Liquidity Access",
      description: "Provide or access stablecoin liquidity through our institutional infrastructure.",
      benefits: [
        "Deep liquidity pools",
        "API-first access",
        "Competitive rates",
        "Real-time settlement",
        "Multi-corridor coverage",
        "Partnership opportunities"
      ],
      integration: "Direct market access via API with real-time pricing and settlement.",
      cta: "Become a Partner"
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
              Solutions for Every Use Case
            </h1>
            <p className="text-xl text-muted-foreground">
              From banks to fintechs, corporates to payment processors — HashPay's infrastructure 
              adapts to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="banks" className="max-w-6xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-12">
              {solutions.map((solution) => (
                <TabsTrigger key={solution.id} value={solution.id} className="flex items-center gap-2">
                  <solution.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{solution.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {solutions.map((solution) => (
              <TabsContent key={solution.id} value={solution.id}>
                <div className="bg-card border border-border rounded-2xl p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <solution.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold mb-3 text-foreground">
                        {solution.title}
                      </h2>
                      <p className="text-xl text-muted-foreground">
                        {solution.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 my-12">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">Key Benefits</h3>
                      <ul className="space-y-3">
                        {solution.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <span className="text-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 text-foreground">Integration</h3>
                      <p className="text-muted-foreground mb-6">
                        {solution.integration}
                      </p>
                      <Button size="lg" className="w-full md:w-auto">
                        {solution.cta}
                      </Button>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-border">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        Licensed & Compliant
                      </span>
                      <span className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        24/7 Operations
                      </span>
                      <span className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        T+0 Settlement
                      </span>
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
