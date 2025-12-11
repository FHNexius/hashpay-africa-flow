import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
      title: "Treasury & FX Solutions",
      description: "Manage treasury operations with stablecoin reserves and compliant FX services.",
      benefits: [
        "USDC & USDT support",
        "Secure custody partnerships",
        "Real-time treasury visibility",
        "Automated reconciliation",
        "Transparent rate pricing",
        "Multi-approval workflows"
      ],
      integration: "API integration or banking rails with partner verification.",
      cta: "Contact Banking Team"
    },
    {
      id: "fintechs",
      label: "Fintechs & PSPs",
      icon: Smartphone,
      title: "Embedded Stablecoin Settlement",
      description: "Add compliant stablecoin rails to your platform with simple integration.",
      benefits: [
        "RESTful API with webhooks",
        "Sandbox environment",
        "Documentation & support",
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
        "USD to ETB support",
        "Full audit logs",
        "Multi-approval controls",
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
      description: "Enable real-time merchant settlements with competitive FX rates.",
      benefits: [
        "Fast payouts",
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
      title: "Liquidity Partnership",
      description: "Provide or access stablecoin liquidity through our secure infrastructure.",
      benefits: [
        "Liquidity access",
        "API-first integration",
        "Competitive rates",
        "Real-time settlement",
        "Ethiopia corridor",
        "Partnership opportunities"
      ],
      integration: "Direct access via API with real-time pricing and settlement.",
      cta: "Become a Partner"
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
              Solutions for Every Use Case
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              From banks to fintechs, corporates to payment processors — HashPay's infrastructure 
              adapts to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Tabs */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="banks" className="max-w-6xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-8 sm:mb-12 h-auto gap-2">
              {solutions.map((solution) => (
                <TabsTrigger key={solution.id} value={solution.id} className="flex items-center justify-center gap-2 py-3 px-2 text-xs sm:text-sm">
                  <solution.icon className="w-4 h-4 flex-shrink-0" />
                  <span className="hidden sm:inline truncate">{solution.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {solutions.map((solution) => (
              <TabsContent key={solution.id} value={solution.id}>
                <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
                  <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                      <solution.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-foreground">
                        {solution.title}
                      </h2>
                      <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                        {solution.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-8 sm:my-12">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">Key Benefits</h3>
                      <ul className="space-y-2 sm:space-y-3">
                        {solution.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                            <span className="text-sm sm:text-base text-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground">Integration</h3>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
                        {solution.integration}
                      </p>
                      <Link to="/contact">
                        <Button size="lg" className="w-full md:w-auto py-6 text-base">
                          {solution.cta}
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="pt-6 sm:pt-8 border-t border-border">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                        <span>Building Compliance</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                        <span>24/7 Operations</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                        <span>USDC & USDT</span>
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
