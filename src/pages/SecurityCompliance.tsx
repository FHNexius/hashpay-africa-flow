import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Lock, FileCheck, Database, Eye, CheckCircle2 } from "lucide-react";

const SecurityCompliance = () => {
  const sections = [
    {
      icon: Shield,
      title: "Security Infrastructure",
      items: [
        "TLS 1.3 encryption with HSTS",
        "mTLS for service-to-service communication",
        "Role-based access control (RBAC)",
        "Multi-factor authentication (2FA)",
        "Vault/Secrets Manager for key management",
        "AES-256 encryption at rest",
        "WORM (Write Once Read Many) audit logs",
        "Regular penetration testing"
      ]
    },
    {
      icon: FileCheck,
      title: "Regulatory Compliance",
      items: [
        "Licensed FX Bureau in Ethiopia (NBE)",
        "AML/CFT compliance framework",
        "OFAC sanctions screening",
        "PEP and adverse media checks",
        "Suspicious activity monitoring",
        "Automated reporting workflows",
        "KYC/KYB verification",
        "Transaction monitoring"
      ]
    },
    {
      icon: Database,
      title: "Auditability & Transparency",
      items: [
        "Immutable event-sourced ledger",
        "7+ year data retention",
        "Exportable audit reports",
        "Regulator-ready documentation",
        "Complete transaction history",
        "Reconciliation reports",
        "Compliance dashboards",
        "Real-time monitoring"
      ]
    },
    {
      icon: Lock,
      title: "Custody & Asset Security",
      items: [
        "Fireblocks MPC wallet technology",
        "Multi-tier wallet policy (hot/warm/cold)",
        "Multi-signature approvals",
        "Time-locked transactions",
        "Automated rebalancing",
        "On-chain monitoring",
        "Webhook reconciliation",
        "Insurance coverage"
      ]
    },
    {
      icon: Eye,
      title: "Transaction Monitoring",
      items: [
        "Real-time risk scoring",
        "Behavioral analytics",
        "Velocity checks",
        "Pattern detection",
        "Anomaly alerts",
        "Manual review queues",
        "Escalation workflows",
        "Case management"
      ]
    },
    {
      icon: CheckCircle2,
      title: "Reconciliation & Accuracy",
      items: [
        "Three-way reconciliation (ledger, chain, PSP)",
        "Hourly on-chain matching",
        "Automated checksum validation",
        "Discrepancy detection",
        "SLA-based resolution",
        "Balance verification",
        "Settlement confirmation",
        "Audit trail generation"
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
              Security & Compliance
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Bank-grade security, regulatory compliance, and complete auditability 
              built into every layer of our infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Badge */}
      <section className="py-8 sm:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 w-full md:w-auto">
                <div className="p-3 sm:p-4 bg-primary/10 rounded-xl flex-shrink-0">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                    Licensed FX Bureau
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Authorized by the National Bank of Ethiopia
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 w-full md:w-auto">
                <div className="px-3 sm:px-4 py-2 bg-green-500/10 text-green-700 dark:text-green-400 rounded-lg font-medium text-xs sm:text-sm">
                  AML/CFT Compliant
                </div>
                <div className="px-3 sm:px-4 py-2 bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-lg font-medium text-xs sm:text-sm">
                  SOC 2 Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Sections */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                    <section.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Markers */}
      <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-foreground">
              Trusted Infrastructure Partners
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12">
              We partner with industry-leading security and compliance providers
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {["Fireblocks", "Chainalysis", "Sumsub", "ComplyAdvantage"].map((partner) => (
                <div
                  key={partner}
                  className="bg-card border border-border rounded-lg sm:rounded-xl p-4 sm:p-6 flex items-center justify-center min-h-[80px] sm:min-h-[100px]"
                >
                  <span className="text-sm sm:text-base md:text-lg font-semibold text-foreground text-center">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecurityCompliance;
